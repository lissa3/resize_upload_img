<template>
    <div>
        <h5>I'm a a single star component</h5>
        <div class="box">
            <p class="b1"><b-icon-star-fill></b-icon-star-fill></p> 
            <p class="b2"><b-icon-star-fill></b-icon-star-fill></p> 
            <p class="b3"><b-icon-star-fill></b-icon-star-fill></p> 
            <p class="b4"><b-icon-star-fill></b-icon-star-fill></p> 
            <p class="b5"><b-icon-star-fill></b-icon-star-fill></p>             
        </div>     
    </div>
</template>

<script>

export default {
    name:"SingleStar",    
    data(){
        return {            
            
        }
    },
    computed:{
        
    },
    methods:{
        
    }
    
}
</script>
<style scoped>
.box{
    display: flex;
    direction: rtl;
    transition:0.3 all;
}
.box p{
    font-size:20px;
    color:rgb(240, 149, 29);
}
.box p:hover{
    color:rgb(224, 67, 67);
    cursor: pointer;

}
.b1:hover ~ p{
    color:rgb(224, 67, 67);
}
.b2:hover ~ p{
    color:rgb(224, 67, 67);
}
.b3:hover ~ p{
    color:rgb(224, 67, 67);
}
.b4:hover ~ p{
    color:rgb(224, 67, 67);
}
.b5:hover ~ p{
    color:rgb(224, 67, 67);
}


</style>