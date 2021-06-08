import theme from "./theme";
export const methods =  {
  // 初始化编辑器
  initEditor () {
    window.b = this.editor = this.monaco.editor.create(document.getElementById("monaco"),{
      value: ``,
      language: this.lang
    })
  },
  // 定义皮肤
  defineTheme () {
    let res = ['default']
    for (const key in theme) {
      if (Object.hasOwnProperty.call(theme, key)) {
        const el = theme[key];
        this.monaco.editor.defineTheme(key, el);
        res.push(key)
      }
    }
    return res
  },
  setLanguage () {
    const model = a.editor.createModel('', this.lang);
    this.editor.setModel(model);
  },
  autoTips () {
    const vue = this
    monaco.languages.registerCompletionItemProvider('javascript', {
          provideCompletionItems: () => {
            return [{
                label: 'aaa',
                kind: monaco.languages.CompletionItemKind['Function'], //这里Function也可以是别的值，主要用来显示不同的图标
                insertText: 'aaacaca' // 此项没有的话，默认是label值
              }];
          }
    });
  },
  createTips () {
    return [
      {
        label: 'SetValue', //显示的提示名称
        insertText: 'SetValue("text")' //选择后粘贴到编辑器中的文字
      }
    ]
  }
}