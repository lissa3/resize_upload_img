<template>
  <div class="team"> 
      <h1>I'm a team</h1> 
      <div class="team-member-table">
          <div class="table-row">
              <div class="table-col">Name</div>
              <div class="table-col">Email</div>
              <div class="table-col table-actions">Actions</div>
          </div>
          <div class="table-row" v-for="(user,index) in users" :key="index">
              <div class="table-col name">{{user.name}}</div>
              <div class="table-col email">{{user.email}}</div>
              <div class="table-col action">
                  <div class="but-group group-end">
                      <button class="btn btn-small">Update</button>
                      <button class="btn btn-small alert">Delete</button>
                  </div>
              </div>
          </div>
          
      </div>     
        
  </div>
</template> 
<script>

export default { 
    name:"Team",
    props:['users'],
    components: {   
       
  },
  
  
  
}
</script>
<style scoped>
.team{
    padding:16px;
}
.table .table-header{
    background-color: gray;
}
/* .team-member-table{

} */
.table-row{
    display: flex;
    align-items: center;
    background-color:#88bea3;
}
.table-row:nth-child(2n+1){
    background-color:#f5c972;
}
.table-col{
    flex:1 1 33.333%;
    padding:16px;
    color:gray;
}
.but-group{
    display: flex;
    justify-content: space-between;
    margin: 0 10px;
}
.group-end{
    margin: 5px;
    padding:5px;
}
.btn{
    margin: 10px;
    padding: 10px;
    background-color: #c7e7d7;
    border-radius: 10px;
}
.alert {
    background-color: #d61919;
    color:white;
}

</style>




