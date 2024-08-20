import { createRouter, createWebHistory } from "vue-router";
import LandingPageView from '../views/Landing.vue';
import FormPageView from '../views/Form.vue';
import BeautifulInWhite from '../views/templates/BeautifulInWhite.vue';
import BlackRose from "../views/templates/BlackRose.vue";
import LoginPageView from "../views/Login.vue";
import RegisterPageView from "../views/Register.vue";

const routes = [
    {
        path: '/',
        component: LandingPageView
    },
    {
        path: '/login',
        component: LoginPageView
    },
    {
        path: '/register',
        component: RegisterPageView
    },
    {
        path: '/form',
        component: FormPageView
    },
    {
        path: '/bw/:id',
        component: BeautifulInWhite
    },
    {
        path: '/br/:id',
        component: BlackRose
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;