import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { createRouter, createWebHashHistory} from 'vue-router';
import HomeComponent from './page/home.vue'
import HometwoComponent from './page/home2.vue'
const routes = [
    { path: '/',
    name:'HomeComponent',
     component: HomeComponent },
    { path: '/page2', 
    name:'HometwoComponent',
    component: HometwoComponent  },
]

const router = createRouter ({
    history: createWebHashHistory(),
    routes
})

const VueApp = createApp(App)

VueApp.use(router)
VueApp.mount('#app')
