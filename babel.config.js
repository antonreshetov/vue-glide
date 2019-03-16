module.exports = {
  presets: [
    '@vue/app'
  ],
  env: {
    production: {
      presets: [
        [
          '@vue/app',
          { useBuiltIns: false }
        ]
      ]
    }
  }
}
