<template>
<div>
  <div class="color-picker">
    <h4>Color Picker here</h4>    
   <div class="color" 
        v-for="color in colors"
        :key="color.id"
        :style="'background:'+color"
        @click="setColor(color)"
        >
     <div></div>
   </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'ColorPicker',
  props:{
    colors:{
      type:Array
    }
  },
  methods:{
    setColor(color){
      this.$emit('passColor',color)
      console.log("user chosen color:",color)
    }
  } 
}
</script>
<style scoped>
.color{
  display: flex;
  flex-flow: wrap;
  width:125px;
  height:25px;
  margin: 15px auto;
  border: 1px dashed black;

}

</style>
