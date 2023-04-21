<template>
  <div>
    <div>
        <CercleComponent />
    </div>
    <div class="page1 d-flex flex-column justify-content-around">
      <!-- logo -->
      <div class="logo ">
        <LogoComponent />
      </div>

      <!-- page content -->
      <div class="home  container">
        <div class="row">
          <div class="home--img col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <img class="img-fluide mx-auto d-block" src="@/assets/PerfectWriting/Illustrations/c5e9_b51s_210901.png"
              alt="" />
            <div class="space_small_icons ">
              <div class="pencil small_img "><img src="@/assets/PerfectWriting/smallicons/pencil.png" alt=""></div>
              <div class="dessin small_img  "><img src="@/assets/PerfectWriting/smallicons/drawing.png" alt=""></div>
            </div>
          </div>
          <div class="start col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div class="start--image">
              <img class="img-fluide mx-auto d-block" src="@/assets/PerfectWriting/smallicons/debut.png" alt="" />
              <p class="text-center">Bienvenue à PerfectWriting</p>
                <router-link :to="{name: 'HomeTwoComponent'}">
                  <BoutonComponent class="bouton text-center" />
                </router-link>
              <p class=" apprendre text-center">J'apprends à lire et à écrire comme un grand</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import LogoComponent from "../components/Logo.vue";
import BoutonComponent from "../components/Bouton.vue";
import CercleComponent from "../components/Cercle.vue";
export default {
  name: "HomePage",
  components: {
    LogoComponent,
    BoutonComponent,
    CercleComponent
  },
};
</script>

<style lang='scss'>
.page1 {
  min-height: 100vh;

  .logo {
    margin-top: 10px;

  }

  .home {

    .home--img {

      position: relative;

      .space_small_icons {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .small_img {
          width: 8%;
          height: 8%;
        }
      }

      img {
        width: 90%;
        height: 90%;
      }

    }

    .start {
      display: flex;
      justify-content: center;
      align-items: center;

      .start--image {
        img {
          width: 30%;
          height: 30%;

        }

        p {
          font-weight: bold;
          font-size: 1.4rem;
          margin-right: 20px;
        }

        .bouton {
          margin-bottom: 10px;
        }

        .apprendre {
          font-weight: normal;
          font-size: 1rem;
        }
      }
    }
  }
}
</style>