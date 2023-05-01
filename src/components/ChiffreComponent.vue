<template>
    <div class="chiffre--component">
        <div class="line" v-for="(line, i) in 3" :key="i">
        </div>
        <h2>0</h2>
        <div class="line black"></div>
        <div class="line" v-for="(line, i) in 3" :key="i"></div>
    </div>
</template>

<script>
export default {
    name: "ChiffreComponent",
}
</script>

<style lang="scss">
.chiffre--component {
    
    width: 40%;
    height: 150px;
    border-radius: 5px;
    background: #f7f7f7;
    padding: 15px;

    .line {
     
        width: 100%;
        height: 2px;
        background: #d9d9d9;
        margin-top: 15px;
        position: relative;
    }

    .black {
        background: black;
    }
    h2{
        margin-top: -34px;
        position: absolute;
        margin-left: 6%;
        font-size: 3em;
    }
}
</style>