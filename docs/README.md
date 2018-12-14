---
home: true
---

<vue-glide :bullet="true" focusAt="center" type="carousel">
  <vue-glide-slide
    v-for="i in 10"
    :key="i">
    Slide {{ i }}
  </vue-glide-slide>
  <template slot="control">
    <button data-glide-dir="<"><</button>
    <button data-glide-dir=">">></button>
  </template>
</vue-glide>

<script>
import VueGlide from '../src/components/Glide'
import VueGlideSlide from '../src/components/GlideSlide'

export default {
  components: {
    [VueGlide.name]: VueGlide,
    [VueGlideSlide.name]: VueGlideSlide
  }
}
</script>

<style src="./main.scss" lang="scss" />
