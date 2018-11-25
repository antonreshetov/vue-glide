# vue-glide

![npm](https://img.shields.io/npm/v/vue-glide-js.svg)
![issue](https://img.shields.io/github/issues/antonreshetov/vue-glide.svg)
![license](https://img.shields.io/github/license/antonreshetov/vue-glide.svg)
![tweet](https://img.shields.io/twitter/url/https/github.com/antonreshetov/vue-glide.svg?style=social)

Vue component on top of the [Glide.js](https://github.com/glidejs/glide)

## Documentation

[https://antonreshetov.github.io/vue-glide](https://antonreshetov.github.io/vue-glide/)

## Install

### NPM

Installing with npm is recommended and it works seamlessly with webpack.

```bash
npm i vue-glide-js
```

### Download

You can download latest version from the Github: [Download](https://github.com/antonreshetov/vue-glide/archive/master.zip)

## Quick Start

### Global

To use in your project, just import vue-glide and install into Vue.

```js
import Vue from 'vue'
import VueGlide from 'vue-glide-js'
import App from './App.vue'

Vue.use(VueGlide)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

### On demand

```html
<template>
  <div id="app">
    <vue-glide>
      <vue-glide-slide v-for="i in 10" :key="i">
        Slide {{ i }}
      </vue-glide-slide>
    </vue-glide>
  </div>
</template>

<script>
  import VueGlide from 'vue-glide-js/src/components/Glide.vue'
  import VueGlideSlide from 'vue-glide-js/src/components/GlideSlide.vue'

  export default {
    components: {
      [VueGlide.name]: VueGlide,
      [VueGlideSlide.name]: VueGlideSlide
    }
  }
</script>
```

## License

MIT © 2018-present [Anton Reshetov](http://antonreshetov.com)
