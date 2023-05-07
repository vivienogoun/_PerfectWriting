<template>
    <div class="ins_cons">
        <div class="Cercle1"></div>
        <div class="Cercle2"></div>
        <div>
            <img class="mx-auto d-block" src="@/assets/PerfectWriting/Illustrations/10114.jpg" alt="">
        </div>
        <div style="display: flex; margin-left: 37%;">
            <router-link :to="{ name: 'ConnexionPage' }" style="text-decoration: none; color: inherit; ">
                <p class="button text-center">Se connecter</p>
            </router-link>
            <router-link :to="{ name: 'InscriptionPage' }" style="text-decoration: none; color: inherit;">
                <p class="button text-center">S'inscrire</p>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ChoixConnexion',
}
</script>
<style lang="scss">
.ins_cons {
    img {
        margin-top: 20px;
        width: 55%;
        position: relative;
    }
    .Cercle1 {
    position: fixed;
    top: -10px;
    left: -250px;
    width: 370px;
    height: 370px;
    background-color: #ebf3fa;
    border-radius: 50%;
    z-index: -1;
}

.Cercle2 {
    position: fixed;
    bottom: -80px;
    right: -100px;
    width: 250px;
    height: 250px;
    background-color: #6a89d6;
    border-radius: 50%;
    z-index: -1;
}
.button{
    width: 150px;
    height: 50px;
    background-color: #8cb372;
    margin-right: 20px;
    border-radius: 50px;
    font-size: 1rem;
    padding-top: 12px;
    color: white;
    opacity: 0.8;

}
.button:hover{
    opacity: 1;
}
}


</style>