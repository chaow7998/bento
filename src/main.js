// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Button } from 'mint-ui'
import 'mint-ui/lib/style.css'
import './mock/mockServer'
import App from './App'
import router from './router/index'
import store from './store'
import VueLazyload from 'vue-lazyload'
import './filters'

Vue.use(VueLazyload, {
  error: 'dist/error.png',
  loading: '../static/imgs/loading.gif',
})
Vue.config.productionTip = false
Vue.component(Button.name, Button)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
  // components: { App },
  // template: '<App/>'
})
