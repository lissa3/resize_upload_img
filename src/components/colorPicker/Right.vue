<template>
    <div class="grid">
        <div class="grid-item"        
         v-for="(block,index) in blocks" 
         :key="index"
         :style="'background:'+block.color"
         @click="changeColor(index)"
         >
        </div>
       
    </div>
</template>
<script>
export default {
    name:"RightSidebar",
    props:['color'],
    data(){
        return{
            blocks:[],
            gridSize:2
            // gridSize:16
        }
    },
    created(){
        this.initGrid();
    },
    methods:{
        initGrid(){
            for(let i=0;i<this.gridSize;i++){
                this.blocks.push({
                    color:"#fff"
                });

            }
            // console.log("blocks are:",this.blocks)

        },
        changeColor(iD){
            // console.log("clicked and detected color",iD);
            // console.log("color",this.color);
            this.blocks[iD].color = this.color;
        }
    }
    
}
</script>
<style scoped>
.grid{
    display:grid;
    grid-template-columns: repeat(10,1fr);
    grid-template-rows: repeat(10,1fr);
    width:320px;
    height:320px;
}
.grid-item{
    border:1px dashed rgba(173, 167, 167, 0.715);
    margin:5px;
    cursor: pointer;
}
</style>