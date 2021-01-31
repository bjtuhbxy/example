import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import HD from './assets/js/dev-tools.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.hd = new HD()

window.addEventListener('error', err => {
  console.log('捕获到报错：', err);
})

const v = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Object.assign(window, {v: v})