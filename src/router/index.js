import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/index.vue';
import Choose from '../pages/choose/index.vue';
import Team from '../pages/team/index.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/choose',
            name: 'Choose',
            component: Choose
        },
        {
            path: '/team',
            name: 'Team',
            component: Team
        }
    ]
});

export default router;