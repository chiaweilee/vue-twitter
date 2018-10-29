import Vue from 'Vue'
import App from './App.vue'
import twitter from '../src'

Vue.config.productionTip = false
Vue.use(twitter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  template: '<App/>',
  components: {App}
})
