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
                        <!-- Display the filename if a file has been selected. -->
                        <span v-if="img">Selected File: {{img.name}}</span>
                        <span v-else>Select File</span>
                        </div>
                        <!-- Now, the file input that we hide. -->
                        <input type="file" ref="upload" accept = "image/*" @change="imageSelected"/>
                    </label>
            </div>  
            <!-- <div class="form-item">
                <label>Remove file
                    <input type="checkbox" ref="remove" @change="removeImg">
                </label>
            </div>       -->
            <button class="form-but">Send</button>
        </form>
    <div class="img-container" >
        <p>I'm connected to id=inp. Do you see an image?</p>
        <img :src="imgToUploadPrev" alt="" class="photo-container">
    </div>    
    <div class="img-container" >
        <p>Destination:</p>
        <img :scr="destination" alt="" class="photo-container">
    </div> 
    
</div>

</template>

<script>
// import Cropper from 'cropperjs';
import optimizePhoto from '@/helpers/img_help.js'

import axios from 'axios';
export default {
    name:'PhotoForm',   
    data(){
        return {
            uploadIntention:false,
            img:null,            
            newImg:null, 
            imgToUploadPrev:null  ,
            msg:"",
            err:false ,
            cropper:{},
            destination:{},
            zoo:{}        
                    
        }
    },
    methods:{
        async imageSelected(e){            
            this.img = this.$refs.upload.files[0]; 
            console.log(`initial size, ${this.img.size/1000} kB or ${this.img.size/1000000} MB`)           
           const resizedPhoto = await optimizePhoto(this.img);
           console.log(`resized photo, ${resizedPhoto.size/1000} kB or ${resizedPhoto.size/1000000} MB`) 
           //await uploadPhoto(resizedPhoto)    
        }

        },
        removeImg(e){
            this.uploadIntention = false;
            this.img = null;
            this.imgToUploadPrev=null;        
        },  
        async sendIt(){
            try{
                // http://127.0.0.1:8000
                const data = new FormData();
                data.append("ava",this.img);
                data.append('pio',33);  
                console.log("after append formData",data)          
                await axios.post('http://127.0.0.0:8000/create-avatar',data) // let op: no need of {} 
                console.log("upload Ok");
                this.msg="Successfully uploaded your file "
                this.img = ""
            }  
            catch(err) {
                console.log("error...");
                this.errMsg = "smth went wrong";
                this.err= true
            }
       
    },
}
     
            
                         
            
    



// this.imgToUploadPrev = URL.createObjectURL(file);
            //let reader = new FileReader();
            // reader.readAsDataURL(image);
            //reader.onload = (e)=>{
                // let newCopy = new Image()
                // newCopy.onload = ()=>{
                //     image.width = newCopy.width
                //     image.height = newCopy.height

                //}
                // imgCopy = e.target.result;
                
            //}
                
            //  this.cropper = new Cropper(this.img, {
            //     aspectRatio: 1,
            //     zoomable:false,
            //     scalable:false,
            //     crop:()=>{
            //         // statdard html canvas
            //         const canvas = this.cropper.getCroppedCanvas()
            //         this.destination = canvas.toDataURL("image/jpg")
            //     }
                
            // });    
//this.$refs.remove.checked = false; 
            //this.msg="";
            //this.err = false;            
            // const allowedTypes = ["image/jpeg","image/png","image/gif"];
            // const MAX_SIZE = 2000000;
// const tooBig = file.size > MAX_SIZE;
//             if(allowedTypes.includes(file.type)&&!tooBig){
//                 this.img = file
//                 this.uploadIntention = true;                  
//                 console.log("img ext allowed,size is: ",this.img.size);
//                 this.msg = "Upload OK";
//             }else{
//                 this.msg = tooBig?`Too large.Max size is ${MAX_SIZE/1000}Kb`:`Only images are allowed`
//                 this.err = true
//             }
</script>        

            
            
<style>
.foo{
    width: 500px;
    height: 700px;
}
.is-danger{
    background-color:red;
}
.is-success{
    background-color:cadetblue;
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