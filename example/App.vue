<template>
  <div>
    <a
      href="#"
      @click="t(1)">test 1</a>
    <a
      href="#"
      @click="t(2)">test 2</a>
    <twitter
      v-if="test === 1"
      @err="onErr"
      @installed="onInstalled"
      @ready="onReady">
      <div slot="loading">loading 1.....</div>
      <a
        href="https://twitter.com/intent/tweet?screen_name=realDonaldTrump&ref_src=twsrc%5Etfw"
        class="twitter-mention-button"
        data-show-count="false">Tweet to @realDonaldTrump</a>
    </twitter>
    <twitter
      v-if="test === 2"
      @err="onErr"
      @installed="onInstalled"
      @ready="onReady">
      <div slot="loading">loading 2.....</div>
      <a
        class="twitter-timeline"
        href="https://twitter.com/realDonaldTrump?ref_src=twsrc%5Etfw">Tweets by realDonaldTrump</a>
    </twitter>
  </div>
</template>

<script>
export default {
  data () {
    return {
      test: 1
    }
  },
  methods: {
    t (t) {
      this.test = t
    },
    onErr () {
      console.log('err')
    },
    onInstalled () {
      console.log('installed')
    },
    onReady () {
      console.log('ready')
    }
  }
}
</script>
