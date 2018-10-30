## vue-twitter

### Install

```
npm install vue-twitter
```

### Usage

```js
import Vue from 'vue'
import twitter from 'vue-twitter'

Vue.use(twitter)
```

```vue.js
<template>
  <twitter>
    <a class="twitter-timeline" href="https://twitter.com/realDonaldTrump?ref_src=twsrc%5Etfw">Tweets by realDonaldTrump</a>
  </twitter>
</template>
```

*notice*

`<a class="twitter-timeline" href="https://twitter.c...` comes from https://publish.twitter.com/#

get your `widget HTML code` from above link, and parse it as default slot(except the script tag).

### Use loading

```vue.js
<template>
  <twitter>
    <div slot="loading">loading .....</div>
    <a class="twitter-timeline" href="https://twitter.com/realDonaldTrump?ref_src=twsrc%5Etfw">Tweets by realDonaldTrump</a>
  </twitter>
</template>
```

### Others

#### use as component(use vue-loader)

```
import { twitter } from 'vue-twitter'
export default {
  components: {
    twitter
  }
}
```

#### use as component(need template complier on Vue-cli3)

```
import twitter from 'vue-twitter/lib/twttr.js'
export default {
  components: {
    twitter
  }
}
```
