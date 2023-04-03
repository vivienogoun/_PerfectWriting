<template>
  <div>
    <LogoComponent/>
    <BoutonComponent/>
  </div>
</template>

<script>
import LogoComponent from "../components/Logo.vue"
import BoutonComponent from "../components/Bouton.vue"
export default {
name:"HomeComponent",
components: {
LogoComponent,
BoutonComponent
}
}
</script>

<style>

</style>