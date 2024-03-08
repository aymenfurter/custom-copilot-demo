import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';
import EditorInitializer from './EditorInitializer';
import XmlValidator from './XmlValidator';
import MonacoTheme from './MonacoTheme';
import CodeSuggester from './CodeSuggester';

const MonacoXMLEditor = ({ apiKey, onSuggestionAccepted }) => {
  const editorRef = useRef(null);

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
        const editor = initializer.initialize();

        const validator = new XmlValidator(editor, monaco);
        editor.onDidChangeModelContent(() => {
          validator.validate();
        });

        editor.onDidChangeModelContent(() => {
          validator.validate();
          const currentContent = editor.getValue();
          localStorage.setItem('editorContent', currentContent);
        });

        const codeSuggester = new CodeSuggester(editor, apiKey, onSuggestionAccepted);
        codeSuggester.register();

        return () => {
          editor.dispose();
          codeSuggester.dispose();
        };
      }
    }, [apiKey, onSuggestionAccepted]);

  return <div ref={editorRef} className="monaco-editor" style={{ height: '100%', width: '100%' }} />;
};

export default MonacoXMLEditor;