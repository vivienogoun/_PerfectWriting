<template>
    <div>
        <div class="ecrire--chiffre">
            <div class=" logo text-center">
                <LogoComponent />
            </div>
            <div class="btn--return">
                <router-link :to="{ name: 'OptionsChiffrePage' }">
                    <BoutonRetourComponent />
                </router-link>
            </div>
            <div class="container">
                <div class="row">
                   
                    <div class="btom col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <ChiffreComponent style="margin: auto;" />
                    </div>

                    <div class="btom col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <ReglestravailPage style="margin: auto;" />
                    </div>
                    <DrawComponent class="btom" />
                    <CahierComponent  class="btom" />
                    
                    <CahierComponent class="btom"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import LogoComponent from "../components/Logo.vue";
import BoutonRetourComponent from "../components/BoutonRetour.vue";
import ReglestravailPage from "@/components/Reglestravail.vue";
//import OutilsComponent from "@/components/Outils.vue"
import ChiffreComponent from "@/components/ChiffreComponent.vue"
import DrawComponent from "@/components/Draw.vue"
import CahierComponent from "@/components/LignesCahier.vue";
export default {
    name: "EcrireChiffrePage",
    components: {
        LogoComponent,
        BoutonRetourComponent,
        ReglestravailPage,
        //OutilsComponent,
        ChiffreComponent,
        DrawComponent,
        CahierComponent,
    }
}
</script>
<style lang="scss">
.ecrire--chiffre {
    .logo {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .btn--return {
        margin-left: 3%;
        margin-bottom: 3%;
    }

    .btom {
        margin-bottom: 40px;
    }
  
}</style>