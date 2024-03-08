import React, { useState } from 'react';
import MonacoXMLEditor from './Editor/MonacoXMLEditor';
import ChatBox from './Chat/ChatBox';

const App = () => {
  const [apiKey, setApiKey] = useState(localStorage.getItem('apiKey') || '');
  const [messages, setMessages] = useState([]);

  const handleApiKeyChange = (event) => {
    setApiKey(event.target.value);
  };

  const handleApiKeySubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('apiKey', apiKey);
  };

  const handleMessageSent = async (message) => {
    setMessages([...messages, { type: 'user', text: message }]);

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
        max_tokens: 150,
        n: 1,
        stop: null,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (data.choices && data.choices.length > 0) {
      const botResponse = data.choices[0].message.content.trim();
      setMessages((prevMessages) => [...prevMessages, { type: 'bot', text: botResponse }]);
    }
  };

  const handleSuggestionAccepted = (suggestion) => {
  };

  return (
    <div className="app">
      <div className="api-key-container">
        <form onSubmit={handleApiKeySubmit}>
          <input
            type="password"
            value={apiKey}
            onChange={handleApiKeyChange}
            placeholder="Enter your OpenAI API key"
            className="api-key-input"
          />
          <button type="submit" className="api-key-submit">Set API Key</button>
        </form>
      </div>
      <div className="editor-chat-container">
        <div className="editor">
          <MonacoXMLEditor apiKey={apiKey} onSuggestionAccepted={handleSuggestionAccepted} />
        </div>
        <div className="chat">
          <ChatBox onMessageSent={handleMessageSent} messages={messages} />
        </div>
      </div>
    </div>
  );
};

export default App;