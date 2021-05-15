<template>
    <div class="main">
        <form @submit.prevent="nothing"  class="user-form">
            <div class="form-item">
                <label >
                    Enter smth:
                    <input  ref="inpX"  type="text" v-model="userInp" class="green">
                   
                </label>
            </div>
            <div class="form-item">
                <label>
                    Upload File:
                    <input  type="file" ref="myfile" @change="getPhoto">
                   
                </label>
            </div>
            
            <button class="form-but" @click="showSecret" type="submit">Send</button>
        </form>   
        <h5>Let's what user's typed....</h5>   
        <p>it is: {{displayUserInp}}</p> 
    </div>
</template>

<script>
export default {
    data(){
        return { 
            userInp:"",
            file:""
                       
        }
    },
    computed:{
        displayUserInp(){
            console.log("computed found userInp from model",this.userInp)
            return this.userInp;
        }
    },
    methods:{
        showSecret(){
            console.log("after click detected refs = value",this.$refs.inpX.value)
            console.log("class list",this.$refs.inpX.classList)
        },
        getPhoto:function(){
            console.log("method getPhoto found all refs",this.$refs); //inpX, myfile
            console.log("first look at what you attached, then method nothing will fire");
            console.log(this.$refs.myfile.files[0].name)
        },
        nothing(){
            console.log("file is",this.file)
            
        }
    } 
    
}
</script>