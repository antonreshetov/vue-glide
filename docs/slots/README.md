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

## bullet

Bullet slot used for customizing the bullet navigation.  
When using slot, `bullet: true` prop is not necessary.  
If slot is not provided but `bullet: true` prop is provided, bullets are generated automatically.  
Import theme css for default style or apply own styles.
`import '@glidejs/glide/dist/css/glide.theme.min.css'`

```vue
<template>
  <div id="app">
    <vue-glide>
      <vue-glide-slide></vue-glide-slide>
      <vue-glide-slide></vue-glide-slide>
      <template slot="bullet">
        <button class="glide__bullet" data-glide-dir="=0"></button>
        <button class="glide__bullet" data-glide-dir="=1"></button>
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