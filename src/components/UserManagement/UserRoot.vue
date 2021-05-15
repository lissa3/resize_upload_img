<template>
  <div> 
    <div class="dashboard">
      <Top></Top>
      <div class="dashboard">
        <toolbar ></toolbar>
        <team :users="users"></team>
      </div>

    </div>
      
      
        
  </div>
</template> 
<script>
import Top from '@/components/UserManagement/Top.vue';
import Team from '@/components/UserManagement/Team.vue';
import Toolbar from '@/components/UserManagement/Toolbar.vue';

export default { 
    name:"UserRoot",
    data(){
      return {
        users:[
          {name:'tata',email:'tata@mail.com'},
          {name:'zoo',email:'zoo@mail.com'},
          {name:'mio',email:'mio@mail.com'},
          {name:'foo',email:'foo@mail.com'},
          {name:'john',email:'john@mail.com'},
        ]
      }
    },
    components: {   
       Top,
       Toolbar,
       Team
  },
  
  
  
}
</script>
<style scoped>
.dashboard{
    /* max-width: 80%;
    margin:2rem auto; */
    background-color: #F3F3F3;
}

</style>




