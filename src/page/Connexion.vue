<template>
    <div class="container-fluid">
        <div class="row">
            <div class="connect--img col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div class="logo--menu text-center">
                    <LogoComponent />
                </div>
                <router-link :to="{ name: 'ChoixConnexion' }">
                    <BoutonRetourComponent style="margin-bottom: 10px;" />
                </router-link>
                
                <p class="text-center">Connecte toi pour sauvegarder tes progrès!</p>
                <img class="img-responsive mx-auto d-block"
                    src="@/assets/PerfectWriting/Illustrations/Wavy_Tech-16_Single-09.jpg" alt="">
            </div>
            <div class="connexion col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <p class="text-center inscript-text">Connexion</p>
                <div class="container">
                    <div class="row">
                        <form @submit.prevent="login">
                            <div style="margin-bottom:70px;" class="row">
                                <div class="form-group mx-auto col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div><label for="mail">Mail</label></div>

                                    <input class="form-input" type="text" id="mail" v-model="user.email">
                                </div>
                                <div class="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div><label for="password">Mot de passe</label></div>

                                    <input class="form-input" type="text" id="password" v-model="user.password">
                                </div>
                            </div>
                            <input type="submit" class="ins text-center" value="Se connecter">
                        </form>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
import LogoComponent from "../components/Logo.vue"
import BoutonRetourComponent from "@/components/BoutonRetour.vue"
import { accountService } from '@/_services'
export default {
    name: "ConnexionPage",
    data() {
        return {
            user: {
                email: '',
                password: ''
                // error: '',
                // success: ''
            }
        }
    },
    methods: {
        login() {
            accountService.login(this.user)
            .then(res => {
                console.log(res.data)
                accountService.saveToken(res.data.token)
                this.email = ''
                this.password = ''
                this.$router.push('/menu')
            })
            .catch( err => {
                console.log(err)
            })
        }
    },
    components: {
        LogoComponent,
        BoutonRetourComponent
    }
}
</script>

<style lang="scss">
.connect--img {

    .logo--menu {
        margin-top: 20px;
        margin-bottom: 10px;
    }

    img {
        width: 68%;
        height: 68%;
    }

    p {
        margin-bottom: 20px;
    }
}

.connexion {
    background: linear-gradient(to top, #8557e2, #dbaaf0);
    padding: 10px;

    .inscript-text {
        font-size: 2rem;
        color: white;
        font-weight: bold;
        margin-top: 60px;
        margin-bottom: 30px;
    }

    label {
        opacity: 0.8;
        color: white;
        font-weight: bold;
        margin-bottom: 20px;
        font-size: 1.2rem;
        margin-left: 10px;
        margin-top: 30px;
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

    .ins {
        margin-top: 10px;
        width: 230px;
        height: 55px;
        border-radius: 50px;
        background-color: #f78f83;
        color: white;
        margin: auto;
        font-size: 1rem;
        font-weight: bold;
    }
    .ins:hover{
      background-color:white ;
      color:  #8557e2;
    }
}
</style>