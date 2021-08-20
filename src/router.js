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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
