<template>
  <div id="app">
    <h1>Workbench</h1>
    <vue-glide class="demo" :toSlideByClick="true">
      <vue-glide-slide>0</vue-glide-slide>
      <vue-glide-slide>1</vue-glide-slide>
      <vue-glide-slide>3</vue-glide-slide>
      <vue-glide-slide>4</vue-glide-slide>
      <vue-glide-slide>5</vue-glide-slide>
      <vue-glide-slide>6</vue-glide-slide>
    </vue-glide>
  </div>
</template>

<script>
import VueGlide from './components/Glide.vue'
import VueGlideSlide from './components/GlideSlide.vue'

export default {
  components: {
    [VueGlide.name]: VueGlide,
    [VueGlideSlide.name]: VueGlideSlide
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .demo {
    .glide {
      &__slide {
        display: flex;
        border: 2px solid #ccc;
        height: 200px;
        align-items: center;
        justify-content: center;
        color: #aaa;
        font-size: 36px;
        font-weight: 600;
        border-radius: 5px;
        transition: all .3s;
        opacity: .3;
        &--active {
          border: none;
          color: #fff;
           opacity: 1;
          // background: linear-gradient(-45deg,#ed145b,#7b31f4);
          background-color: limegreen;
        }
      }
    }
  }
}
</style>
