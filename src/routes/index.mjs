import { createRouter, createWebHistory } from "vue-router";
import LandingPageView from '../views/Landing.vue';
import TemplatePickerPageView from '../views/TemplatePicker.vue';
import FormPageView from '../views/Form.vue';
import BlackRosePageView from '../views/templates/BlackRose.vue';

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
        path: '/br/:id',
        component: BlackRosePageView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;