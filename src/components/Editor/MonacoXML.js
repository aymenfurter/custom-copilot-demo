import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';
import policySnippets from './PolicySnippets'; // Import policy snippets

const MonacoXML = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const editor = monaco.editor.create(editorRef.current, {
        // Previous options...
        theme: 'vs-dark',
        automaticLayout: true,
        fontSize: 16,
        language: 'xml',
        value: '<policies>\n  <!-- Add your policies here -->\n</policies>',
        minimap: { enabled: true },
      });
      

      // Register a completion item provider for XML that uses our policy snippets
      monaco.languages.registerCompletionItemProvider('xml', {
        provideCompletionItems: () => {
          const suggestions = policySnippets.map(snippet => ({
            label: snippet.label,
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: snippet.snippet,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: snippet.documentation,
          }));
          
          return { suggestions };
        }
      });

      return () => editor.dispose(); // Clean up editor instance on component unmount
    }
  }, []);

  return <div ref={editorRef} className="monaco-editor" style={{ height: '500px', width: '90%' }} />;

};

export default MonacoXML;
