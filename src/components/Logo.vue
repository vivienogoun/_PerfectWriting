<template>
  <div class="logo">
    <div class="logo--image">
      <img src="@/assets/PerfectWriting/smallicons/star1.png" alt="" />

      <div><p>Perfect Writting</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogoComponent",
};
</script>
<style lang='scss'>
.logo {
  .logo--image {
    position: relative;
    img {
      width: 5%;
      height: 5%;
    }
    p{
      font-weight: bold;
      font-size: 1rem;
    }
  }
  h4 {
    font-size: 1.2rem;
    font-family: "Lexend", sans-serif;
  }
}
</style>