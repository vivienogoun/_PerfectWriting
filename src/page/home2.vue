<template>
  <div class="page2 container">
    <div class="row">
      <div>
        <CercletwoComponent />
      </div>
      <div class="logo">
        <LogoComponent />
      </div>
      <div class="home2 container ">
        <div class="row">
          <div class="home2--img col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <img class="img-responsive" src="@/assets/PerfectWriting/Illustrations/fille.svg" alt="" />
          </div>
          <div class="go col-xs-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-around flex-column">
            <div class="go--image text-center">
              <img class="img-responsive mx-auto d-block" src="@/assets/PerfectWriting/smallicons/superhero1.png" alt="" />
              <p>Deviens un AS de l'écriture</p>
               <router-link :to="{name: 'Home3Page'}">
                <BoutontwoComponent class="bouton" />
               </router-link>
        
              <p class="ecrire">Je veux écrire comme les grands Moi!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoComponent from "../components/Logo.vue";
import BoutontwoComponent from "../components/Bouton2.vue";
import CercletwoComponent from "../components/Cercle2.vue";
export default {
  name: "Home2Page",
  components: {
    LogoComponent,
    BoutontwoComponent,
    CercletwoComponent
  },
};
</script>

<style lang='scss'>
.page2 {

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;

  .logo {
    margin-top: 10px;
  }

  .home2 {

    .home2--img {

      img {
        width: 97.5%;
        height: 97.5%;
      }
    }

    .go {

      .go--image {

        img {
          width: 15%;
          height: 20%;
          margin-bottom: 25px;
        }

        p {
          font-weight: bold;
          font-size: 1.4rem;
          margin-bottom: 25px;
        }

        .bouton {
          margin-bottom: 25px;
        }

        .ecrire {
          font-weight: normal;
          font-size: 1rem;
        }
      }
    } 
  }
}
</style>