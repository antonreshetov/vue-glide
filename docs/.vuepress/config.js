module.exports = {
  base: '/vue-glide/',
  title: 'Vue Glide',
  editLinks: true,
  description: 'Vue component on top of the Glide.js',
  ga: 'UA-56182454-7',
  themeConfig: {
    activeHeaderLinks: false,
    nav: [
      {
        text: 'API',
        link: '/props/'
      },
      {
        text: 'Other project',
        items: [
          { text: 'Email signature generator', link: 'https://github.com/antonreshetov/mysigmail' },
            {
              text: 'Vue Eva Icons',
              link: 'https://github.com/antonreshetov/vue-eva-icons'
            },
        ]
      },
      { text: 'GitHub', link: 'https://github.com/antonreshetov/vue-glide' }
    ],
    sidebar: [
      {
        title: 'Getting started',
        collapsable: false,
        children: [
          '/install/',
          '/quick-start/'
        ]
      },
      {
        title: 'API',
        collapsable: false,
        children: [
          '/props/',
          '/slots/',
          '/events/',
          '/v-model/'
        ]
      }
    ]
  }
}
