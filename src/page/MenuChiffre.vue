<template>
    <div class="menu--chiffre">
        <div class=" logo text-center">
            <LogoComponent />
        </div>
        <div class="btn--return">
            <BoutonRetourComponent />
        </div>
        <div class="btn--lettre">
            <p class="text-center">J'écris des chiffres</p>
        </div>
        <div class="container">
            <div class="row">
                <div class="form--niveau col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <p class="text-center">Facile</p>
                    <img class="mx-auto d-block" src="@/assets/PerfectWriting/smallicons/convenient.png" alt="">
                </div>
                <div class="form--niveau col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <p class="text-center">Moyen</p>
                    <img class="mx-auto d-block" src="@/assets/PerfectWriting/smallicons/struggle.png" alt="">
                </div>
                <div class="form--niveau col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <p class="text-center">Difficile</p>
                    <img class="mx-auto d-block" src="@/assets/PerfectWriting/smallicons/hard-work.png" alt="">
                </div>
                <div class="text-center text-quote">
                    <img class="superhero" style="margin-right:15px;"
                        src="@/assets/PerfectWriting/smallicons/superhero.png" alt="">
                    <img class="quote" style="margin-left:15px;"
                        src="@/assets/PerfectWriting/smallicons/quotes-removebg-preview.png" alt="">
                    Les noms des supers-héros sont écris dans les livres! Un jour tu écriras le tien aussi si tu le veux
                    bien...
                    <img class="quote" style="rotate: 180deg; margin-right:15px;"
                        src="@/assets/PerfectWriting/smallicons/quotes-removebg-preview.png" alt="">
                    <p>D.Linson</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import LogoComponent from "../components/Logo.vue";
    import BoutonRetourComponent from "../components/BoutonRetour.vue";

    export default {
        name: 'MenuChiffrePage',
        components: {
            LogoComponent,
            BoutonRetourComponent,

        }
    }
</script>
<style lang="scss">
    .menu--chiffre {
        
        .logo {
            margin-top: 20px;
            margin-bottom: 20px;
        }

        .btn--return {
            margin-left: 3%;
            margin-bottom: 3%;
        }

        .btn--lettre {
            width: 20%;
            height: 60px;
            border: 1px solid violet;
            background: #f1f0f0;
            margin: auto;
            border-radius: 50px;
            font-size: 1rem;

            p {
                margin-top: 15px;
                font-weight: bold;
            }
        }

        .form--niveau {
            margin: auto;
            width: 200px;
            height: 200px;
            border: 2px solid black;
            margin-bottom: 40px;
            margin-top: 40px;
            border-top: 3px solid #ff1744;
            border-right: 3px solid #422AF8;
            border-bottom: 3px solid #ff1744;
            border-left: 3px solid #422AF8;
            cursor: pointer;

            img {
                width: 50%;
                height: 40%;
            }

            p {
                font-weight: bold;
                margin-top: 40px;
                font-size: 1.3rem;
            }
        }
    
        .text-quote {

            .quote {
                width: 20px;
                height: 20px;
                margin-top: -40px;
            }

            p {
                font-weight: bold;
                margin-bottom: 20px;
            }

            .superhero {
                width: 60px;
                height: 60px;
            }
        }


    }
</style>