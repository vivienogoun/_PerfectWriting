<template>
    <div class="container">
        <div class="row">
            <div class="logo">
                <LogoComponent />
            </div>
            <div class="menu--logo">
                <img src="@/assets/PerfectWriting/smallicons/house.png" alt="">
                <p>Menu</p>
            </div>
            <div class="menu container">
                <div class="row">
                    <div style="margin-bottom:50px;" class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="fille--lit ">

                            <img class="mx-auto d-block" src="@/assets/PerfectWriting/Illustrations/image.svg" alt="">



                        </div>
                        <div class="text-center">
                            <BoutonthreeComponent class="btn--3f" />
                        </div>
                    </div>
                    <div  style="margin-bottom:50px;" class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="garcon--lit">
                            <img class="mx-auto d-block" src="@/assets/PerfectWriting/Illustrations/kpgl_4nm3_220829.png"
                                alt="">


                        </div>
                        <div class="text-center ">
                            <BoutonthreeComponent class="btn--3g" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import LogoComponent from "../components/Logo.vue";
import BoutonthreeComponent from "../components/Bouton3.vue";
export default {
    name: "MenuPage",
    components: {
        LogoComponent,
        BoutonthreeComponent,
    },
};

</script>
<style lang="scss">
.logo {
    margin-top: 10px;
}

.menu--logo {
    display: flex;
    margin-bottom: 20px;

    img {
        margin-top:20px;
        width: 50px;
        height: 50px;
    }

    p {
        font-size: 1.4rem;
        margin-left: 15px;
        margin-top:25px;
    }
}

.menu {
    .btn--3f, .btn--3g{
        margin-top: 20px;
    }

    .fille--lit {
        width: 90%;
        height: 90%;
        background: linear-gradient(to top, #ff97aa, #ffbac6);
        border-radius: 10px;
        border-right: 3px #ff1744 solid;
        margin: auto;
        img {
            width: 75%;
        }




    }

    .garcon--lit {
        width: 90%;
        height: 90%;
        background: linear-gradient(to top, #ff97aa, #ffbac6);
        border-radius: 10px;
        border-left: 3px #ff1744 solid;
        margin: auto;
        img {

            width: 40%;
            height: 90%;
        }
    }
}
</style>