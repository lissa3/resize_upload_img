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
    <!-- <div class="img-container" ref="fotodump">
        <img :src="img" ref="source" alt="" class="photo-container">
    </div>     -->
    
    <p>field to train</p>
    <div class="foo">
        <p>Do you see uploaded img?</p>
     <!-- <img :src="newImg" alt=""> -->
        <canvas ref="canv" style="border:1px solid;width:800px; height:600px"></canvas>
    </div>    
    
</div>

</template>

<script>
// function resize(start,img, w, h) {
//   let canvas= start;
//   canvas.width = w;
//   canvas.height = h;
//   canvas.getContext('2d').drawImage(img, 0, 0, w, h);
//   return canvas;
// }
// import Cropper from 'cropperjs';
export default {
    name:'PhotoForm',   
    data(){
        return {
            uploadIntention:false,
            img:null,
            
            newImg:null,           
            
                    
        }
    },
    methods:{
        imageSelected(e){
            // TODO: this.warning = reset before a new upload
            this.warning =[]
            this.uploadIntention = true;
            this.img = this.$refs.upload.files[0];                      
            
            // read the file and create it's copy 
            console.log("inital width img",this.img.size);
            // this.newImg = new Image()
            // this.newImg= URL.createObjectURL(this.img)
            //this.newImg=>blob:http://127.0.0.1:8080/47005010-6fde-4060-
            let canva = this.$refs.canv
            // option: hard-coded
            // canva.width = 800 ;
            // canva.height = 600;
            // option: dynamic  (sync with css in attr style)
            canva.width = canva.scrollWidth;
            canva.height = canva.scrollHeight;
            let ctx = canva.getContext('2d');
            let geit = 'geit.jpg'
            // ctx.fillStyle ='#c6680f';
            // ctx.fillRect(10,20,100,100);
            ctx.drawImage(geit.jpg,20,30,300,500)
            
           

            
            // this.cropper = new Cropper(imgCopy,{
            //     zoomable:false,
            //     scalable:false,
            //     aspectRatio:1,
            //     crop:()=>{
            //         const canvas = this.cropper.getCroppedCanvas();
            //         this.destination = canvas.toDataURL(urls)
            //     }
            // })
            
        },
        removeImg(e){
            this.uploadIntention = false;
            this.img = null;
            this.newImg = null
            // this.imgPreview=null;        
        },    
       
    },
    
}
</script>
<style>
.foo{
    width: 500px;
    height: 700px;
}
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