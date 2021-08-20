import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './components/Dashboard.vue';

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./pages/Login.vue'),
    },
    {
        path: '/logout',
        name: 'logout',
        component: () => import('./pages/Logout.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
