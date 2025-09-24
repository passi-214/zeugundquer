import { createRouter, createWebHistory } from 'vue-router'
import Zeugundquer from '../views/Zeugundquer.vue'

const routes = [
    { path: '/', redirect: '/zeugundquer' },
    { path: '/zeugundquer', component: Zeugundquer }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
