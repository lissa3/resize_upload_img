<template>
    <div>
        <section>
            <h4>I'm a product list</h4>
            <div class="prods">
                <h2>List of all products</h2>
                <div class="collection" v-for="(prod,index) in prods" :key="index">
                    index: {{index}}
                    <prod-item :prod="prod"></prod-item>
                    <hr class="red">
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import ProdItem from './ProdItem.vue'
export default {
    name:"ProdList",
    components:{
        ProdItem
    },
    data(){
        return {
        prods:[
            {id:1,name:"desktop",price:'$ 530',qt:17},
            {id:2,name:"computer table",price:'$ 45',qt:2},
            {id:3,name:"lamp",price:'$ 21',qt:5},
            {id:4,name:"chair",price:'$ 80',qt:12},
        ]
        }

    },
    created(){
        console.log("component prod list created")
    },
    // mounted(){
    //     console.log("component prod list mounted")
    // },
    // updated(){
    //     console.log("component prod list updated")
    // }
}
</script>
<style scoped>
hr{
    
    position: relative;
            top: 20px;
            border: none;
            height: 12px;
            background: rgb(197, 11, 11);
            margin-bottom: 50px;

}
</style>