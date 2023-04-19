<template>
  <div class="logo ">
    <div class="logo--image ">
      <img class="mx-auto d-block" src="@/assets/PerfectWriting/smallicons/star1.png" alt="" />

      <div><p class="text-center">Perfect Writting</p></div>
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
      width: 3%;
      height: 3%;
    }
    p{
      font-weight: bold;
      font-size: 0.7rem;
    }
  }
}
</style>