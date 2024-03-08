class PositionCalculator {
  getLineNumber(value, element) {
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
  }

  getColumnNumber(value, element, attributeName) {
    const lines = value.split('\n');
    const lineNumber = this.getLineNumber(value, element);
    const line = lines[lineNumber - 1];
    const attributeIndex = line.indexOf(attributeName);
    return attributeIndex + 1;
  }
}

export default PositionCalculator;