module.exports = {
  base: '/vue-glide/',
  title: 'Vue Glide',
  editLinks: true,
  description: 'Vue component on top of the Glide.js',
  ga: 'UA-56182454-7',
  themeConfig: {
    nav: [
      {
        text: 'Other project',
        items: [
          {
            text: 'Vue Eva Icons',
            link: 'https://github.com/antonreshetov/vue-eva-icons'
          },
          { text: 'Email signature generator', link: 'https://mysigmail.com' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/antonreshetov/vue-glide' }
    ],
    sidebar: ['/introduce/', '/getting-started/', '/props/', '/slots/', '/v-model/']
  }
}
