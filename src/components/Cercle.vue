<template>
  <div class="circle">
    <div class="circle--top"></div>
    <div class="circle--right"></div>
  </div>
</template>

<script>
export default {
  name: 'CercleComponent'
}
</script>

<style lang="scss">
.circle {
  .circle--top {
    content: "";
    position: fixed;
    top: -10px;
    left: -250px;
    width: 550px;
    height: 550px;
    background-color: #ff1744;
    border-radius: 50%;
    z-index: -1;

  }

  .circle--right {
    content: "";
    position: fixed;
    top:-80px;
    right: -100px;
    width: 250px;
    height: 250px;
    background-color: #f825144d;
    border-radius: 50%;
    z-index: -1;
  }
}
</style>