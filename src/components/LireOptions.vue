<template>
    <div class="lire--options">
        <div class="form--options">
            <p class="text-center">Une courte histoire</p>
            <img  class="mx-auto d-block" src="@/assets/PerfectWriting/smallicons/read.png" alt="">
        </div>
        <div class="form--options">
            <p class="text-center">Temps de lecture</p>
            <img  class="mx-auto d-block" src="@/assets/PerfectWriting/smallicons/clock.png" alt="">
            <div class="time"></div>
        </div>
        <div class="form--options">
            <p class="text-center">Terminer ma lecture</p>
            <img class="mx-auto d-block"  src="@/assets/PerfectWriting/smallicons/stamp.png" alt="">
            <p class="text-center" style="font-size: 0.5rem;">We put a bookmark for you</p>          
        </div>
    </div>
   </template>
   
   <script>
   export default{
    name: "LireOptions"
   }
   </script>
   
   <style lang="scss">
   .lire--options{
    margin: auto;
    .form--options{
        width: 150px;
        height: 130px;
        border-radius: 5px;
        margin-bottom: 50px;
        background:#fbfafa;
        padding: 10px;
        border: 1px solid violet;
        img{
            width: 50px;
            height: 50px;
        }
        p{
            font-size: 0.8rem;
            font-weight: bold;

        }
    }
   }
    
   
   </style>