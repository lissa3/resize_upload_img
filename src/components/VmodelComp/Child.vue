<template>
    <div>
        <p>I'm a child component got props:{{mytitle}}</p>        
        <!-- <form @submit.prevent="onSubmit" class="mb-2 mt-2"> -->
        <div>            
            <p>Lets make an input with props from the parent</p>
            <input type="text"  
            @change="childInfo"
            :value="mytitle"
            :class="$v.$error?'red':''"
            @blur = "$v.mytitle.$touch()"                     
            >
        </div>
        <p v-if="nameErrs">{{nameErrs}}</p>
        <p>from parent props: {{mytitle}}</p>
        <hr>
        <p>без прописи blur-touch не будет triggered general $error ($invalid && $dirty</p>
        <p>Compare:</p>
        <p>$v.$error is {{$v.$error}}</p>
        <p>$v.@invalid is {{$v.$invalid}}</p>
       <p>nameErrs: {{nameErrs}}</p>

        <!-- <button type="submit" class="btn btn-success bt-sm mt-1" :disabled="$v.$invalid && $v.$error">Send</button>
        </form>  -->
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength } from 'vuelidate/lib/validators'
export default {
    name:"Child",
    props:['mytitle'],
    mixins:[validationMixin],
     data(){
         return {
            
            titleErr:"" 
         }
    },     
    validations:{
        mytitle:{ required,minLength:minLength(4)}
    },
    computed:{ 
        nameErrs(){              
           const errs = [];
           if(this.$v.mytitle.$invalid&&this.$v.mytitle.$dirty){
               errs.push("Title error ")
           }
           if(this.$v.mytitle.$invalid&&this.$v.mytitle.$dirty){
               errs.push("Can not be empty")
           }
           if(this.$v.error){
               errs.push("general")
           }
        //    if(!this.$v.mytitle.required&&this.$v.mytitle.$dirty)errs.push("Title is required");
        //    if(!this.$v.mytitle.miLength&&this.$.mytitle.$dirty)errs.push("Title should be > 4 chars");
           return errs;
       },
     },
    methods:{
        childInfo(evt){
            // touch will tranf all dirty to true
            this.$v.$touch() 
            console.log("general error",this.$v.$error);
            
            return this.$emit('childInfo',{title:evt.target.value,status:this.$v.$error});
        },
        
    },
    
    
}
/*
### @input: nputEvent {isTrusted: true, data: "3", isComposing: false, inputType: "insertText", dataTransfer: null, …}
будет каждый знак на клик вписывать в data
### refs будет снимать весь ввод целиком
### @change будет triggered,когда юзер уже вышел из поля, что скорее всего мне и нужно
*/
// getData(){
        //     if(this.$refs.mytitle.value.length ===3){
        //         console.log("len:",this.$refs.mytitle.value.title)
        //         return true
        //     }else{
        //         console.log("len:",this.$refs.mytitle.value.title)
        //         return false
        //     }
        // }
</script>
<style scoped>
.red{
    border-color: crimson;
}
.green{
    color:green;
}
</style>