import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'assets/stylus/index.styl'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import vConsole from 'vconsole'
fastclick.attach(document.body)
Vue.config.productionTip = false
console.log('test');
Vue.use(VueLazyload,{
     loading: require('assets/images/default.png'),
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
