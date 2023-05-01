<template>
  <div id="cahier">
    <EcrireComponent v-for="i in 6" :key="i" />
  </div>
</template>
<script>
import EcrireComponent from './EcrireComponent.vue';
export default {
  name: "CahierComponent",
  components: { EcrireComponent}
}
</script>
<style>
#cahier{
  display: flex;
}
#canvas {
  position: absolute;
}
</style>