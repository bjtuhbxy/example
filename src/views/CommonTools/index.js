
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';  // 编辑器插件
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';  // 语法高亮
import 'monaco-editor/esm/vs/basic-languages/python/python.contribution';
import 'monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution';
import { methods } from './methods.js'  // 方法模块
export default {
  name: 'CodeEdit',
  components: {
  },
  data () {
    return {
      monaco: monaco,
      editor: null,
      theme: 'default',
      themes: [],
      lang: 'python',
      languages: ['python', 'cpp', 'javascript']
    }
  },
  mounted() {
    const vue = this
    window.a = monaco
    vue.initEditor()
    vue.themes = vue.defineTheme()
  },
  methods: methods
}