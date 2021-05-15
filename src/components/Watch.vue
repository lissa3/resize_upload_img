<template>
<div class="main">
    <h2>Lets watch Watchers!</h2>    
        
        <div class="form-item">
            <label>
                Enter your Name:
                <input type="text" v-model="user.name">
            </label>
        </div>
        <div class="form-item">
            <label>
                Change object age:
                <input type="text" v-model="user.age">
            </label>
        </div>
        <!-- <p>Computed: {{showInfo}}</p> -->
        
    
    <!-- <p>
        <button @click="addField" class="form-but">Add new field to an obj</button>
        
    </p> -->
    
    
</div>

</template>

<script>
import Vue from 'vue'
export default {
    name:'Watch',
    data(){
        return {                  
           user:{
               name:"",
               age:""               
           }            
        }
    },
    methods:{
        fire(name){
            console.log(`sing a song for ${name}`);
            
        }
    },
    // computed:{
    //     showInfo(){
    //         if(this.user.name ==='Tata'){
    //             return this.user.name;
    //         }else if(this.user.name===""){
    //             console.log("calling method")
    //             return ""
    //         }else{
    //             return this.fire(this.user.name)
    //         }
    //     }
    // },    
    watch:{
        // not only like this but some logic
        'user.name':function(newName){
            if(newName.indexOf('?') === -1){
            console.log('watching changes in name',newName);
            }else{
                this.fire(newName)
            }
        },
        //'user.age'(newAge){console.log('watching changes in age',newAge)},
        //below DOES NOT WORK!
        // so: 'user'(newVers){console.log('watching the whole object: DOES NOT WORK!',newVers)}
        
    },
    
    // mounted(){
    //     console.log("mounted here")
    //     this.$watch('user',()=>console.log('from mounted: obj is changing'),{deep:true})
    // }
    
}
</script>
<style>

</style>
