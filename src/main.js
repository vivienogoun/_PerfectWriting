// initialization
import { createApp } from "vue";
import App from "@/App.vue";
import { createWebHistory, createRouter } from "vue-router";

// import some style sheet
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import components and views
import HomeComponent from './page/home.vue'
import HomeTwoComponent from './page/home2.vue'

// declare app routes here
const routes = [
    {
        path: '/',
        name: 'HomeComponent',
        component: HomeComponent
    },
    {
        path: '/page2',
        name: 'HomeTwoComponent',
        component: HomeTwoComponent
    }
];

// create router object
const router = createRouter({
    history: createWebHistory(),
    // linkActiveClass: "menu-active-link",
    // linkExactActiveClass: "menu-active-link-extras",
    routes,
});

// then mount to render in index.html file
const app = createApp(App)
app.use(router).mount('#app')
