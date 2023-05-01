<template>
 <div class="lire--texte">
    <div class=" logo text-center">
            <LogoComponent />
        </div>
        <div class="btn--return">
            <router-link :to="{name:'ReadOptionsPage'}">
                <BoutonRetourComponent />
            </router-link>
           
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"><LireOptions style="margin:auto;"/></div>
                <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10"><TexteLecture style="margin:auto;" /></div>
            </div>
        </div>
 </div>
</template>

<script>
import LogoComponent from "../components/Logo.vue";
import BoutonRetourComponent from "../components/BoutonRetour.vue";
import LireOptions from "@/components/LireOptions.vue";
import TexteLecture from "@/components/TexteLecture.vue";
//import CounterComponent from "../components/Counter.vue"
export default{
    name: "LireTextePage",
    components: {
        LogoComponent,
        BoutonRetourComponent,
        LireOptions,
        TexteLecture,
        //CounterComponent,

    }
}
</script>

<style lang="scss">
 .logo {
            margin-top: 20px;
            margin-bottom: 20px;
        }

        .btn--return {
            margin-left: 3%;
            margin-bottom: 3%;
        }

</style>