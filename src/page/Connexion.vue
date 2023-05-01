<template>
    <div class="container-fluid">
        <div class="row">
            <div class="connect--img col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div class="logo--menu text-center">
                    <LogoComponent />
                </div>
                <p class="text-center">Connecte toi pour sauvegarder tes progrès!</p>
                <img class="img-responsive mx-auto d-block" src="@/assets/PerfectWriting/Illustrations/Wavy_Tech-16_Single-09.jpg"
                    alt="">
            </div>
            <div class="connexion col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <p class="text-center inscript-text">Connexion</p>
                <div class="container">
                    <div class="row">
                        <form action="">
                            <div style="margin-bottom:70px;" class="row">
                                <div class="form-group mx-auto col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div><label for="mail">Mail</label></div>

                                    <input class="form-input" type="text" id="mail">
                                </div>
                                <div class="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div><label for="password">Mot de passe</label></div>

                                    <input class="form-input" type="text" id="password">
                                </div>

                            </div>
                            <div>
                                <router-link :to="{ name: 'MenuPage' }">
                                    <BoutontwoComponent class="text-center btn-ins" />
                                </router-link>

                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
import LogoComponent from "../components/Logo.vue"
import BoutontwoComponent from "../components/Bouton2.vue"
export default {
    name: "ConnexionPage",
    components: {
        LogoComponent,
        BoutontwoComponent
    }


}
</script>

<style lang="scss">
.connect--img {

    .logo--menu {
        margin-top: 20px;
        margin-bottom: 70px;
    }

    img {
        width: 70%;
        height: 70%;
    }

    p {
        margin-bottom: 20px;
    }
}

.connexion {
    background: linear-gradient(to top,#8557e2,#dbaaf0) ;
    padding: 10px;
    .inscript-text {
        font-size: 2rem;
        color: white;
        font-weight: bold;
        margin-top: 60px;
        margin-bottom: 60px;

    }

    label {
        color: white;
        font-weight: bold;
        margin-bottom: 20px;
        font-size: 1.2rem;
        margin-left: 10px;
        margin-top: 10px;
    }
    
    .form-group input {
        outline: none;
        width: 70%;
        font-size: 1.2rem;
    }

    .form-input {

        height: 55px;
        border-radius: 50px;
        padding: 20px;
        background: #e9f0ff;
        border: 2px solid #f78f83;
        font-weight: normal;
        font-size: 1rem;
    }

    .btn-ins {
        margin-top: 50px;
    }
}</style>