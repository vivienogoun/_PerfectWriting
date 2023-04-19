import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as VueRouter from 'vue-router'
import HomeComponent from './page/home.vue'
import HomeTwoComponent from './page/home2.vue'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
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
    ]
})

const app = createApp(App)
app.use(router).mount('#app')
app.mount('app')