<h1 align="center">Vue Glide</h1>

<p align="center">
  <img src="https://img.shields.io/npm/v/vue-glide-js.svg">
  <img src="https://img.shields.io/github/issues/antonreshetov/vue-glide.svg">
  <img src="https://img.shields.io/npm/dw/vue-glide-js.svg">
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/vue-glide-js.svg">
  <img src="https://travis-ci.com/antonreshetov/vue-glide.svg?branch=master">
  <img src="https://img.shields.io/github/license/antonreshetov/vue-glide.svg">
</p>

<p align="center">Vue component on top of the <a href="https://github.com/glidejs/glide">Glide.js</a></p>

<img src="./docs/hero.png">

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
import App from './App.vue'
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'

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
  import { Glide, GlideSlide } from 'vue-glide-js'

  export default {
    components: {
      [Glide.name]: Glide,
      [GlideSlide.name]: GlideSlide
    }
  }
</script>
```

## License

MIT © 2018-present [Anton Reshetov](http://antonreshetov.com)
