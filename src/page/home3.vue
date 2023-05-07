<template>
    <div class="page3 container">
        <div class="row">
            <div>
                <CercletwoComponent />
            </div>
            <div class="logo">
                <LogoComponent />
            </div>
            <div class="home3 container ">
                <div class="row">
                    <div class="home3--img col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <img class="img-responsive" src="@/assets/PerfectWriting/Illustrations/8qzb_cv4l_210709.png"
                            alt="" />
                        <div class="rectangle"></div>

                    </div>
                    <div class="go col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="go--image text-center">
                            <img class="img-responsive mx-auto d-block" src="@/assets/PerfectWriting/smallicons/superhero1.png" alt="" />
                            <p>Lis encore plus d'aventures</p>
                            <router-link :to="{name: 'ChoixConnexion'}">
                                <BoutontwoComponent class="bouton" />
                            </router-link>
                           
                            <p class="ecrire">Je veux lire comme les grands Moi!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import LogoComponent from "../components/Logo.vue";
import BoutontwoComponent from "../components/Bouton2.vue";
import CercletwoComponent from "../components/Cercle2.vue";
export default {
    name: "Home3Page",
    components: {
        LogoComponent,
        BoutontwoComponent,
        CercletwoComponent,
    },
};
</script>
  
<style lang='scss'>
.page3 {

    .logo {
        margin-top: 10px;
    }

    .home3 {

        .home3--img {

            img {
                width: 95%;
                height: 95%;
            }

            /*.rectangle {
                position: fixed;
                top: 480px;
                left: 150px;
                width: 300px;
                height: 130px;
                transform: skew(35deg);
                background-color:#f1c439;
                z-index: -1;
            }*/
        }

        .go {

            .go--image {

                img {
                    width: 12%;
                    height: 12%;
                    margin-bottom: 25px;
                }

                p {
                    font-weight: bold;
                    font-size: 1.4rem;
                    margin-bottom: 25px;
                }

                .bouton {
                    margin-bottom: 25px;
                }

                .ecrire {
                    font-weight: normal;
                    font-size: 1rem;
                }
            }
        }
    }
}
</style>