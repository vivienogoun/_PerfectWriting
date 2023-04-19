<template>
  <div class="circle">
    <div class="circle--top2"></div>
    <div class="circle--bottom"></div>
  </div>
</template>
  
<script>
export default {
  name: 'CercletwoComponent',
}
</script>
  
<style lang="scss">
.circle {
  .circle--top2 {
    content: "";
    position: fixed;
    top: -140px;
    right: -100px;
    width: 250px;
    height: 250px;
    background-color: #f825144d;
    border-radius: 50%;
    z-index: -1;
  }

  .circle--bottom {
    content: "";
    position: fixed;
    bottom: -20px;
    right: -250px;
    width: 400px;
    height: 380px;
    background-color: #ff1744;
    border-radius: 50%;
    z-index: -1;

  }

}
</style>