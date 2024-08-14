import { createRouter, createWebHistory } from "vue-router";
import LandingPageView from '../views/Landing.vue';
import TemplatePickerPageView from '../views/TemplatePicker.vue';
import FormPageView from '../views/Form.vue';
import BeautifulInWhite from '../views/templates/BeautifulInWhite.vue';

const routes = [
    {
        path: '/',
        component: LandingPageView
    },
    {
        path: '/picker',
        component: TemplatePickerPageView
    },
    {
        path: '/form',
        component: FormPageView
    },
    {
        path: '/bw/:id',
        component: BeautifulInWhite
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;