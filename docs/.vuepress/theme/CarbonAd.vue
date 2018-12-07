<script>
export default {
  render (h) {
    return h('div', { class: 'carbon' })
  },
  mounted () {
    this.load()
  },
  watch: {
    $route (to, from) {
      if (
        to.path !== from.path &&
        this.$el.querySelector('#carbonads')
      ) {
        this.$el.innerHTML = ''
        this.load()
      }
    }
  },
  methods: {
    load () {
      const s = document.createElement('script')
      s.id = '_carbonads_js'
      s.src = `//cdn.carbonads.com/carbon.js?serve=CK7DEK7I&placement=antonreshetovgithubio`
      this.$el.appendChild(s)
    }
  }
}
</script>

<style lang="stylus">
.carbon {
  min-height: 102px;
  padding: 1.5rem 1.5rem 0;
  margin-bottom: -0.5rem;
  font-size: 0.75rem;

  a {
    color: #444;
    font-weight: normal;
    display: inline !important;
  }

  .carbon-img {
    float: left;
    margin-right: 1rem;
    border: 1px solid $borderColor;

    img {
      display: block;
    }
  }

  .carbon-poweredby {
    color: #999;
    display: block !important;
    margin-top: 0.5em;
  }
}
</style>
