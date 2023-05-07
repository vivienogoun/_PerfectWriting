<template>
    <div class="page-not-found">
        <img class="img-responsive" src="@/assets/PerfectWriting/Pages/uhFINgSH_2x.jpg" alt="Page non trouvée" />
        <h1>Oops!</h1>

        <router-link to="/" style="text-decoration: none; color: inherit;">
            <div class="retour">
                Retour à l'accueil
            </div>
        </router-link>

    </div>
</template>
<script>
export default {
    name: "NotFound"
}
</script>
<style >
.page-not-found {
    text-align: center;
    margin-top: 10px;
}

img {
    width: 40%;
}

h1 {
    font-size: 4rem;
    color: #FF1744;
    opacity: 0.8;
}

.retour {
        width: 200px;
        height: 60px;
        border-radius: 50px;
        background: linear-gradient(to right, #422AF8, #FF1744);
        color: white;
        border: none;
        cursor: pointer;


    }
</style>
  