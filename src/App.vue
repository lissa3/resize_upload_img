<template>
  <div id="app">
    <div class="mynav">
      <Menu></Menu> 
       
    </div>     
    <div class="container">      
      <div class="myrow">
        <div class="left">Left</div>
       <div class="midden">
          <router-view/>
        
       </div>         
      <div class="right">Right</div>
      </div>
    </div>     
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Left from "@/components/Left.vue";
export default {
  name:'App',
  components: {
    Menu,
    Left     
  
  }, 
  
}
</script>
<style>
.left{
  max-width:5%;
  margin:10px;
}
.right{
  max-width:5%;
  margin:10px auto;
}

.mynav {
  padding: 30px;
}
.mynav a {
  font-weight: bold;
  color: #2c3e50;
}

#mynav a.router-link-exact-active {
  color: #42b983;
}
.main{
    max-width: 80%;
    margin:2rem auto;
    background-color: #F3F3F3;
}
</style>
