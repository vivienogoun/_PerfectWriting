// initialization
import { createApp } from "vue";
import App from "@/App.vue";
import { createWebHistory, createRouter } from "vue-router";

// import some style sheet
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import components and views
import HomePage from './page/home.vue'
import Home2Page from './page/home2.vue'
import Home3Page from './page/home3.vue'
import InscriptionPage from './page/Inscription.vue'
import MenuPage from './page/Menu.vue'
import ReadOptionsPage from './page/ReadOptions.vue'
import WriteOptionsPage from './page/WriteOptions.vue'
import LireTextePage from './page/LireTexte.vue'
import MenuChiffrePage from './page/MenuChiffre.vue'
import MenuLettrePage from './page/MenuLettre.vue'
import OptionsChiffrePage from './page/OptionsChiffre.vue'
import EcrireChiffrePage from './page/EcrireChiffre.vue'
import ConnexionPage from './page/Connexion.vue'

// import './assets/tailwind.css'

// declare app routes here
const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/page2',
        name: 'Home2Page',
        component: Home2Page
    },
    {
        path: '/page3',
        name: 'Home3Page',
        component: Home3Page
    },
    {
        path: '/inscript',
        name: 'InscriptionPage',
        component: InscriptionPage
    },
    {
        path: '/menu',
        name: 'MenuPage',
        component: MenuPage
    },
    {
        path: '/lire_options',
        name: 'ReadOptionsPage',
        component: ReadOptionsPage
    },
    {
        path: '/write_options',
        name: 'WriteOptionsPage',
        component: WriteOptionsPage
    },
    {
        path: '/lire_texte',
        name: 'LireTextePage',
        component: LireTextePage
    },
    {
        path: '/menu_chiffre',
        name: 'MenuChiffrePage',
        component: MenuChiffrePage
    },
    {
        path: '/menu_lettre',
        name: 'MenuLettrePage',
        component: MenuLettrePage
    },
    {
    path: '/options_chiffre',
    name: 'OptionsChiffrePage',
    component: OptionsChiffrePage
},
{
    path:'/ecrire_chiffre',
    name:"EcrireChiffrePage",
    component: EcrireChiffrePage
},
{
    path:'/connexion',
    name:"ConnexionPage",
    component: ConnexionPage
},
];

// create router object
const router = createRouter({
    history: createWebHistory(),
    // linkActiveClass: "menu-active-link",
    // linkExactActiveClass: "menu-active-link-extras",
    routes,
    linkActiveClass: "desactive",
     linkExactActiveClass: "desactive" 

});

// then mount to render in index.html file
const app = createApp(App)
app.use(router).mount('#app')
