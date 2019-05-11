import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/font/iconfont.js'
import '@/assets/font/iconfont.css'
import IconFont from '_c/icon-font'
import IconSvg from '_c/icon-svg'
import './plugins/iview.js'

Vue.component('icon-font', IconFont)
Vue.component('icon-svg', IconSvg)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
