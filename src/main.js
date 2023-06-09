// initialization
import { createApp } from "vue";
import App from "@/App.vue";
import { createWebHistory, createRouter } from "vue-router";
import { authGuard } from '@/_helpers/auth-guard'
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
import CanvasParent from './components/CanvasParent.vue'
import DrawComponent from './components/Draw.vue'
import NotFound from './page/Notfound.vue'
import ChoixConnexion from './page/Inscri_login.vue'
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
        component: MenuPage,

        children: [


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
                path: '/ecrire_chiffre',
                name: "EcrireChiffrePage",
                component: EcrireChiffrePage
            },
            {
                path: '/canvas',
                name: "CanvasParent",
                component: CanvasParent
            },
            {
                path: '/draw',
                name: "DrawComponent",
                component: DrawComponent
            },
        ]
    },
    {
        path: '/choix_connexion',
        name: "ChoixConnexion",
        component: ChoixConnexion,
    },
    {
        path: '/connexion',
        name: "ConnexionPage",
        component: ConnexionPage,
    },
    {
        path: '/:pathMatch(.*)*', component: NotFound
    }

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
// Vérouillage de la partie menu(token)
router.beforeEach((to, from, next) => {
    if (to.matched[0].name == 'MenuPage') {
        authGuard()
    }
    next()
})

export default router
// then mount to render in index.html file
const app = createApp(App)
app.use(router).mount('#app')
