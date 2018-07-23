<template>
  <div id="app">
    <h1>Workbench</h1>
    <vue-glide />
  </div>
</template>

<script>
import VueGlide from './components/Glide.vue'

export default {
  components: {
    [VueGlide.name]: VueGlide
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
}
</style>
