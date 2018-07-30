import Glide from './components/Glide.vue'
import GlideSlide from './components/GlideSlide.vue'

export default {
  install (Vue, options) {
    Vue.component(Glide.name, Glide)
    Vue.component(GlideSlide.name, GlideSlide)
  }
}
