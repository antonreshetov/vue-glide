<template>
  <li
    class="glide__slide"
    @click="root.$emit('glide:slide-click')"
    :data-glide-index="index">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'VueGlideSlide',

  inject: ['root'],

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
