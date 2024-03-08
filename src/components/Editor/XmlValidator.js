import policySnippets from './PolicySnippets';
import PositionCalculator from './PositionCalculator';

class XmlValidator {
  constructor(editor, monaco) {
    this.editor = editor;
    this.monaco = monaco;
    this.positionCalculator = new PositionCalculator();
  }

  validate() {
    const value = this.editor.getValue();
    const xmlDoc = new DOMParser().parseFromString(value, 'text/xml');
    const errors = [];

    // Check if the expected structure is present
    const requiredElements = ['inbound', 'backend', 'outbound', 'on-error'];
    requiredElements.forEach(element => {
      if (!xmlDoc.querySelector(`policies > ${element}`)) {
        errors.push({
          severity: this.monaco.MarkerSeverity.Error,
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
            const lineNumber = this.positionCalculator.getLineNumber(value, element);
            const startColumn = this.positionCalculator.getColumnNumber(value, element, attribute.name);
            errors.push({
              severity: this.monaco.MarkerSeverity.Error,
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
    this.monaco.editor.setModelMarkers(this.editor.getModel(), 'xml', errors);

    // Display error details in the editor's gutter
    errors.forEach(error => {
      const startPosition = new this.monaco.Position(error.startLineNumber, error.startColumn);
      const endPosition = new this.monaco.Position(error.endLineNumber, error.endColumn);
      const range = new this.monaco.Range(startPosition.lineNumber, startPosition.column, endPosition.lineNumber, endPosition.column);
      this.editor.deltaDecorations([], [
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
  }
}

export default XmlValidator;