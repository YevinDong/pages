import { Router, createRouter, createWebHashHistory } from 'vue-router';
import Hooks from './hooks';
const routes = [
    {
        path: '/',
        name: 'page-a',
        alias: '/page-a',
        component: () => import('@/views/Home/index.vue'),
        meta: {
            title: 'Home',
            keepAlive: false,
        },
    },
];
const router: Router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition;
        else return { top: 0 };
    },
});

Hooks(router);

export default router;
