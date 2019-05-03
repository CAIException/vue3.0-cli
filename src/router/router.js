
import Home from '../views/Home.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '蔡关荣博客'
    }
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "about" */ '@/views/404-page.vue')
  }
]

export default routes
