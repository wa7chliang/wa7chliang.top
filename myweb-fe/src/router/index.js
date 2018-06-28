import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: (resolve) => require(['@/components/index/index'], resolve),
      children: [{
        path: '',
        component: (resolve) => require(['@/components/index/wa7chIndex'], resolve)
      }]
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
      }, {
        path: 'writeArticle',
        name: 'writeArticle',
        component: (resolve) => require(['@/components/admin/writeArticle'], resolve)
      }, {
        path: 'postsList',
        name: 'postsList',
        component: (resolve) => require(['@/components/admin/postsList'], resolve)
      }, {
        path: 'editArticle',
        name: 'editArticle',
        component: (resolve) => require(['@/components/admin/editArticle'], resolve)
      }]
    }
  ]
})
