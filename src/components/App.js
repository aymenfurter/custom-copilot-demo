import React, { useState, useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';
import MonacoXMLEditor from './Editor/MonacoXMLEditor';
import ChatBox from './Chat/ChatBox';
import EditorInitializer from './Editor/EditorInitializer';
import XmlValidator from './Editor/XmlValidator';
import MonacoTheme from './Editor/MonacoTheme';
import CodeSuggester from './Editor/CodeSuggester';

const App = () => {
  const [apiKey, setApiKey] = useState(localStorage.getItem('apiKey') || '');
  const [messages, setMessages] = useState([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const editorRef = useRef(null);
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    if (editorRef.current) {
      const savedContent = localStorage.getItem('editorContent') || `<policies>
    <inbound>
    </inbound>
    <backend>
    </backend>
    <outbound>
    </outbound>
    <on-error>
    </on-error>
</policies>`;

      const initializer = new EditorInitializer(monaco, editorRef.current, MonacoTheme, savedContent);
      const editorInstance = initializer.initialize();
      setEditor(editorInstance);

      const validator = new XmlValidator(editorInstance, monaco);
      editorInstance.onDidChangeModelContent(() => {
        validator.validate();
      });

      editorInstance.onDidChangeModelContent(() => {
        validator.validate();
        const currentContent = editorInstance.getValue();
        localStorage.setItem('editorContent', currentContent);
      });

      const codeSuggester = new CodeSuggester(editorInstance, apiKey, handleSuggestionAccepted);
      codeSuggester.register();

      return () => {
        editorInstance.dispose();
        codeSuggester.dispose();
      };
    }
  }, []);

  const handleApiKeyChange = (event) => {
    setApiKey(event.target.value);
  };

  const handleApiKeySubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('apiKey', apiKey);
  };

  const handleMessageSent = async (message) => {
    setMessages([...messages, { type: 'user', text: message }]);
    setIsStreaming(true);

    const currentModel = monaco.editor.getModels()[0];
    const currentCode = currentModel.getValue();

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content:
              'You are an AI assistant that helps with coding and Azure API Management policy development. Provide helpful suggestions and answers based on the code context and user messages.',
          },
          {
            role: 'user',
            content: `Here's the current code:\n\n${currentCode}\n\nUser message: ${message}`,
          },
        ],
        max_tokens: 350,
        n: 1,
        stream: true,
        temperature: 0.7,
      }),
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let botResponse = '';

    while (true) {
    const { value, done } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value);
    const lines = chunk.split('\n');

    for (const line of lines) {
      if (line.startsWith('data:')) {
        const data = JSON.parse(line.slice(5));
        if (data.choices && data.choices.length > 0) {
          const delta = data.choices[0].delta;
          if (delta.content) {
            botResponse += delta.content;
            setMessages((prevMessages) => {
              const lastMessage = prevMessages[prevMessages.length - 1];
              if (lastMessage.type === 'bot') {
                return [
                  ...prevMessages.slice(0, -1),
                  { type: 'bot', text: lastMessage.text + delta.content },
                ];
              } else {
                return [...prevMessages, { type: 'bot', text: delta.content }];
              }
            });
          }
        }
      }
    }
  }

  setIsStreaming(false);
};

  const handleSuggestionAccepted = (suggestion) => {
  };


    return (
    <div className="app">
      {/* ... */}
      <div className="editor-chat-container">
        <div className="editor">
          <div ref={editorRef} className="monaco-editor" style={{ height: '100%', width: '100%' }} />
          {editor && <MonacoXMLEditor editor={editor} />}
        </div>
        <div className="chat">
          <ChatBox onMessageSent={handleMessageSent} messages={messages} isStreaming={isStreaming} />
        </div>
      </div>
    </div>
  );
};

export default App;