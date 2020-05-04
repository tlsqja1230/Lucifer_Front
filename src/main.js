import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios';
import store from './store'
import webstomp from 'webstomp-client'
import sockjs from 'sockjs-client'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$webstomp = webstomp
Vue.prototype.$sockjs = sockjs

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
