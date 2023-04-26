<template>
    <div class="logo--write">
        <LogoComponent />
    </div>
    <div class="btn-retour">
        <router-link :to="{ name: 'MenuPage' }">
            <BoutonRetourComponent />
        </router-link>

    </div>
    <div class="container">
        <div class="row">

            <div class="write--options container">
                <div class="row">
                    <div style="margin-bottom:50px;" class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="caractere text-center ">
                            <p>J'apprends les caracteres pour ecrire</p>
                            <router-link :to="{ name: 'MenuChiffrePage' }" >
                            <BoutonComponent />
                        </router-link >
                            <img class="mx-auto d-block img-responsive"
                                src="@/assets/PerfectWriting/Illustrations/2828174.jpg" alt="">


                        </div>
                    </div>
                    <div style="margin-bottom:50px;" class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="texte text-center">
                            <p>J'écris des textes pour m'améliorer</p>
                            <BoutonComponent />
                            <img class="mx-auto d-block img-responsive"
                                src="@/assets/PerfectWriting/Illustrations/OJB2CI0.jpg" alt="">


                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import LogoComponent from "../components/Logo.vue";
import BoutonComponent from "../components/Bouton.vue";
import BoutonRetourComponent from "@/components/BoutonRetour.vue";
export default {
    name: "WriteOptionsPage",
    components: {
        LogoComponent,
        BoutonComponent,
        BoutonRetourComponent
    },
};

</script>
<style lang="scss">
.logo--write {
    margin-top: 20px;
}

.btn-retour {
    margin-top: 20px;
    margin-left: 70px;
    margin-bottom: 30px;
}

.write--options {
    p {
        font-weight: bold;
        margin-top: 10px;
        font-size: 1.1rem;
    }

    .caractere {
        padding: 20px;
        width: 90%;
        border-radius: 10px;
        border-style: solid;

        border-width: 4px;

        border-image: linear-gradient(45deg, #422AF8, #ff1744) 1;
        margin: auto;

        img {
            width: 90%;
            height: 300px;

        }
    }

    .texte {
        padding: 20px;
        width: 90%;
        border-radius: 10px;
        border-style: solid;

        border-width: 4px;

        border-image: linear-gradient(45deg, #422AF8, #ff1744) 1;
        margin: auto;

        img {

            width: 80%;
            height: 300px;
        }
    }
}
</style>