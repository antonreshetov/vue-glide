<template>
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <slot></slot>
      </ul>
    </div>
    <div data-glide-el="controls" v-if="$slots.control">
      <slot name="control"></slot>
    </div>
    <div
      class="glide__bullets"
      data-glide-el="controls[nav]"
      v-if="bullet">
      <button
        class="glide__bullet"
        v-for="index in slidesCount"
        :key="index"
        :data-glide-dir="`=${index - 1}`">
      </button>
    </div>
  </div>
</template>

<script>
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'
import events from './events'

export default {
  name: 'VueGlide',

  props: {
    type: {
      type: String,
      default: 'slider'
    },
    startAt: {
      type: Number,
      default: 0
    },
    perView: {
      type: Number,
      default: 3
    },
    focusAt: {
      type: [String, Number],
      default: 0
    },
    gap: {
      type: Number,
      default: 10
    },
    autoplay: {
      type: [Number, Boolean],
      default: false
    },
    hoverpause: {
      type: Boolean,
      default: true
    },
    keyboard: {
      type: Boolean,
      default: true
    },
    bound: {
      type: Boolean,
      default: false
    },
    swipeThreshold: {
      type: [Number, Boolean],
      default: 80
    },
    dragThreshold: {
      type: [Number, Boolean],
      default: 120
    },
    perTouch: {
      type: [Number, Boolean],
      default: false
    },
    touchRatio: {
      type: Number,
      default: 0.5
    },
    touchAngle: {
      type: Number,
      default: 45
    },
    animationDuration: {
      type: Number,
      default: 400
    },
    rewind: {
      type: Boolean,
      default: true
    },
    rewindDuration: {
      type: Number,
      default: 800
    },
    animationTimingFunc: {
      type: String,
      default: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)'
    },
    direction: {
      type: String,
      default: 'ltr'
    },
    peek: {
      type: [Number, Object],
      default: 0
    },
    breakpoints: {
      type: Object,
      default: () => {}
    },
    classes: {
      type: Object,
      default: () => {}
    },
    throttle: {
      type: Number,
      default: 25
    },
    toSlideByClick: {
      type: Boolean,
      default: false
    },
    bullet: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      default: () => {}
    }
  },

  data () {
    return {
      glide: undefined
    }
  },

  computed: {
    currentSlide () {
      return this.glide.index
    },
    slidesCount () {
      return this.$slots.default.filter(
        c => c.componentOptions && c.componentOptions.tag === 'vue-glide-slide'
      ).length
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    /**
     * Initialization glide
     */
    init () {
      const defaultClasses = {
        direction: {
          ltr: 'glide--ltr',
          rtl: 'glide--rtl'
        },
        slider: 'glide--slider',
        carousel: 'glide--carousel',
        swipeable: 'glide--swipeable',
        dragging: 'glide--dragging',
        cloneSlide: 'glide__slide--clone',
        activeNav: 'glide__bullet--active',
        activeSlide: 'glide__slide--active',
        disabledArrow: 'glide__arrow--disabled'
      }

      const initOptions = Object.assign({}, this.$props)
      // Remove additional props 'options'
      delete initOptions.options

      initOptions.classes = Object.assign(defaultClasses, this.classes)

      const mergedOptions = Object.assign(initOptions, this.options)

      if (this.toSlideByClick) {
        this.goToSlideByClick()
      }

      this.glide = new Glide(this.$el, mergedOptions)
      this.glide.mount()
      this.eventConnector(events)
      this.addEventListenerToSlide()
    },
    /**
     * Go to the slide
     * @param {string} pattern - special format glide.js api
     * Available pattern:
     * * > - Move one forward
     * * < - Move one backward
     * * ={i} - Go to {i} zero-based slide (eq. '=1', will go to second slide)
     * * >> - Rewinds to end (last slide)
     * * << - Rewinds to start (first slide)
     */
    go (pattern) {
      this.glide.go(pattern)
    },
    /**
     * Go to the slide by click on slide
     */
    goToSlideByClick () {
      this.$on('glide:slide-click', e => this.go(`=${e}`))
    },
    /**
     * Pass glide events to Vue events
     * @param {array} - glide events
     */
    eventConnector (events) {
      events.map(event => {
        this.glide.on(event, e => {
          const emitter = event.replace(/\./, '-')
          this.$emit(`glide:${emitter}`, e)
        })
      })
    },
    /**
     * Add event listener to not of Vue component to emit Vue event
     * When type is 'carousel', glide.js clones DOM slides
     * @returns {number} - index of slide
     */
    addEventListenerToSlide () {
      const slides = document.querySelectorAll('.glide__slide')

      slides.forEach(el => {
        el.addEventListener('click', e => {
          // Recursive bubbling from nested elems to find '.glide__slide'
          const recursive = el => {
            const parent = el.parentNode
            const contain = parent.classList.contains('glide__slide')
            if (contain) {
              return this.$emit(
                'glide:slide-click',
                Number(parent.dataset.glideIndex)
              )
            } else {
              recursive(parent)
            }
          }

          if (!e.target.classList.contains('glide__slide')) {
            recursive(e.target)
          }

          this.$emit('glide:slide-click', Number(e.target.dataset.glideIndex))
        })
      })
    }
  }
}
</script>
