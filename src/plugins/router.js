import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import Ace from '~/pages/Ace.vue'
import AceRegistration from '~/pages/AceRegistration.vue'
import Zoomtopia from '~/pages/Zoomtopia.vue'
import ZoomtopiaRegistration from '~/pages/ZoomtopiaRegistration.vue'

const pages = import.meta.glob('./pages/*.vue')

/*const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase()
  return {
    path: name === '/home' ? '/' : name,
    component: pages[path] // () => import('./pages/*.vue')
  }
})*/
const routes = [
    {path:"/", name: 'Home',component: Ace},
    {path:"/ace", name: 'Ace',component: Ace},
    {path:"/ace/register", name: 'register',component: AceRegistration},
    {path:"/zoomtopiasingapore", name: 'zoomtopia',component: Zoomtopia, meta:{layout:"LayoutNoHeader"}},
    {path:"/zoomtopiasingapore/register", name: 'zoomtopia-register',component: ZoomtopiaRegistration, meta:{layout:"LayoutNoHeader"}},
    {path: '/*', redirect: '/' },
]

const router = createRouter({
    history: import.meta.env.SSR
      ? createMemoryHistory()
      : createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      // always scroll to top
      return { top: 0 , behavior: 'smooth',}
    },
})

export default router