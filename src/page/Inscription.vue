<template>
    <div class="container-fluid">
        <div class="row">
            <div class="connect--img col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div class="logo--menu text-center">
                    <LogoComponent />
                </div>
                <p class="text-center">Connecte toi pour sauvegarder tes progrès!</p>
                <img class="img-responsive mx-auto d-block" src="@/assets/PerfectWriting/Illustrations/sady_ac7j_210901.png"
                    alt="">
            </div>
            <div class="inscription col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <p class="text-center inscript-text">Inscription</p>
                <div class="container">
                    <div class="row">
                        <form action="">
                            <div style="margin-bottom:40px;" class="row">
                                <div class="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div><label for="name">Nom</label></div>

                                    <input class="form-input" type="text" id="name">
                                </div>
                                <div class="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div><label for="prenom">Prenoms</label></div>

                                    <input class="form-input" type="text" id="prenom">
                                </div>
                            </div>
                            <div class="mail">
                                <div><label for="mail">Mail</label></div>

                                <input class="form-input" type="text" id="mail">
                            </div>
                            <div> <label style="font-size: 1.1rem; font-weight: normal;" class="checkbox-inline" for=""><input type="checkbox">
                                    J'accepte de devenir un superhéro et de sauvegardé mes quetes!
                                </label>
                            </div>
                            <div>
                                <router-link :to="{name: 'MenuPage'}"><BoutontwoComponent class="text-center btn-ins" /></router-link>
                                
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
    name: "InscriptionPage",
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
        margin-bottom: 20px;
    }

    img {
        width: 62%;
        height: 62%;
    }

    p {
        margin-bottom: 30px;
    }
}

.inscription {
    background: linear-gradient(to right, #FF1744, #ff4368);

    .inscript-text {
        font-size: 2rem;
        color: white;
        font-weight: bold;
        margin-top: 30px;
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
        width: 80%;
        font-size: 1.2rem;
    }
    .form-input{

        height: 60px;
        border-radius: 50px;
        padding: 20px;
        background:#d5d2d2 ;
        border:2px solid white;
        font-weight: bold;
        font-size: 1.2rem;
    }
    .mail input
    {
        outline: none;
        width: 100%;
        margin-bottom: 30px;
    }
    .btn-ins{
        margin-top: 30px;

    }
}
</style>