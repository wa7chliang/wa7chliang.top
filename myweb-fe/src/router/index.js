// import Vue from 'vue'
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
      }, {
        path: 'article/:id',
        name: 'article',
        component: (resolve) => require(['@/components/index/article'], resolve)
      }, {
        path: 'aboutme',
        name: 'aboutme',
        component: (resolve) => require(['@/components/index/aboutMe'], resolve)
      }, {
        path: 'allList',
        name: 'allList',
        component: (resolve) => require(['@/components/index/allList'], resolve)
      }, {
        path: 'friend',
        name: 'friend',
        component: (resolve) => require(['@/components/index/friend'], resolve)
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
      }, {
        path: 'addFriend',
        name: 'addFriend',
        component: (resolve) => require(['@/components/admin/addFriend'], resolve)
      }, {
        path: 'friendList',
        name: 'friendList',
        component: (resolve) => require(['@/components/admin/friendList'], resolve)
      }, {
        path: 'editFriend',
        name: 'editFriend',
        component: (resolve) => require(['@/components/admin/editFriend'], resolve)
      }, {
        path: 'videoArray',
        name: 'videoArray',
        component: (resolve) => require(['@/components/admin/videoArray'], resolve)
      }, {
        path: 'addVideoArray',
        name: 'addVideoArray',
        component: (resolve) => require(['@/components/admin/addVideoArray'], resolve)
      }, {
        path: 'editVideoArray',
        name: 'editVideoArray',
        component: (resolve) => require(['@/components/admin/editVideoArray'], resolve)
      }, {
        path: 'writeArticleByMackDown',
        name: 'writeArticleByMackDown',
        component: (resolve) => require(['@/components/admin/writeArticleByMackDown'], resolve)
      }]
    }, {
      path: '*',
      name: 'notFound',
      component: (resolve) => require(['@/components/common/NotFoundComponent'], resolve)
    }
  ]
})
