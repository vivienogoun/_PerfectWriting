<template>
    
    <div class="outils">
        <div class="name--outils text-center">
            <p class="text-center" style="padding-top:2px;">Outils</p>
        </div>
        <div style="display:flex;">
        <div class="element-img" style=" margin-right: 60px;">
            <img class="mx-auto d-block" src="@/assets/PerfectWriting/smallicons/Gomme.png" alt="">
            <p>La gomme</p>
        </div>
        <div class="element-img">
            <img class="mx-auto d-block" src="@/assets/PerfectWriting/smallicons/Pencil2.png" alt="">
            <p>Le crayon</p>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "OutilsComponent",
}
</script>
<style lang="scss">
 
.outils {
    width: 70%;
    height:85%;
    border-style: solid;
    border-width: 2px;
    border-image: linear-gradient(45deg,#8557e2,#da82b6) 1;
    .name--outils{
        width:130px;
        height: 25%;
        background: linear-gradient(to right ,#8557e2,#da82b6);
        color: white;
        border-radius: 50px;
        margin-top: -17px;
        margin-left: 55px;
    }
   .element-img {
    margin: auto;
    img {
        width: 50px;
        height: 50px;
        margin-bottom: 10px;
    }
    p{
        font-size: 0.8rem;
    }
   }
}
</style>