<template>
    <div>
        <button type="submit" class=" btnretour"><span class="glyphicon glyphicon-arrow-left"></span>Retour</button>

    </div>
</template>
    
<script>
export default {
    name: "BoutonRetourComponent",
}
</script>
    
<style lang='scss'>
.btnretour {
    width: 150px;
    height: 60px;
    border-radius: 50px;
    background: #f1f0f0 ;
    color:#9b9796;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
    border: 1px solid rgb(206, 130, 238);

}
.btnretour:hover{
    box-shadow: 6px 6px 0 gray ;
}
</style>