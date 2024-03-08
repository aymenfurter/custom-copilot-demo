import * as monaco from 'monaco-editor';
import { generateCodeSuggestion } from '../../api/openai';

class CodeSuggester {
  constructor(editor, apiKey, onSuggestionAccepted) {
    this.editor = editor;
    this.apiKey = apiKey;
    this.onSuggestionAccepted = onSuggestionAccepted;
    this.suggestionDelay = 500; 
  }

  async provideCompletionItems(model, position) {
    const currentLine = model.getLineContent(position.lineNumber);
    const currentLineUntrimmed = currentLine.substr(0, position.column - 1);
    const textUntilPosition = model.getValueInRange({
      startLineNumber: position.lineNumber,
      startColumn: 1,
      endLineNumber: position.lineNumber,
      endColumn: position.column,
    });

    if (textUntilPosition.length >= 3) {
      const suggestion = await this.generateContextAwareCodeSuggestion(textUntilPosition, model.getValue(), position);

      if (suggestion) {
        return {
          suggestions: [
            {
              label: suggestion,
              kind: monaco.languages.CompletionItemKind.Snippet,
              insertText: suggestion,
              range: new monaco.Range(position.lineNumber, position.column, position.lineNumber, position.column),
            },
          ],
        };
      }
    }

    return { suggestions: [] };
  }

  async generateContextAwareCodeSuggestion(prompt, context, position) {
    const model = this.editor.getModel();

    if (model) {
      const surroundingCode = this.getSurroundingCode(position);
      const previousLine = model.getLineContent(position.lineNumber - 1);
      const nextLine = model.getLineContent(position.lineNumber + 1);

      const enhancedPrompt = `
        Generate code suggestion for the following prompt in the context of the provided code snippet:

        Language: XML (Azure API Management policy code)

        Prompt: ${prompt}

        Context:
        ${context}

        Surrounding Code:
        ${surroundingCode}

        Previous Line:
        ${previousLine}

        Next Line:
        ${nextLine}

        Considerations:
        - Only reply with the code snippet, no comments, no explanations.
        - Only generate code that can be inserted as-is at the current position. Don't generate any surrounding code.
        - Ensure the generated code is syntactically correct and fits well within the existing code structure.
        - Use appropriate variable names, function names, and coding conventions based on the surrounding code.
        - Consider the context and purpose of the code snippet to provide meaningful suggestions.
        - If the prompt is ambiguous or lacks sufficient context, provide a best-effort suggestion or indicate that more information is needed.
      `;

      return generateCodeSuggestion(enhancedPrompt, context, this.apiKey);
    }

    return null;
  }

  getSurroundingCode(position) {
    const model = this.editor.getModel();
    const startLineNumber = Math.max(1, position.lineNumber - 5);
    const endLineNumber = Math.min(model.getLineCount(), position.lineNumber + 5);

    return model.getValueInRange({
      startLineNumber,
      startColumn: 1,
      endLineNumber,
      endColumn: model.getLineMaxColumn(endLineNumber),
    });
  }

  register() {
    this.completionItemProvider = monaco.languages.registerCompletionItemProvider('xml', {
      provideCompletionItems: async (model, position) => {
        const suggestion = await this.provideCompletionItems(model, position);
        return suggestion;
      },
    });

    this.editor.onDidChangeCursorSelection((event) => {
      const model = this.editor.getModel();
      const position = event.selection.getPosition();
      const word = model.getWordAtPosition(position);

      if (word) {
        const range = new monaco.Range(position.lineNumber, word.startColumn, position.lineNumber, word.endColumn);
        const suggestion = model.getValueInRange(range);

        if (suggestion) {
          this.onSuggestionAccepted(suggestion);
        }
      }
    });
  }

  dispose() {
    if (this.completionItemProvider) {
      this.completionItemProvider.dispose();
    }
  }
}

export default CodeSuggester;