import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'
import events from './events'

const isVueGlideSlideTag = tag => {
  return tag === 'VueGlideSlide' || tag === 'vue-glide-slide'
}

export default {
  name: 'VueGlide',

  model: {
    prop: 'active',
    event: 'change'
  },

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
    },
    active: {
      type: Number,
      default: null
    }
  },

  data () {
    return {
      glide: undefined
    }
  },

  render (h) {
    let control
    let bullet
    let buttons = []
    // Pass only vue-glide-slide
    let slides = this.$slots.default.filter(
      c => c.componentOptions && isVueGlideSlideTag(c.componentOptions.tag)
    )

    if (this.$slots.control && this.$slots.control.length) {
      control = <div data-glide-el="controls">{this.$slots.control}</div>
    }

    if (this.bullet) {
      for (let i = 0; i < this.slidesCount; i++) {
        buttons.push(
          h('button', {
            key: i,
            attrs: {
              'data-glide-dir': '=' + i,
              class: 'glide__bullet'
            }
          })
        )
      }

      bullet = (
        <div class="glide__bullets" data-glide-el="controls[nav]">
          {buttons}
        </div>
      )
    }

    return (
      <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">{slides}</ul>
        </div>
        {control}
        {bullet}
      </div>
    )
  },

  watch: {
    active () {
      this.changeSlideByModel()
    }
  },

  computed: {
    currentSlide () {
      return this.glide.index
    },
    slidesCount () {
      return this.$slots.default.filter(
        c => c.componentOptions && isVueGlideSlideTag(c.componentOptions.tag)
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
      this.eventConnector(events)
      this.glide.mount()
      this.addEventListenerToSlide()
      this.bindModel()
      this.changeSlideByModel()
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
     * Bind v-model
     */
    bindModel () {
      this.$on('glide:move', () => {
        this.$emit('change', this.currentSlide)
      })
    },
    /**
     * Change slide by v-model
     */
    changeSlideByModel () {
      if (this.active === null) return
      if (this.active > this.slidesCount - 1) {
        return this.go(`=${this.slidesCount - 1}`)
      }
      if (this.active < 0) {
        return this.go('=0')
      }
      this.go(`=${this.active}`)
    },
    /**
     * Adding an event handler for slides, including DOM cloned slider elements
     * When type is 'carousel', glide.js clones DOM slides
     * @returns {number} - index of slide
     */
    addEventListenerToSlide () {
      let slides = document.querySelectorAll('.glide__slide')

      slides = Array.from(slides)

      slides.forEach(el => {
        el.addEventListener('click', e => {
          // Recursive bubbling from nested elements to find '.glide__slide'
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
