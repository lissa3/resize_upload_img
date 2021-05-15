<template>
    <div class="kop">
        <h3>Color <span>Picker</span></h3>
        <div class="color" :style="'background:'+color"></div>        
    </div>
</template>
<script>
export default {
    name:'Header',
    props:['color']

}
</script>

<style scoped>
.kop{
    display:flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background-color: darkcyan;
    padding: 0 15px;
}
h3{
    color: #f3f3f3;
    font-size: 28px;
    text-transform: uppercase;

}
h3 span{
    color:#FFCE00;
    font-weight: 900;
}
.color{
    width:25px;
    border:1px dashed #f3f3f3;
    height: 25px;

}
</style>