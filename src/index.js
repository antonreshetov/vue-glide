import Glide from './components/Glide'
import GlideSlide from './components/GlideSlide'

export default {
  install (Vue, options) {
    Vue.component(Glide.name, Glide)
    Vue.component(GlideSlide.name, GlideSlide)
  }
}

export { Glide, GlideSlide }
