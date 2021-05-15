<template>
<div class="main">
    <p><a href="https://github.com/cathyhax/image-uploader/blob/master/src/components/ImageInput.vue"></a></p>
    <form class="user-form">
        <div class="form-item">
            <input
                type="file"
                ref="file"
                accept = "image/*"
                @change="imageSelected"
                class="custom-file-input"
                id="ava"
                name="image"
                />
            <label>
                You can here upload you image:
                
            </label>
        </div>
        
        <button class="form-but">Send</button>
    </form>
    <div class="img-container" ref="zoo"></div>
    <!-- error dialog displays any potential errors with Vuetify--> 
    <!-- <v-dialog v-model="errorDialog" max-width="300"> 
        <v-card>
        <v-card-text class="subheading">{{errorText}}</v-card-text>
        <v-card-actions><v-spacer></v-spacer> <v-btn @click="errorDialog = false" flat>Got it!</v-btn>        </v-card-actions> 
        </v-card> 
    </v-dialog> -->
    
</div>

</template>

<script>
import Cropper from 'cropperjs'
export default {
    name:'Photo',
    // for vuetify: see above data: ()=> ({  
    //     errorDialog: null,
    //     errorText: '', 
    //     uploadFieldName: 'file',      maxSize: 1024    }),
    data(){
        return {
            cropper:{},
            destination:{},
            image:{},
            maxSize: 1024 
            
        }
    },
    methods:{
        imageSelected(){
            this.ava = this.$refs.file.files[0];
            console.log("uploading file:", this.ava.name);
            console.log("size", this.ava.size);
            
        },
        // onFileChange(fieldName, file) { 
        //     const { maxSize } = this 
        //     let imageFile = file[0] 
        //     //check if user actually selected a file
        //     if (file.length>0) { 
        //         let size = imageFile.size / maxSize / maxSize
        //         if (!imageFile.type.match('image.*')) {  
        //             // check whether the upload is an image  
        //             this.errorDialog = true 
        //             this.errorText = 'Please choose an image file' 
        //             } else if (size>1) { 
        //                 // check whether the size is greater than the size limit 
        //                 this.errorDialog = true
        //                 this.errorText = 'Your file is too big! Please select an image under 1MB'
        //                 } else {  
        //                     // Append file into FormData & turn file into image URL
        //                     let formData = new FormData() 
        //                     let imageURL = URL.createObjectURL(imageFile)
        //                     formData.append(fieldName, imageFile)
        //                 }
        //     }
        // } 
        // var filterType = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;               
       
    },
    mounted(){
        this.image = this.$refs.zoo;
        // kwadratus
        // this.cropper = new Cropper(this.image,{zoomable=false,scalable=false,aspectRatio=1})
    }
    
}
</script>
<style>
.user-form{
    display: flex;
    flex-direction: column;
    align-content: space-between;
    justify-content: center;

}
.form-item{
    padding:1rem
}
.form-but{
    background-color: chocolate;
    color:white;
    padding: 15px;
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