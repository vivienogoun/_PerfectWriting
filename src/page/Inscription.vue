<template>
    <div class="container-fluid">
        <div class="row">
            <div class="inscrip--img col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div class="logo--menu text-center">
                    <LogoComponent />
                </div>
                <router-link :to="{ name: 'ChoixConnexion' }">
                    <BoutonRetourComponent />
                </router-link>
                <p class="text-center">Inscris pour sauvegarder tes progrès!</p>
                <img class="img-responsive mx-auto d-block" src="@/assets/PerfectWriting/Illustrations/sady_ac7j_210901.png"
                    alt="">
            </div>
            <div class="inscription col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <p class="text-center inscript-text">Inscription</p>
                <div class="container">
                    <div class="row">
                        <form @submit.prevent="signup" >
                            <div style="margin-bottom:70px;" class="row">
                                <div class="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div><label for="name">Nom</label></div>

                                    <input class="form-input" type="text" id="name" v-model="lastname">
                                </div>
                                <div class="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div><label for="prenom">Prenoms</label></div>

                                    <input class="form-input" type="text" id="prenom" v-model="firstname">
                                </div>
                            </div>

                            <div style="margin-bottom:40px;" class="row">
                                <div class="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div><label for="mail">Mail</label></div>

                                    <input class="form-input" type="text" id="mail" v-model="email">
                                </div>
                                <div class="form-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div><label for="password">Mot de passe</label></div>

                                    <input class="form-input" type="text" id="password" v-model="password">
                                </div>
                            </div>
                            <div> <label style="font-size: 1.1rem; font-weight: normal;" class="checkbox-inline"
                                    for=""><input type="checkbox">
                                    J'accepte de devenir un superhéro et de sauvegardé mes quetes!
                                </label>
                            </div>
                            <input type="submit" class="con text-center" value="S'inscrire">
                        </form>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
import LogoComponent from "../components/Logo.vue"
import BoutonRetourComponent from "../components/BoutonRetour.vue"
import { accountService } from '@/_services'
export default {
    name: "InscriptionPage",
    components: {
        LogoComponent,
        BoutonRetourComponent
    },
    data() {
        return {
            lastname: '',
            firstname: '',
            email: '',
            password: ''
        }
    },
    methods: {
        base() {
            accountService.base()
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
        },

        signup() {
            let newUser = {
                lastname: this.lastname,
                firstname: this.firstname,
                email: this.email,
                password: this.password
            }

            accountService.register(newUser)
                .then(res => {
                    console.log(res.data)
                    accountService.saveToken(res.data)
                    this.lastname = ''
                    this.firstname = ''
                    this.email = ''
                    this.password = ''
                    this.$router.push('/connexion')
                })
                .catch( err => {
                    console.log(err)
                })
        }
    },
}
</script>

<style lang="scss">
.inscrip--img {

    .logo--menu {
        margin-top: 20px;
        margin-bottom: 70px;
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
    background: linear-gradient(to top, #FF1744, #ff4368);
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
        width: 90%;
        font-size: 1.2rem;
    }

    .form-input {

        height: 55px;
        border-radius: 50px;
        padding: 20px;
        background: #e9f0ff;
        border: 3px solid white;
        font-weight: normal;
        font-size: 1rem;
    }
    .con{
        margin-top: 10px;
        width: 230px;
        height: 55px;
        border-radius: 50px;
        background-color:#ff4368;
        color: white;
        margin-top: 30px;
        font-size: 1rem;
        font-weight: bold;
    }
    .con:hover{
        background-color:white ;
        color: #FF1744;
    }
}
</style>