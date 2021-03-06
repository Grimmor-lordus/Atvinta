import Vue from 'vue'
import App from './App.vue'
import scss from './scss/style.scss'
import store from './store'


Vue.config.productionTip = false

var vueApp = new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

window.__app__ = vueApp;