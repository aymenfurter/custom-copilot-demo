// ./src/components/Editor/MonacoXML.js

import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';
import policySnippets from './PolicySnippets';
import { MonacoTheme } from './MonacoTheme';

const MonacoXML = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const editor = monaco.editor.create(editorRef.current, {
        automaticLayout: true,
        fontSize: 16,
        language: 'xml',
        value: '<policies>\n  <inbound>\n    <!-- Add your inbound policies here -->\n  </inbound>\n  <backend>\n    <!-- Add your backend policies here -->\n  </backend>\n  <outbound>\n    <!-- Add your outbound policies here -->\n  </outbound>\n  <on-error>\n    <!-- Add your error handling policies here -->\n  </on-error>\n</policies>',
        minimap: { enabled: true },
      });

      monaco.editor.defineTheme('customTheme', MonacoTheme);
      monaco.editor.setTheme('customTheme');

      // Register a completion item provider for XML that uses our policy snippets
      monaco.languages.registerCompletionItemProvider('xml', {
        provideCompletionItems: () => {
          const suggestions = policySnippets.map(snippet => ({
            label: snippet.label,
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: snippet.insertText,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: snippet.documentation,
          }));

          return { suggestions };
        }
      });

      // Define the expected structure of the policies
      const expectedStructure = `
        <policies>
          <inbound>
          </inbound>
          <backend>
          </backend>
          <outbound>
          </outbound>
          <on-error>
          </on-error>
        </policies>
      `;

      // Validate the XML structure
      const validateXml = () => {
        const value = editor.getValue();
        const xmlDoc = new DOMParser().parseFromString(value, 'text/xml');
        const errors = [];

        // Check if the expected structure is present
        const requiredElements = ['inbound', 'backend', 'outbound', 'on-error'];
        requiredElements.forEach(element => {
          if (!xmlDoc.querySelector(`policies > ${element}`)) {
            errors.push({
              severity: monaco.MarkerSeverity.Error,
              message: `Missing required element: <${element}>`,
              startLineNumber: 1,
              startColumn: 1,
              endLineNumber: 1,
              endColumn: 1,
            });
          }
        });

        // Check for unknown attributes in policy snippets
        policySnippets.forEach(snippet => {
          const elements = xmlDoc.getElementsByTagName(snippet.label);
          for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const allowedAttributes = snippet.attributes || [];
            for (let j = 0; j < element.attributes.length; j++) {
              const attribute = element.attributes[j];
              if (!allowedAttributes.includes(attribute.name)) {
                const lineNumber = getLineNumber(value, element);
                const startColumn = getColumnNumber(value, element, attribute.name);
                errors.push({
                  severity: monaco.MarkerSeverity.Error,
                  message: `Unknown attribute: ${attribute.name}`,
                  startLineNumber: lineNumber,
                  startColumn: startColumn,
                  endLineNumber: lineNumber,
                  endColumn: startColumn + attribute.name.length,
                });
              }
            }
          }
        });

        // Set the markers for errors
        monaco.editor.setModelMarkers(editor.getModel(), 'xml', errors);

        // Display error details in the editor's gutter
        errors.forEach(error => {
          const startPosition = new monaco.Position(error.startLineNumber, error.startColumn);
          const endPosition = new monaco.Position(error.endLineNumber, error.endColumn);
          const range = new monaco.Range(startPosition.lineNumber, startPosition.column, endPosition.lineNumber, endPosition.column);
          editor.deltaDecorations([], [
            {
              range,
              options: {
                isWholeLine: false,
                className: 'error-marker',
                glyphMarginClassName: 'error-glyph',
                glyphMarginHoverMessage: {
                  value: error.message,
                },
              },
            },
          ]);
        });
      };

      // Helper function to get the line number of an element
      const getLineNumber = (value, element) => {
        const lines = value.split('\n');
        const index = value.indexOf(element.outerHTML);
        let lineNumber = 1;
        let currentIndex = 0;
        for (let i = 0; i < lines.length; i++) {
          currentIndex += lines[i].length + 1;
          if (currentIndex > index) {
            lineNumber = i + 1;
            break;
          }
        }
        return lineNumber;
      };

      // Helper function to get the column number of an attribute
      const getColumnNumber = (value, element, attributeName) => {
        const lines = value.split('\n');
        const lineNumber = getLineNumber(value, element);
        const line = lines[lineNumber - 1];
        const attributeIndex = line.indexOf(attributeName);
        return attributeIndex + 1;
      };

      // Validate the XML on editor content change
      editor.onDidChangeModelContent(() => {
        validateXml();
      });

      return () => editor.dispose();
    }
  }, []);

  return <div ref={editorRef} className="monaco-editor" style={{ height: '100%', width: '100%' }} />;
};

export default MonacoXML;