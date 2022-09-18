import { createRouter, createWebHistory } from 'vue-router'
import Home from '~/pages/Home.vue'
import Phone from '~/pages/Phone.vue'
const routes = [
    {path:"/", name: 'Home',component: Home},
    {path:"/zoom-phone", name: 'Phone',component: Phone},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router