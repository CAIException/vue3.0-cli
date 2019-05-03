import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './router'
import { setTitle, setToken, getToken } from '@/lib/util'
Vue.use(Router)

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  // 设置网页标题
  to.meta && setTitle(to.meta.title)
  setToken('123')
  getToken()
  next()
})
router.afterEach((to, from) => {
  // logining = false
})

export default router
