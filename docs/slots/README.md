# Slots

## default

Default slot used for pass the slide item

```vue
<template>
  <div id="app">
    <vue-glide>
      <vue-glide-slide></vue-glide-slide>
    </vue-glide>
  </div>
</template>
```

## control

Control slot used for pass the control buttons for nav

```vue
<template>
  <div id="app">
    <vue-glide>
      <vue-glide-slide></vue-glide-slide>
      <template slot="control">
        <button data-glide-dir="<">prev</button>
        <button data-glide-dir=">">next</button>
      </template>
    </vue-glide>
  </div>
</template>
```

`data-glide-dir="{pattern}"`

Glide.js defines movement pattern of the specified control when it will be clicked. A pattern must be in the special format:

- `>` - Move one forward
- `<` - Move one backward
- `={i}` - Go to `{i}` zero-based slide (eq. `=1`, will go to second slide)
- `>>` - Rewinds to end (last slide)
- `<<` - Rewinds to start (first slide)