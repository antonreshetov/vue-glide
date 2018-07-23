import Vue from 'vue'
import Workbench from './Workbench.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Workbench)
}).$mount('#app')
