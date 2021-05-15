<template>
  <div>   
      <div>
            <kop :color="color"></kop>             
      </div>   
      <color-picker :colors="colors" @passColor="passColor"></color-picker>
      <right :color="color"></right>        
    
        
  </div>
</template> 
<script>
import Kop from "@/components/colorPicker/Header.vue";
import Right from "@/components/colorPicker/Right.vue";
import ColorPicker from '@/components/colorPicker/ColorPicker.vue';
export default { 
    name:"ColorRoot",
    components: {   
    Right,
    Kop,
    ColorPicker,    
  },
  data(){
    return {
      color:"#f3f3f3",
      colors:[ "#412457", "#760173", "#920441", "#163273", "#114405", "#195370", "#389463", "#729287", "#146334", "#061191" ]
    }
  },
  methods:{
    passColor(color){
      this.color = color;
      console.log("got color from chold",color)
    }
  }
  
  
}
</script>
<style scoped>

</style>




