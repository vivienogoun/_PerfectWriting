<template>
<div class="cont-read">
    <div class="title-hist text-center">
        Une courte histoire
    </div>
    <div>
        <img class="mx-auto d-block" src="@/assets/PerfectWriting/smallicons/book.png" alt="">
    </div>
</div>
</template>
<script>
export default{
    name: 'ReadComponent',
}
</script>
<style lang="scss">
.cont-read{
    width: 180px;
    height: 180px;
    border-radius: 5px;
    background: #d5d2d2;
    img{
        width: 40%;
        height: 40%;
    }
    .title-hist{
        padding-top: 20px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    
}
.cont-read:hover{
    background:linear-gradient(to right,#4832ec,#b94159 );
    color: white;
    cursor: pointer;
}


</style>