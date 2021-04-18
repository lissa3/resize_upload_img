<template>
<div class="main">
    <form class="user-form">
        <div class="form-item">
            <label>
                Enter your name:
                <input type="text" v-model="name">
            </label>
        </div>
        <div class="form-item">
            <label>
                Enter your email:
                <input type="email" v-model="email">
            </label>
        </div>
        <button class="form-but">Send</button>
    </form>
    <div class="home-work">
        <h5>Home work</h5>
        <p>Number should be max: 10, min: 1</p>
        <span class="minus" @click="removeOne"><strong>-</strong></span>
        <label >
            <input type="number" v-model="num" class="house-werk-input" :min="minCount" :max="maxCount">
        </label>
        <span class="plus" @click="addOne"><strong>+</strong></span>
        
    </div>

</div>

</template>

<script>
export default {
    name:'One',
    data(){
        return {
            name:'',
            email:'',
            num:1,
            maxCount:10,
            minCount:1
        }
    },
    methods:{
        removeOne(){
            if (this.num >this.minCount){
                return this.num --;
            }            
        },
        addOne(){
            if(this.num <this.maxCount){
            return this.num ++;
            }
        }
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