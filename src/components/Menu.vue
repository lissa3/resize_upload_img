<template>
<div class="menu">
    <div class="menu-item"><router-link :to="{name:'One'}">TrainOne</router-link> </div>
    <div class="menu-item"><router-link :to="{name:'Two'}">TrainTwo</router-link> </div>
    <div class="menu-item" ><router-link :to="{name:'Photo'}">Load Photo</router-link></div>
    <div class="menu-item" ><router-link :to="{name:'PhotoForm'}">PhotoForm</router-link></div>
    <div class="menu-item"><router-link :to="{name:'PhotoFormCrop'}">PhotoCrop</router-link>r</div>
    

</div>

</template>

<script>
export default {
    name:'Menu',
    
}
</script>
<style>
.menu{
    max-width:100vw;
    display: flex;
    justify-content:space-around ;
    align-items: center;
}
</style>>

</style>