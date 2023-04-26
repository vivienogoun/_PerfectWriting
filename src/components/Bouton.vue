<template>
  <div>
    <button type="submit" class="boutonclass">Commencer</button>
  </div>
</template>

<script>
export default {
  name: "BoutonComponent",
}
</script>

<style lang='scss'>
.boutonclass {
  width: 200px;
  height: 60px;
  border-radius: 50px;
  background: linear-gradient(to right, #422AF8, #FF1744);
  color: white;
  border: none;
  cursor: pointer;
}

.boutonclass:hover {
   background: #FF1744;
    border: solid 2px #422AF8;
    color: white;
}
</style>