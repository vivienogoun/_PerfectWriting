<template>
  <div>
    <button type="submit" class="btnclass">Commencer</button>
  </div>
</template>

<script>
export default {
  name: "BoutonComponent",
}
</script>

<style lang='scss'>
.btnclass {
  width: 200px;
  height: 60px;
  border-radius: 50px;
  background: linear-gradient(to right, #422AF8, #FF1744);
  color: white;
  border: none;
  cursor: pointer;
}

.btnclass:hover {

  background: #f1f0f0;
  border: 2px solid rgb(255, 188, 255);
  background: -webkit-linear-gradient(top, red 30%, blue 70%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

}
</style>