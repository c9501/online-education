import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login/index.vue')
    },
    {
      path: '/',
      name: 'layout',
      component: () => import('../views/Layout/index.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          name:'home',
          component: () => import('@/views/Home/index.vue'),
          meta: { title: '首页' }
        },
        {
          path: '/category',
          name:'category',
          component: () => import('@/views/Category/index.vue'),
          meta: { title: '分类' }
        },
        {
          path: '/article',
          name:'article',
          component: () => import('@/views/Article/index.vue'),
          meta: { title: '阅读' }
        },
        {
          path: '/question',
          name:'question',
          component: () => import('@/views/Question/index.vue'),
          meta: { title: '问答' }
        },
        {
          path: '/my',
          name:'my',
          component: () => import('@/views/My/index.vue'),
          meta: { title: '我的' }
        }
      ]
    },
    {
      path: '/search',
      name:'search',
      component: () => import('@/views/Search/index.vue'),
      meta: { title: '搜索' }
    },
    {
      path: '/course',
      name:'course',
      component: () => import('@/views/Course/index.vue'),
      meta: { title: '购买' }
    }
  ]
})
router.afterEach((to) => {
  // 修改标题
  document.title = to.meta.title as string || ''

})
export default router
