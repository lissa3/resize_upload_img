<template>
    <div>
        <h5>I'ma parent component with title:  <strong>{{title}}</strong> </h5>
        <p>Via child updated title: {{updatedTitle}}</p>        
        <br><br>
        
        <child :mytitle="title" @childInfo="hear"></child>
    </div>
</template>

<script>
import Child from '@/components/VmodelComp/Child.vue'
export default {
    name:"Parent",
    components:{
        Child
    },
    data(){
        return {
            title:"",
            
        }
    },
    computed:{
        updatedTitle(){
            return this.title
        }
    },
    methods:{
        hear(evt){
            console.log(evt);//{title: "tata",status:flase/true}
            console.log("do you a child info?");
            this.title = evt.title;
        }
    }
    
}
</script>