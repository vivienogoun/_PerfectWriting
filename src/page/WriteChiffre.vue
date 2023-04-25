<template>
    <div class="chiffre--options">
        <div class=" logo--chiffre text-center">
            <LogoComponent/>
        </div>
        <div class="btn--return">
            <BoutonRetourComponent/>
        </div>
        <div class="container">
            <div class="row" >
                <div class="text-center text-quote">
                    <img class="quote" style="margin-left:15px;" src="@/assets/PerfectWriting/smallicons/quotes-removebg-preview.png" alt=""> 
                    Je veux savoir lire et compter, là , je pourrai compter le nombre de pas qu'il me reste, pour monter voir la lune!
                    <img class="quote" style="rotate: 180deg; margin-right:15px;" src="@/assets/PerfectWriting/smallicons/quotes-removebg-preview.png" alt="">
                    <img  class = "superhero" style="margin-left:10px;" src="@/assets/PerfectWriting/smallicons/superhero.png" alt="">
                </div>
                <div  v-for="(read, i) in 8" :key="i" class="form--chiffre--options col-xs-6 col-sm-4 col-md-4 col-lg-3">
                    <ReadComponent style="margin: auto;"  />
                </div>
               
            </div>
        </div>
    </div>
    </template>
    <script>
    import LogoComponent from "../components/Logo.vue";
    import BoutonRetourComponent from "../components/BoutonRetour.vue";
    import ReadComponent from "@/components/ReadComponent.vue";
    export default{
        name: 'WriteChiffrePage',
        components:{
            LogoComponent,
            BoutonRetourComponent,
            ReadComponent
        }
    }
    </script>
    <style lang="scss">
    .chiffre--options{
        .logo--chiffre{
            margin-top: 20px;
            margin-bottom: 20px;
        }
        .btn--return{
            margin-left: 3%;
            margin-bottom: 3%;
        }
        .form--chiffre--options{
            margin-bottom: 40px;
        }
        .text-quote{
            margin-bottom: 30px;
            .quote{
            width: 20px;
            height: 20px;
            margin-top: -40px;
        }
             .superhero{
            width: 70px;
            height: 70px;
        }
        }
    
        
    }
    </style>