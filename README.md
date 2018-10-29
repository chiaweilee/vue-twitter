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
    <slot name="loading">I am loading...</slot>
    <a class="twitter-timeline" href="https://twitter.com/realDonaldTrump?ref_src=twsrc%5Etfw">Tweets by realDonaldTrump</a>
  </twitter>
</template>
```

*notice*

`<a class="twitter-timeline" href="https://twitter.c...` comes from https://publish.twitter.com/#

get your widget a tag from above link, and parse it as default slot(except the script tag).

### Others

#### use as component

```
import { twitter } from 'vue-twitter'
export default {
  components: {
    twitter
  }
}
```

#### use as component(without template complier)

```
import twitter from 'vue-twitter/lib/twttr.js'
export default {
  components: {
    twitter
  }
}
```
