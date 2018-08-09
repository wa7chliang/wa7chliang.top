// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import App from './App'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store/'

// Vue.use(ElementUI)
Vue.cancel = []

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  while (Vue.cancel.length > 0) {
    Vue.cancel.pop()('请求中断')
  }
  next()
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
