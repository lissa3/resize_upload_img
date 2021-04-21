<template>
  <div class="colums">
    <h2>Hi,Tata</h2>
    <div class="column">
      <form-img-crop />
    </div>
    <div class="column">
      <multi-uploads />
    </div>
  </div>
</template>

<script>
import FormImgCrop from '@/components/FormImgCrop.vue'
import MultiUploads from '@/components/MultiUploads.vue'




export default {
  name: 'Home',
  components:{FormImgCrop,MultiUploads}
  
}
</script>
