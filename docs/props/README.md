# Props

## type

Type of the movement. Available types

**Type:** `String`

**Accepted values:** slider, carousel

**Default:** slider

## startAt

Start at specific slide number defined with zero-based index

**Type:** `Number`

**Accepted values:** -

**Default:** `0`

## perView

A number of slides visible on the single viewport

**Type:** `Number`

**Accepted values:** -

**Default:** `3`

## focusAt

Focus currently active slide at a specified position in the track. Available inputs

**Type:** `String`, `Number`

**Accepted values:** center, `1`,`2`,`3`...

**Default:** `0`

## gap

A size of the gap added between slides

**Type:** `Number`

**Accepted values:** -

**Default:** `10`

## autoplay

Change slides after a specified interval. Use `false` for turning off autoplay

**Type:** `Number`, `Boolean`

**Accepted values:** -

**Default:** `false`

## hoverpause

Stop autoplay on mouseover event

**Type:** `Boolean`

**Accepted values:** -

**Default:** `true`

## keyboard

Allow for changing slides with left and right keyboard arrows

**Type:** `Boolean`

**Accepted values:** -

**Default:** `true`

## bound

Stop running `perView` number of slides from the end. Use this option if you don't want to have an empty space after a slider

**Type:** `Boolean`

**Accepted values:** -

**Default:** `false`

## swipeThreshold

Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping

**Type:** `Number`, `Boolean`

**Accepted values:** -

**Default:** `80`

## dragThreshold

Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging

**Type:** `Number`, `Boolean`

**Accepted values:** -

**Default:** `120`

## perTouch

A maximum number of slides to which movement will be made on swiping or dragging. Use `false` for unlimited

**Type:** `Number`, `Boolean`

**Accepted values:** -

**Default:** `false`

## touchRatio

Alternate moving distance ratio of the slides on a swiping and dragging

**Type:** `Number`

**Accepted values:** -

**Default:** `0.5`

## touchAngle

Angle required to activate slides moving on swiping or dragging

**Type:** `Number`

**Accepted values:** -

**Default:** `45`

## animationDuration

Duration of the animation in milliseconds

**Type:** `Number`

**Accepted values:** -

**Default:** `100`

## rewind

Allows looping the slider type. Slider will rewind to the first/last slide when it's at the start/end

**Type:** `Boolean`

**Accepted values:** -

**Default:** `true`

## rewindDuration

Duration of the rewinding animation of the slider type in milliseconds

**Type:** `Number`

**Accepted values:** -

**Default:** `800`

## animationTimingFunc

Easing function for the animation

**Type:** `String`

**Accepted values:** -

**Default:** `cubic-bezier(0.165, 0.840, 0.440, 1.000)`

## direction

Moving direction mode. Available inputs

**Type:** `String`

**Accepted values:** ltr, rtl

**Default:** `cubic-bezier(0.165, 0.840, 0.440, 1.000)`

## peek

The distance value of the next and previous viewports which have to peek in the current view. Accepts number and pixels as a string. Left and right peeking can be setup separately with a directions object

- `100` - peek 100px on the both sides
- `{ before: 100, after: 50 }` - peek 100px on the left side and 50px on the right side

**Type:** `Number`, `Object`

**Accepted values:** -

**Default:** `0`

## breakpoints

Collection of options applied at specified media breakpoints

For example, display two slides per view under 800px:

```
{
  800: {
    perView: 2
  }
}
```

**Type:** `Object`

**Accepted values:** -

**Default:** `{}`

## classes

Collection of internally used HTML classes. Default values:

```
{
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
```

**Type:** `Object`

**Accepted values:** -

**Default:**

## throttle

Throttle costly events at most once per every wait milliseconds

**Type:** `Number`

**Accepted values:** -

**Default:** `25`

## options

For convenience, the transfer of all of the above properties in a single object

**Type:** `Object`

**Accepted values:** -

**Default:** `{}`
