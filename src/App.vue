<template>
<<<<<<< HEAD
 <div id="app"> <CongratsPage /> </div>
</template>

<script>

import CongratsPage from "./page/Congrats.vue";
export default {
  name: 'App',
  components: {
    CongratsPage,
  }
=======
 <router-view v-slot="{ Component }">
  <transition name="fade">
   <component :is="Component" />
  </transition>
 </router-view>
</template>

<script>
export default {
  name: 'App',
>>>>>>> 14d3a36a01263198e0f4156a8d6d1b2f55d9e2c5
}
</script>

<style>
#app {
}
.fade-enter-active,
.fade-leave-active {
 transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
 opacity: 0;
}
</style>
