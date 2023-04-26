<template>
    <div class="chiffre--page text-center">
        <h1 >{{ chiffre }}</h1>

    </div>
</template>
<script>
export default {
    name: 'ChiffrePage',
    props: {
        chiffre: {
            type: String,
            required: true,
        }
    }
    
}
</script>
<style lang="scss">
.chiffre--page {
    width: 120px;
    height: 120px;
    border-radius: 5px;
    background: #f1f0f0;
    h1{
        font-size: 3rem;
        margin-top: 20%;
    }
}
</style>