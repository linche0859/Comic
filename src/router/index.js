import Vue from 'vue'
import Router from 'vue-router'
// import Comic from '@/pages/Comic'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/comic',
    //   name: 'comic',
    //   component: Comic
    // },
    {
      path: '/comic',
      name: 'comic',
      // 會壓成webpack，適合大型專案
      component: () => import('@/pages/Comic')
    },
    {
      path: '/comic/:id',
      name: 'comicDetail',
      component: () => import('@/pages/comicDetail')
    },
    {
      path: '/comic/:id/chapter/:cid',
      name: 'comicChapter',
      component: () => import('@/pages/comicChapter')
    },
    {
      path: '*',
      redirect: '/comic'
    }
  ]
})
