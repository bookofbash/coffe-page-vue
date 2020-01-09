import Vue from 'vue'
import App from './App.vue'
import Animate from 'animate.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component("font-awesome-icon", FontAwesomeIcon);

import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
Vue.use(Animate)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
