import Vue from 'vue'
import Router from 'vue-router'

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
      component: (resolve) => require(['@/components/admin/admin'], resolve),
      children: [{
        path: '',
        component: (resolve) => require(['@/components/admin/adminIndex'], resolve)
      }, {
        path: 'index',
        name: 'adminIndex',
        component: (resolve) => require(['@/components/admin/adminIndex'], resolve)
      }, {
        path: 'login',
        name: 'login',
        component: (resolve) => require(['@/components/admin/login'], resolve)
      }, {
        path: 'register',
        name: 'register',
        component: (resolve) => require(['@/components/admin/register'], resolve)
      }]
    }
  ]
})
