import VueScript2 from 'vue-script2'
export default {
  template: '<div v-if="installed"><slot name="loading" v-if="!ready"/><div v-show="ready"><slot/></div></div><div v-else><slot name="loading"/></div>',
  data () {
    return {
      installed: !!window.twttr,
      ready: false
    }
  },
  mounted () {
    this.install()
  },
  methods: {
    install () {
      if (!this.installed) {
        // install
        VueScript2.load('https://platform.twitter.com/widgets.js')
          .then(() => {
            this.installed = true
            this.$nextTick(() => {
              this.init()
              this.$emit('installed')
            })
          })
          .catch(err => {
            console.error(err)
            this.$emit('err', err)
          })
      } else {
        this.init()
      }
    },
    init () {
      this.$nextTick(() => {
        window.twttr.widgets.load()
          .then(() => {
            this.ready = true
            this.$emit('ready')
          })
          .catch(err => {
            console.error(err)
            this.$emit('err', err)
          })
      })
    }
  }
}
