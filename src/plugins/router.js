import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'

import Zoomtopia from '~/pages/work.vue'
import WorkRegistration from '~/pages/WorkRegistration.vue'

/*const pages = import.meta.glob('~/pages/*.vue')
console.log(pages);

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\/pages(.*)\.vue$/)[1].toLowerCase()
  return {
    path: name === '/home' ? '/' : name,
    component: pages[path] // () => import('./pages/*.vue')
  }
})*/

const routes = [
    {path:"/", name: 'Home',component: Zoomtopia},
    {path:"/register", name: 'register', component: WorkRegistration},
    // {path:"/wilmar", name: 'wilmar',component: WilmarRegistration},
    // {path:"/zoomtopiasingapore", name: 'zoomtopia',component: Zoomtopia, meta:{layout:"LayoutNoHeader"}},
    // {path:"/zoomtopiasingapore/register", name: 'zoomtopia-register',component: ZoomtopiaRegistration, meta:{layout:"LayoutNoHeader"}},
    {path: '/*', redirect: '/' },
]

const router = createRouter({
    history: import.meta.env.SSR
      ? createMemoryHistory()
      : createWebHistory(),
    routes
})

export default router