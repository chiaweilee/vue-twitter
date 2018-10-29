import twitter from './twttr.vue'

export default {
  install: function (Vue) {
    Vue.component('twitter', twitter)
  }
}

export {
  twitter
}
