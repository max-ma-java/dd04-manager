/**
 * 全局路由导航守卫
 */
import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from './auth'
// import store from '@/store'
router.beforeEach((to, from, next) => {
  // const token = store.state.token
  NProgress.start()
  if (!getToken() && to.fullPath !== '/login') {
    next({path: '/login'})
  } else {
    next(true)
  }
})

router.afterEach(() => {
    NProgress.done()
})
