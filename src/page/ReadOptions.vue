<template>
    <div class="read--options">
        <div class=" logo--read text-center">
            <LogoComponent />
        </div>
        <div class="btn--read">
            <router-link :to="{ name: 'MenuPage' }">
                <BoutonRetourComponent />
            </router-link>

        </div>
        <div class="container">
            <div class="row">
                <div v-for="(read, i) in 8" :key="i" class="form--read col-xs-6 col-sm-4 col-md-4 col-lg-3">
                    <router-link :to="{ name: 'LireTextePage' }" style="text-decoration: none; color: inherit;" >

                        <ReadComponent style="margin: auto;" />
                    </router-link>
                </div>
                <div class="text-center text-quote">
                    <img class="quote" style="margin-left:15px;" src="@/assets/PerfectWriting/smallicons/quotes-removebg-preview.png" alt="">
                    Et si je lisais une histoire? Peut-etre qu'un héro porte mon nom!
                    <img class="quote" style="rotate: 180deg; margin-right:15px;" src="@/assets/PerfectWriting/smallicons/quotes-removebg-preview.png" alt="">
                    <p>D.Linson</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import LogoComponent from "../components/Logo.vue";
import BoutonRetourComponent from "../components/BoutonRetour.vue";
import ReadComponent from "@/components/ReadComponent.vue";
export default {
    name: 'ReadOptionsPage',
    components: {
        LogoComponent,
        BoutonRetourComponent,
        ReadComponent
    }
}
</script>
<style lang="scss">
.read--options {
    .logo--read {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .btn--read {
        margin-left: 3%;
        margin-bottom: 4%;
    }

    .form--read {
        margin-bottom: 40px;
    }

    .text-quote {
        margin-top: 10px;
        .quote {
            width: 20px;
            height: 20px;
            margin-top: -40px;
        }

        p {
            font-weight: bold;
            margin-bottom: 40px;
            margin-top: 30px;
        }
    }


}</style>