<template>
    <div>
        <section>
            <h5>Index: #{{prod.id}}</h5>
           <h5>Title:{{prod.name}}</h5>
           <p>Qty: {{prod.qt}}</p>
           <p>Price <strong>{{prod.price}}</strong></p>            
        </section>
    </div>
</template>
<script>
export default {
    name:"ProdItem",
    props:{
        prod:{
            type:Object,
            // required:true + default не имеет смысла,т.к. задаёт обязательность наличия
            required:false,
            default:function(){
            return {
                name:"Nothing",
                id:34,
                qt:444
            }
        }
        }
    },
    created(){
        console.log("component prod item created")
    },
    // mounted(){
    //     console.log("component prod item mounted")
    // },
    updated(){
        console.log("component prod item updated")
    }
}
</script>
<style scoped>

</style>