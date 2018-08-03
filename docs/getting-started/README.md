---
sidebarDepth: 2
---
# Getting Started

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

```vue
<template>
  <div id="app">
    <vue-glide>
      <vue-glide-slide
        v-for="i in 10"
        :key="i">
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

### Example

<vue-glide>
  <vue-glide-slide
    v-for="i in 10"
    :key="i">
    Slide {{ i }}
  </vue-glide-slide >
</vue-glide>

<script>
import VueGlide from '../../src/components/Glide.vue'
import VueGlideSlide from '../../src/components/GlideSlide.vue'

export default {
  components: {
    [VueGlide.name]: VueGlide,
    [VueGlideSlide.name]: VueGlideSlide
  }
}
</script>
<style src="../main.scss" lang="scss" />
