<template>
  <div class="page2">
    <div class="circle--top"></div>
    <LogoComponent class="logo" />
    <div class="home">
      <div class="home--img">
        <img
          class="img-responsive"
          src="@/assets/PerfectWriting/Illustrations/sv92_5eve_220226.png"
          alt=""
        />
      </div>
      <div class="go">
        <div class="go--image">
          <img
            class="img-responsive"
            src="@/assets/PerfectWriting/smallicons/superhero1.png"
            alt=""
          />
          <p>Deviens un AS de l'écriture</p>
          <BoutonComponent class="bouton" />
          <p>Je veux écrire comme les grands Moi!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoComponent from "../components/Logo.vue";
import BoutonComponent from "../components/Bouton.vue";
export default {
  name: "HometwoComponent",
  components: {
    LogoComponent,
    BoutonComponent,
  },
};
</script>

<style lang='scss'>
.page2 {

  .logo {
    margin-top: 20px;
  }
  .home {
    display: flex;

    .home--img {
      width: 50%;
      position: relative;
      img {
        width: 90%;
        height: 90%;
      }
    }
    .go {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      .go--image {
        img {
          width: 20%;
          height: 20%;
          margin-right: 20px;
        }
        p {
          font-weight: bold;
          font-size: 1.4rem;
          margin-right: 20px;
        }
        .bouton {
          margin-bottom: 10px;
        }
      }
    }
  }
  .circle--top{
      width: 500px;
    height: 500px;
    padding-bottom: 700px;
    border-radius: 50%;
    background-color: #ff1744;
    position: absolute;
  top: -80%;
    right:10%;
    transform: translateX(-50%);
  }
  .circle--right {
    width: 700px;
    height: 700px;
    border-radius: 50%;
    background-color: #f825144d;
    position: absolute;
    top: -20%;
    right: 10;
    transform: translateY(-50%);
  }
}
</style>