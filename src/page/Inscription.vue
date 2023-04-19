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
                <p>Inscription</p>
                <div class="container">
                    <div class="row">
                        <form action="">
                            <div class="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div><label for="name">Nom</label></div>
                                
                                <input type="text" id="name">
                            </div>
                            <div class="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div><label for="prenom">Prenoms</label></div>
                                
                                <input type="text" id="prenom">
                            </div>
                            <div class="form-group">
                                <div><label for="mail">Mail</label></div>
                                
                                <input type="text" id="mail">
                            </div>
                            <div> <label class="checkbox-inline" for=""><input type="checkbox">
                            J'accepte de devenir un superhéro et de sauvegardé mes quetes!
                            </label>
                        </div>
                            <div>
                                <BoutontwoComponent />
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
        width: 65%;
        height: 65%;
    }

    p {
        margin-bottom: 30px;
    }
}

.inscription {
    background: linear-gradient(to right,#FF1744,#ff4368);
}

</style>