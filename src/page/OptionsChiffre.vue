<template>
    <div class="options--chiffre">
        <div class=" logo text-center">
            <LogoComponent />
        </div>
        <div class="btn--return">
            <router-link :to="{ name: 'MenuChiffrePage' }" >
                <BoutonRetourComponent />
            </router-link>
        </div>
        <div class="container">
            <router-link :to="{ name: 'EcrireChiffrePage' }" style="text-decoration: none; color: inherit;">
                <div class="chiffre">

                    <ChiffrePage v-for="chiffre in firstfiveChiffre " :chiffre="chiffre" :key="chiffre"
                        class="elm-chiffre" />

                </div>
            </router-link>
            <router-link :to="{ name: 'EcrireChiffrePage' }" style="text-decoration: none; color: inherit;">
                <div class="chiffre">

                    <ChiffrePage v-for="chiffre in remainingChiffre " :chiffre="chiffre" :key="chiffre"
                        class="elm-chiffre" />

                </div>
            </router-link>
            <div class="text-center text-quote">
                <img class="quote" style="margin-left:15px;"
                    src="@/assets/PerfectWriting/smallicons/quotes-removebg-preview.png" alt="">
                Je veux savoir lire et compter, là , je pourrai compter le nombre de pas qu'il me reste, pour monter
                voir la lune!
                <img class="quote" style="rotate: 180deg; margin-right:15px;"
                    src="@/assets/PerfectWriting/smallicons/quotes-removebg-preview.png" alt="">
                <img class="superhero" style="margin-left:10px;" src="@/assets/PerfectWriting/smallicons/superhero.png"
                    alt="">

            </div>
        </div>
    </div>
</template>

<script>
import LogoComponent from "../components/Logo.vue";
import BoutonRetourComponent from "../components/BoutonRetour.vue";
import ChiffrePage from "../components/ChiffrePage.vue";

export default {
    name: "OptionsChiffrePage",
    components: {
        LogoComponent,
        BoutonRetourComponent,
        ChiffrePage,
    },
    data() {
        return {
            chiffres: '0123456789'.split(''),
        };
    },
    computed: {
        firstfiveChiffre() {
            return this.chiffres.slice(0, 5);
        },
        remainingChiffre() {
            return this.chiffres.slice(5);
        },
    },
};
</script>
<style lang="scss">
.options--chiffre {

    .logo {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .btn--return {
        margin-left: 3%;
        margin-bottom: 3%;
    }

    .chiffre {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        .elm-chiffre {
            margin-bottom: 20px;
            border-style: solid;

            border-width: 2px;

            border-image:  linear-gradient(45deg,#8557e2,#da82b6) 1;
        }
    }

    .chiffre:first-child {
        margin-bottom: 40px;
    }

    .text-quote {
        margin-top: 20px;
        margin-bottom: 30px;

        .quote {
            width: 20px;
            height: 20px;
            margin-top: -40px;
        }

        .superhero {
            width: 70px;
            height: 70px;
        }
    }
}
</style>