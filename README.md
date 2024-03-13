

<div id="top"></div>

<br />
<div align="center">
  <img src="https://raw.githubusercontent.com/aymenfurter/custom-copilot-demo/main/demo.png"> 

  <h1 align="center">Custom Copilot for Monaco (Sample Code)</h1>
  <p align="center">
    This repository contains a sample implementation of an AI-assisted code editor that provides intelligent code suggestions, XML validation, error highlighting, theme customization, and chat integration. The editor leverages the Monaco editor and the OpenAI API to enhance the coding experience. 
    <br />
    <br />
    👉 <a href="https://aymenfurter.github.io/custom-copilot-demo/">Live Demo</a>
    ·
    🐞 <a href="https://github.com/aymenfurter/custom-copilot-demo/issues">Report Bug</a>
    ·
    💡 <a href="https://github.com/aymenfurter/custom-copilot-demo/issues">Request Feature</a>
  </p>
</div>
<br />


## Key Features

### 1. Trigger Code Suggestions (Ctrl + Space)

Users can trigger code suggestions using a keyboard shortcut (Alt + Space on Mac and Ctrl Space on Windows). This is implemented in the `EditorInitializer` class ([src/components/Editor/EditorInitializer.js](https://github.com/aymenfurter/custom-copilot-demo/blob/main/src/components/Editor/EditorInitializer.js#L22-L29)).

``` javascript
const triggerSuggestCommand = this.monaco.KeyMod.Alt | this.monaco.KeyCode.Space;
const contextCondition = 'editorTextFocus && !editorHasSelection && ' +
                         '!editorHasMultipleSelections && !editorTabMovesFocus && ' +
                         '!hasQuickSuggest';

editor.addCommand(triggerSuggestCommand, () => {
  editor.trigger('', 'editor.action.triggerSuggest', '');
}, contextCondition);
``` 

### 2. Model Validation

The `ModelValidation` feature performs XML validation on the editor content and highlights errors. It is implemented in the `XmlValidator` class ([src/components/Editor/XmlValidator.js](src/components/Editor/XmlValidator.js)).

``` javascript
validate() {
    const xmlDoc = this._parseXml();
    const errors = [
      ...this._validateXml(this.editor.getValue()),
      ...this._validatePolicyAttributes(xmlDoc),
    ];

    this._setModelMarkers(errors);

    return errors;
  }
``` 

Model validation is implement in two functions:
* _validateXml validates a generic xml, uisng the [fast-xml-parser](https://www.npmjs.com/package/fast-xml-parser) library
  (limitations of this library are that it returns only the single error and it doesn't return the length of the wrong token)
* _validatePolicyAttributes validates against the API Management Policy attributes
At the moment, there is no a DTD or XSD for API Management Policies xml files.

### 3. Theme Customization

`ThemeCustomization` applies a custom theme to the Monaco editor. The custom theme is defined in the `MonacoTheme` object ([src/components/Editor/MonacoTheme.js](src/components/Editor/MonacoTheme.js)).

``` javascript
_applyTheme() {
  this.monaco.editor.defineTheme('customTheme', this.editorTheme);
  this.monaco.editor.setTheme('customTheme');
}
``` 

### 4. Code Suggestions

The `CodeSuggestions` feature provides context-aware code completion suggestions using the OpenAI API. It is implemented in the `CodeSuggester` class ([src/components/Editor/CodeSuggester.js](src/components/Editor/CodeSuggester.js)).

``` javascript
async provideCompletionItems(model, position) {
  const textUntilPosition = this.getTextUntilPosition(model, position);

  if (textUntilPosition.length < 3) return { suggestions: [] };

  const suggestion = await this.generateContextAwareCodeSuggestion(
    textUntilPosition, 
    model.getValue(), 
    position
  );

  if (!suggestion) return { suggestions: [] };

  return this.buildCompletionSuggestion(suggestion, position);
}
``` 

### 5. Chat Integration

The ChatIntegration feature enhances your coding experience by allowing you to ask questions about your code and utilize the chat interface to diagnose and fix syntax errors. It is implemented in the `ChatBox` component ([src/components/Chat/ChatBox.js](src/components/Chat/ChatBox.js)).

``` javascript
const handleMessageSent = async (message) => {
  setMessages((prevMessages) => [...prevMessages, { type: 'user', text: message }]);
  setIsStreaming(true);
  setHasErrors(false);
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
      max_tokens: 500,
      n: 1,
      stream: true,
      temperature: 0.7,
    }),
  });

  // Process the response and update the chat messages
  // ...
};
``` 


### 6. Syntax Highlighting

The Syntax Highlighting feature configures the Project Monaco editor for the API Management policies files. It is implemented in the `SyntaxHighlighter` component ([src/components/Editor/SyntaxHighlighter.js](src/components/Editor/SyntaxHighlighter.js)).

``` javascript
    initialize() {
        monaco.languages.register({ id: 'apimPolicies' });

        monaco.languages.setMonarchTokensProvider('apimPolicies', {
            tokenizer: {
                root: [
                    // Match XML Tags
                    [/<\/?[a-zA-Z_-]+>/, "tag"],

                    // Match XML Attributes
                    [/([a-zA-Z0-9_-]+)=/, "attribute"],

                    // Match strings (attribute values)
                    [/\"[^\"]*\"/, "string"],

                    // Specific highlighting for commonly used policy sections
                    [/<inbound>/, "custom-inbound"],
                    [/<backend>/, "custom-backend"],
                    [/<outbound>/, "custom-outbound"],
                    [/<on-error>/, "custom-onerror"],

                    // Comments
                    [/<!--[\s\S]*?-->/, "comment"]
                ]
            }
        });

        monaco.editor.defineTheme('apimPolicyTheme', {
            base: 'vs-dark', // can also be vs-dark or hc-black
            inherit: true, // inherits the base theme's styles
            rules: [
                { token: 'tag', foreground: '436ea3' }, // Blue for XML tags
                { token: 'attribute', foreground: 'ff0000'}, // Red for attributes
                { token: 'string', foreground: '008000'}, // Green for attribute values
                { token: 'comment', foreground: 'aaaaaa', fontStyle: 'italic'}, // Grey and italic for comments
                // Custom colors for specific policy sections
                { token: 'custom-inbound', foreground: 'FF4500'}, // Orangered for <inbound>
                { token: 'custom-backend', foreground: '2E8B57'}, // Seagreen for <backend>
                { token: 'custom-outbound', foreground: '1E90FF'}, // Dodgerblue for <outbound>
                { token: 'custom-onerror', foreground: 'DAA520'}, // Goldenrod for <on-error>
            ]
        });

        monaco.editor.setTheme('apimPolicyTheme');
    }
``` 


## Usage
> [!NOTE]
> This is strictly for demonstration and educational purposes, and is not intended or appropriate for production use.
To use the AI-assisted code editor:

- Clone the repository: `git clone https://github.com/aymenfurter/custom-copilot-demo.git`
- Install the dependencies: `npm install`
- Run it: : `npm start`
- Open the browser and set up your OpenAI API key in the App
