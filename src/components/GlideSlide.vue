<template>
  <li
    class="glide__slide"
    :data-glide-index="index">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'VueGlideSlide',

  computed: {
    /**
     * Get index of current slide
     */
    index () {
      return this.$parent.$children.findIndex(slide => slide._uid === this._uid)
    }
  }
}
</script>
