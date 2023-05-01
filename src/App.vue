<template>
 <router-view v-slot="{ Component }">
  <transition name="fade">
   <component :is="Component" />
  </transition>
 </router-view>
</template>


<script>

export default {
  
  name: 'App',
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Lexend&display=swap");
#app {
  font-family: 'Lexend',sans-serif;
}
.fade-enter-active,
.fade-leave-active {
 transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
 opacity: 0;
}
.router-link-active,
.router-link-exact-active,
.router-link{
  color: inherit;
  text-decoration: none;
}
*{
    margin: 0;
    padding: 0;
}
</style>
