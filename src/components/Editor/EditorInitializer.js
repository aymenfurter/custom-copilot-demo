class EditorInitializer {
  constructor(monaco, editorRef, theme, savedContent) {
    this.monaco = monaco;
    this.editorRef = editorRef;
    this.theme = theme;
    this.savedContent = savedContent;
  }

  initialize() {
    const editor = this.monaco.editor.create(this.editorRef, {
      automaticLayout: true,
      fontSize: 16,
      language: 'xml',
      value: this.savedContent,
      minimap: { enabled: true },
    });

    editor.addCommand(
      monaco.KeyMod.Alt | monaco.KeyCode.Space,
      () => {
        editor.trigger('', 'editor.action.triggerSuggest', '');
      },
      'editorTextFocus && !editorHasSelection && ' +
      '!editorHasMultipleSelections && !editorTabMovesFocus && ' +
      '!hasQuickSuggest'
    );
    

    this.monaco.editor.defineTheme('customTheme', this.theme);
    this.monaco.editor.setTheme('customTheme');

    return editor;
  }
}

export default EditorInitializer;