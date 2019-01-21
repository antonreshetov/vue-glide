# Events

Vue Glide provide Glide.js event with prefix `glide:` and replace dot to dash. Also Vue Glide provide one custom event for click by slide.

## glide:mount-before

Called before first mounting begins. However, the mounting phase has not been started, and components are not bootstrapped yet.

## glide:mount-after

Called right after first mounting. All components have been mounted.

## glide:update

Called right after updating settings with `glide.update()` API method.

## glide:play

Called right after starting an instance with `glide.play()` API method.

## glide:pause

Called right after stopping instance with `glide.pause()` API method.

## glide:build-before

Called right before setting up a slider to its initial state. At this point, classes, translations, and sizes are applied.

## glide:build-after

Called right after setting up a slider to its initial state. At this point, classes, translations, and sizes are applied.

## glide:run-before

**payload**: `{Object} move`

Called right before calculating new index and making a transition. The movement schema `(eg. =1)` string has been parsed.


## glide:run

**payload**: `{Object} move`

Called right after calculating new index and before making a transition. The movement schema `(eg. =1)` string has been parsed.

## glide:run-after

**payload**: `{Object} move`

Called after calculating new index and making a transition. The movement schema `(eg. =1)` string has been parsed.


## glide:run-offset

**payload**: `{Object} move`

Called after calculating new index and making a transition, while we did an offset animation. Offset animation take place at two moments:

- changing slide from first to the last one
- changing slide from last to the first one

## glide:run-start

**payload**: `{Object} move`

Called right after calculating the new index, but before making a transition, while we did a rewinding to the start index.


## glide:run-end

**payload**: `{Object} move`

Called right after calculating the new index, but before making a transition, while we did a rewinding to the last index.

## glide:move

**payload**: `{Number} movement`

Called right before movement transition begins.

## glide:move-after

**payload**: `{Number} movement`

Called right after movement transition ends.

## glide:resize

Called when the window is being resized. This event throttled.

## glide:swipe-start

Called right after swiping begins.

## glide:swipe-move

Called during swiping movement.

## glide:swipe-end

Called right after swiping ends.

## glide:translate-jump

**payload**: `{Number} movement`

Called right before a translate applies, while we doing a jump to the first or last slide from offset movement. This event is only used when a type is set up to `carousel`.


## glide:slide-click 

**payload**: `{Number}` - index of the slide

Called right after clicking on the slide.


