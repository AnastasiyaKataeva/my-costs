import Vue from 'vue'
import App from './App.vue'

import store from './store'

Vue.config.productionTip = false
import router from './router'

new Vue({
  components: {
    router,
    store,
  },
  render: function (h) { return h(App) },
}).$mount('#app')
