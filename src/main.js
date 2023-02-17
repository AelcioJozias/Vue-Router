import './style.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const vm = new Vue({
  router,
  render: createElement => createElement(App),
}).$mount('#app')
