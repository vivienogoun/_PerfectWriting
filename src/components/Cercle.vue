<template>
<div class="circle">
      <div class="circle--top"></div>
    <div class="circle--bottom"></div>
    <div class="circle--right"></div>
</div>
   
</template>

<script>
export default {
name: 'CercleComponent'
}
</script>

<style lang="scss">
.circle{
.circle--top {
    width: 700px;
    height: 700px;
    padding-bottom: 700px;
    border-radius: 50%;
    background-color: #ff1744;
    position: absolute;
    top: -10%;
    left: 0;
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