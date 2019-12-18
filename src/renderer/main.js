/*
 * @Description: 
 * @Author: Achieve
 * @Date: 2019-07-05 14:38:10
 * @LastEditTime : 2019-12-18 11:36:42
 */
import Vue from 'vue'
import axios from 'axios'

import App from './App'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  store,
  template: '<App/>'
}).$mount('#app')
