<template>
<div>
    <div class="mymenu">
        <div class="mymenu-item"><router-link :to="{name:'UserRoot'}">Management</router-link> </div>
        <!-- <div class="mymenu-item"><router-link :to="{name:'Login'}">Login</router-link> </div> -->
        <div class="menu-item"><router-link :to="{name:'Parent'}">Problem V-mod</router-link> </div>
        <div class="mymenu-item"><router-link :to="{name:'ColorRoot'}">ColorPicker</router-link> </div>
        <div class="mymenu-item"><router-link :to="{name:'Home'}">Home</router-link> </div>
        <!-- <div class="menu-item"><router-link :to="{name:'ProdList'}">ProdList</router-link> </div> -->
        <!-- <div class="menu-item"><router-link :to="{name:'InputSpy'}">InputSpy</router-link> </div> -->
        <!-- <div class="menu-item"><router-link :to="{name:'One'}">Inputs</router-link> </div> -->
        <!-- <div class="menu-item"><router-link :to="{name:'Two'}">Paginate</router-link> </div> -->
        <!-- <div class="menu-item" ><router-link :to="{name:'MultiUpload'}">Multi Upload</router-link></div>
        <div class="menu-item" ><router-link :to="{name:'PhotoForm'}">PhotoForm</router-link></div> -->
        <!-- <div class="menu-item"><router-link :to="{name:'PhotoFormCrop'}">PhotoCrop</router-link>r</div>     -->

    </div>
    <div class="menu">
        <!-- <div class="menu-item"><router-link :to="{name:'Watch'}">Watchers</router-link> </div> -->
           

    </div>
</div>

</template>

<script>
export default {
    name:'Menu',
    
}
</script>
<style>
.mymenu{
    max-width:100vw;
    display: flex;
    justify-content:space-around ;
    align-items: center;
}
</style>>

</style>