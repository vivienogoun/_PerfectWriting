<template>
    <div class="alphabet-page">
        <h1>{{ letter }}</h1>
        <p>Contenu de la page pour la lettre {{ letter }}</p>
    </div>
</template>
<script>
export default{
    name:'AlphabetPage',
    props:{
        letter:{
            type: String,
            required: true,
        }
    }
}
</script>
<style lang="scss">

</style>