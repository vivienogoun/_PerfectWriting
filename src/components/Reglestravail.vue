<template>
    <div class="regles">
        <img src="@/assets/PerfectWriting/smallicons/polices.png" alt="">
        <h4 class="text-center">Règles de travail</h4>
        <ol>
            <li>Je reste concentré</li>
            <li>Je finis toutes mes répétitions</li>
            <li> J'appuie sur le bouton j'ai fini, si j'ai fini</li>
        </ol>
    </div>
</template>
<script>
export default {
    name: "ReglestravailPage",

}
</script>
<style lang="scss">
.regles {
    width:80%;
    border-style: solid;
    border-width: 1.5px;
    border-image:  linear-gradient(45deg,#8557e2,#da82b6) 1;
    img {
        margin-top: -20px;
        margin-left: -20px;
        width: 40px;
        height: 40px;
    }
}
</style>