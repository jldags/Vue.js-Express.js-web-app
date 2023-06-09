// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import router from './router'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(ElementUI, {locale})

const store = require('./state/store')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { 'App': App },
  template: '<App/>'
})
