<template>
<div class="main">
        <form class="user-form">
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
            <div class="form-item">
                <label>Remove file
                    <input type="checkbox" ref="remove" @change="removeImg">
                </label>
            </div>      
            <button class="form-but">Send</button>
        </form>
    <div class="img-container" ref="fotodump">
        <img src="#" alt="" class="photo-container">
    </div>
    <div v-if="warning" class="warning">
    <!-- <div v-if="warning" class="warning"> -->
        <ul>
            <li v-for="msg in warning" :key="msg.id">Waring ... coming ...{{msg}}</li>
        </ul>
    </div>
    <p>first option</p>
    <div class="img-preview" v-if="imgPreview">
        <img :src="imgPreview" alt="" style="max-width: 100%; width: 250px; object-fit: cover">
    </div>
    <p>seconf option</p>
    <div class="img-preview" v-if="imgPreview">
        <img :src="imgPreview2" alt="" style="max-width: 100%; width: 250px; object-fit: cover">
    </div>
    <div class="resized-photo" ref="resized" >

    </div>
    
    
</div>

</template>

<script>
import checkExt from '@/utils.js'

export default {
    name:'PhotoForm',   
    data(){
        return {
            uploadIntention:false,
            img:null,
            warning:[],
            maxSize: 2000000,
            imgPreview:null,
            imgPreview2:null            
        }
    },
    methods:{
        imageSelected(e){
            // TODO: this.warning = reset before a new upload
            this.warning =[]
            this.uploadIntention = true;
            this.img = this.$refs.upload.files[0]; 
            // if(!file || file.type !== 'text/plain') return; 
            if(!this.img.type.match('image.*')){
                //alert("hgghghgh")
                this.warning.push(`Be sure that you attach an image file with ext: jpg,jpeg,png`)
            }          
            if(checkExt(this.img.name)){
                this.$refs.remove.checked = false;                
                console.log(checkExt(this.img.name));
                
                if(this.img.size > this.maxSize){
                    this.warning.push("Your file too big. Please select image under 1 MB");
                    console.log("image size is",this.img.size)
                    this.img = null;
                }
            }
            else{
                this.warning.push(`File ext is not acceptable.Allowed image extentions: jpg,jpeg,png`)
                this.img = null;
            }
            if(this.img){
                this.imgPreview = URL.createObjectURL(this.img)
            }
            // read the file and create it's copy 
            console.log("inital width img",this.img.size)
            let reader = new FileReader();
            reader.readAsDataURL(this.img);
            reader.onload = (e)=>{
                let imgCopy = new Image();
                imgCopy.onload = ()=>{
                    this.img.width = newCopy.width;
                    this.img.height = newCopy.height;
                }
                imgCopy =  e.target.result;
                console.log("new image size",imgCopy.size)
            }
            reader.onerror = (e)=>{
                console.error((e));
            } 
            // only make a pre-view       
            // let reader = new FileReader();
            // reader.readAsDataURL(this.img);
            // reader.onload = (e)=>{
            //     this.imgPreview2 = e.target.result
            // }
            // reader.onerror = (e)=>{
            //     console.error((e));
            // }           
            
        },
        removeImg(e){
            this.uploadIntention = false;
            this.img = null;
            this.imgPreview=null;        
        },
        // launchFileResize(){ 
        //     let newImg = new Image()
        //     let canvas = document.createElement("canvas");
        //     let context = canvas.getContext("2d");
        //     canvas.width = this.img.width/4;
        //     canvas.height = this.img.height/4;
        //     context.drawImage(newImg,0,0,this.img.width,this.img.height,0,0,canvas.width,canvas.height);
        //     this.$refs.resized.src = canvas.toDataURL();
        //     this.imgResized = ''
        //     },
       
    },
    mounted(){
        this.image = this.$refs.zoo;
        
        
    }
    
}
</script>
<style>
.warning{
    color:red;
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