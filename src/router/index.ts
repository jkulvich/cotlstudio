import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'

import PadPage from '@/views/PadPage.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/pad',
    },
    {
        path: '/pad',
        name: 'Pad',
        component: PadPage,
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
