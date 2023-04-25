<template>
    <div class="congrats">
        <div class="logo--congrats text-center">
            <LogoComponent />
        </div>
        <div class="btn--return">
            <BoutonRetourComponent />
        </div>
        <div class="container">
            <div class="row">
                <div class=" congrats--img col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <img src="@/assets/PerfectWriting/Illustrations/5730334.jpg" alt="">
                </div>
                <div class=" congrats--point col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <p class=" title--congrats text-center"> Congrats !</p>
                    <img class="mx-auto d-block" src="@/assets/PerfectWriting/smallicons/medal.png" alt="">
                    <div style="margin:auto;">
                        <div class="info--congrats">
                            <p>Vitesse:</p>
                            <p style="margin-left: 30px;"> 10 mots/min</p>
                        </div>
                        <div class="info--congrats">
                            <p>Precision:</p>
                            <p style="margin-left: 30px;">10%</p>
                        </div>
                        <div class="info--congrats">
                            <p>Score total:</p>
                            <p style="margin-left: 30px;"> 20 points</p>
                        </div>
                        <div  class="info--congrats">
                            <p>Jour:</p>
                            <p style="margin-left: 30px;">
                                01/04/23
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import LogoComponent from "../components/Logo.vue";
import BoutonRetourComponent from "../components/BoutonRetour.vue";

export default {
    name: 'MenuChiffrePage',
    components: {
        LogoComponent,
        BoutonRetourComponent,

    }
}
</script>
<style lang="scss">
.congrats {
    .logo--congrats {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .btn--return {
        margin-left: 3%;
        margin-bottom: 3%;
    }

    .congrats--img {
        img {
            width: 100%;
        }

    }

    .congrats--point {
        width: 30%;
        border: 2px solid black;
        margin: auto;
        margin-bottom: 40px;
        margin-top: -20px;
        .title--congrats{
            margin-top: 20px;
            font-size: 2rem;
        }
        p{
            color: #ad65c8;
        }
        img {
            width: 35%;
            margin-top: 30px;
            margin-bottom: 40px;
        }

        .info--congrats {
            display: flex;
            margin-left: 30px;
        }
    }
}</style>