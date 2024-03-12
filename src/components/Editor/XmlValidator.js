import policySnippets from './PolicySnippets';
import PositionCalculator from './PositionCalculator';
import { validate } from '../../../node_modules/fast-xml-parser/src/validator.js';

class XmlValidator {
  constructor(editor, monaco) {
    this.editor = editor;
    this.monaco = monaco;
    this.positionCalculator = new PositionCalculator();
  }

  validate() {
    const xmlDoc = this._parseXml();
    const errors = [
      ...this._validateXml(this.editor.getValue()),
      ...this._validatePolicyAttributes(xmlDoc),
    ];

    this._setModelMarkers(errors);

    return errors;
  }

  _parseXml() {
    const xmlString = this.editor.getValue();
    return new DOMParser().parseFromString(xmlString, 'text/xml');
  }

  _validateXml(xmlDoc) {
    const errors = [];
    const validationResult = validate(xmlDoc);

    if (validationResult !== true) {
      errors.push({
        severity: this.monaco.MarkerSeverity.Error,
        message: validationResult.err.msg,
        startLineNumber: validationResult.err.line,
        startColumn: validationResult.err.col,
        endLineNumber: validationResult.err.line,
        endColumn: validationResult.err.col + 1,
      });
    }

    return errors;
  }

  _validatePolicyAttributes(xmlDoc) {
    const errors = [];

    policySnippets.forEach(snippet => {
      const elements = xmlDoc.getElementsByTagName(snippet.label);
      Array.from(elements).forEach(element => {
        const allowedAttributes = snippet.attributes || [];
        Array.from(element.attributes).forEach(attribute => {
          if (!allowedAttributes.includes(attribute.name)) {
            errors.push(this._createAttributeError(element, attribute));
          }
        });
      });
    });

    return errors;
  }

  _createAttributeError(element, attribute) {
    const xmlString = this.editor.getValue();
    const lineNumber = this.positionCalculator.getLineNumber(xmlString, element);
    const startColumn = this.positionCalculator.getColumnNumber(xmlString, element, attribute.name);

    return {
      severity: this.monaco.MarkerSeverity.Error,
      message: `Unknown attribute: ${attribute.name}`,
      startLineNumber: lineNumber,
      startColumn: startColumn,
      endLineNumber: lineNumber,
      endColumn: startColumn + attribute.name.length,
    };
  }

  _setModelMarkers(errors) {
    this.monaco.editor.setModelMarkers(this.editor.getModel(), 'xml', errors);
  }

  _updateErrorDecorators(errors) {
    this.editor.deltaDecorations([], errors.map(this._createErrorDecorator));
  }
}

export default XmlValidator;