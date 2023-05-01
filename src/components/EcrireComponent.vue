<template>
    <div class="ecrire-chiffre--component">
        <div class="line" v-for="(line, i) in 3" :key="i">
        </div>
        <div class="line black"></div>
        <div class="line" v-for="(line, i) in 3" :key="i"></div>
    </div>
</template>

<script>
export default {
    name: "EcrireComponent",
}
</script>

<style lang="scss">
.ecrire-chiffre--component {
    
    width: 40%;
    height: 200px;
    background: #f7f7f7;
    padding: 15px;

    .line {
     
        width: 100%;
        height: 2px;
        background: #d9d9d9;
        margin-top: 20px;
        position: relative;
    }

    .black {
        background: black;
    }
    
}
</style>