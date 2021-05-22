<template>
    <div>
        <h5>I'm a parent component for stars</h5>
        <p>Rating (based on 23 ratings) </p>
        <div class="stars-container"> 
            <div v-if="rating===0" class="stars-container">
                <p>No rating yet</p>
                <p class="px-1"><b-icon-star></b-icon-star></p>
                <p class="px-1"><b-icon-star></b-icon-star></p>
                <p class="px-1"><b-icon-star></b-icon-star></p>
                <p class="px-1 "><b-icon-star></b-icon-star></p>
                <p class="px-1"><b-icon-star></b-icon-star></p>
            </div> 
            <div v-if="rating>0"   class="stars-container">
                <div class="px-1" v-for="star in roundedRating" :key="star.id">
                    <div>
                        <b-icon-star-fill></b-icon-star-fill>
                    </div>
                </div>
                <div v-if="floatFlag">
                    <div>
                        <b-icon-star-half></b-icon-star-half>
                    </div>
                </div>
                <div v-if="addEmptyStars" class="stars-container">
                    <div class="px-1" v-for="star in addEmptyStars" :key="star.id">
                        <p>
                            <b-icon-star></b-icon-star>
                        </p>
                    </div>
                </div>
            </div> 
                  
            
        </div>
         <hr> 
         <div>FF: {{floatFlag}}</div>               
            <!-- <p class="px-1 point"><b-icon-star-fill></b-icon-star-fill></p>
            <p class="px-1 point"><b-icon-star-fill></b-icon-star-fill></p>
            <p class="px-1 point"><b-icon-star-fill></b-icon-star-fill></p>
            <p class="px-1 point"><b-icon-star></b-icon-star></p> -->
            <!-- <p class="px-1 point"><b-icon-star-half></b-icon-star-half></p> -->
        <!-- <single-star></single-star>
        <single-star></single-star>
        <single-star></single-star>
        <single-star></single-star>
        <single-star></single-star>
              -->
        
    </div>
</template>

<script>
import SingleStar from '@/components/Stars/SingleStar.vue'
export default {
    name:"MyStar",
    components:{
        // SingleStar
    },
    data(){
        return { 
            rating:1.5,
                      
            
        }
    },
    computed:{
        roundedRating(){
            console.log("to the floor",Math.floor(this.rating))
            return Math.floor(this.rating)
        },
        addEmptyStars(){
            if(this.floatFlag){
                return 5-this.roundedRating-1
            }else{
                return 5-this.roundedRating
            }
        },
        floatFlag(){
            console.log("is rating Integer?",Number.isInteger(this.rating))
            return !Number.isInteger(this.rating)
        }
        
        
        
    },
    methods:{
        
    }
    
}
</script>
<style scoped>
.stars-container{
    display: flex;
    /* padding: auto; */
    /* margin: 0.5rem; */
}
.point{
    cursor: pointer;
}
</style>