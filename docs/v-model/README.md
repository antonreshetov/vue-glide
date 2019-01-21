# V-model

Vue Glide support `v-model`. The current active slide index.


```vue
<template>
  <vue-glide v-model="active">
    <vue-glide-slide
      v-for="i in 10"
      :key="i">
      Slide {{ i }}
    </vue-glide-slide>
  </vue-glide>
</template>

<script>
export default {
  data () {
    return {
      active: 4 // zero-based slide
    }
  },
}
</script>
```