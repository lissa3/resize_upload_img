<template>
<div class="main">
    <div class="msg" v-if="msg" :class="`message ${err?'is-danger':'is-success'}`">
            <div class="msg-body">{{msg}}</div>
    </div>     
        <form @submit.prevent="sendIt" class="user-form" enctype="multipart/form-data" >
            <div class="form-item">
                    <label class="file-select">
                        <!-- We can't use a normal button element here, as it would become the target of the label. -->
                        <div class="select-button">
                        <!-- <span v-if="img">Selected File: {{img.name}}</span> -->
                        <!-- Instead of filename: file management comes. -->
                        <span>Select File</span>
                        </div>
                        <!-- Now, the file input that we hide. -->
                        <input  multiple  type="file" ref="uploads" accept = "image/*" @change="imageSelected"/>
                    </label>
            </div>  
              <div class="container-files">
                  <div class="cont-row" v-for="(img,index) in imgs" :key="index">
                      <div class="col-left">
                          {{img.name}}
                      </div>
                      <div class="col-right">
                          <span class="wrap-del-file" @click.prevent="imgs.splice(index,1)">
                             <a href="#" class="delete-file">X</a>
                          </span>
                      </div>
                  </div>
              </div>
            <button class="form-but">Send</button>
        </form>
    
    
</div>

</template>

<script>
function validateFile(file){
    const allowedTypes = ["image/jpeg","image/png","image/gif"];
    const MAX_SIZE = 2000000;
    if(!allowedTypes.includes(file.type)){
        return `File should be an image`
    }else if(file.size>MAX_SIZE){
        return `File is too large.Should be max ?{MAX_SIZE/1000}kB.`
    }
    return ""
}

import axios from 'axios';
export default {
    name:'MultiUploads',   
    data(){
        return {
            uploadIntention:false,
            imgs:[],            
            newImg:null, 
            imgToUploadPrev:null  ,
            msg:"",
            errMsg:"",
            err:false         
                    
        }
    },
    methods:{
       imageSelected(){
           const files = this.$refs.uploads.files;
           files.map((file)=>{
               validateFile(file)
           })
           this.imgs = [...this.imgs,...files]


       },
    //    removeImg(idx){          
    //        console.log(idx,"clicked");
    //        this.imgs = this.imgs.filter((item,index,array)=>{
    //            return array.indexOf(item)!= idx;               
    //         })
    //    }
    //    async sendIt(){

    //    } 
        
    }
    
}
</script>        

            
            
<style>
.wrap-del-file{
    background-color: rgb(241, 236, 236);
    padding:10px 15px;
    border: transparent;
    border-radius: 50%;
}
.delete-file{
    color:black;
    text-decoration: none;
}
.cont-row{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.col-left,.col-right{
    margin:0.5rem 2rem;
    padding:0.5rem 1rem;
}
.msg{
    font-weight: bold;
    font-size: 1rem;
}
.foo{
    width: 500px;
    height: 700px;
}
.is-danger{
    background-color:red;
}
.is-success{
    background-color: cadetblue;
}
/* style Digital Ocean */
.file-select > .select-button {
  padding: 1rem;

  color: white;
  background-color: #2EA169;

  border-radius: .3rem;

  text-align: center;
  font-weight: bold;
}

/* Don't forget to hide the original file input! */
.file-select > input[type="file"] {
  display: none;
}
/* end digitalOcaen */
.foto-container{
    display: none;
    width: 300px;
    height: 300px;
}
.user-form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
.form-item{
    padding:1rem
}
.form-but{
    background-color: chocolate;
    border-radius: 10px;
    color:white;
    padding: 15px;
    width: 150px;
}
.plus,.minus{
    padding:10px 16px;
    background-color: rgb(226, 192, 124);
    border-radius:50%;
    color:white;
    cursor: pointer;
}
.home-work{
    margin: 1rem;
    padding: 1rem;
}
.house-werk-input{
    margin:10px;
    height: 25px;
    border-radius: 5px;
}
</style>