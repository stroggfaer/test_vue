import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import NotFoundPage from '@/pages/NotFoundPage';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '*',
            name: 'NotFoundPage',
            component: NotFoundPage,
        },
    ],
});
