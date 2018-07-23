<template>
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li class="glide__slide">0</li>
        <li class="glide__slide">1</li>
        <li class="glide__slide">2</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'
import events from './events'

export default {
  name: 'VueGlide',

  data () {
    return {
      glide: undefined
    }
  },

  mounted () {
    this.glide = new Glide(this.$el)
    this.glide.mount()
    this.eventConnector(events)
  },

  methods: {
    eventConnector (events) {
      events.map(event => {
        this.glide.on(event, () => {
          const emmiter = event.replace(/\./, '-')
          this.$emit(`glide:${emmiter}`)
        })
      })
    }
  }
}
</script>
