import Vue from 'vue'
import Router from 'vue-router'
// import { resolve } from 'dns';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: (resolve) => require(['@/components/HelloWorld'], resolve)
    },
    {
      path: '/admin',
      name: 'Admin',
      component: (resolve) => require(['@/components/admin/admin'], resolve)
    }
  ]
})
