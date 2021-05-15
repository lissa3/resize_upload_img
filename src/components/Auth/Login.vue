<template>
    <div class="container-fluid">
        <h1>
            I'm a login component
        </h1>
        <b-form >
        <b-form-group
        id="input-group-2"
        label="Name:"
        label-for="input-2" 
        class="mt-1"
               
      >
        <b-form-input
          id="input-2"
          v-model="form.name"
          type="text"
          :error-msg="$v.$error?nameErrs:[]"            
          
        ></b-form-input>
      </b-form-group>
      <div class="mywarning">
        <p err="$v.$error?nameErrs:[]">

        </p>
      </div>

      <b-form-group
        id="input-group-3"
        label="Psw:"
        label-for="input-3"        
      >
        <b-form-input
          id="input-3"
          v-model="form.psw"
          type="password"
          :error-msg="$v.$error?pswErrs:[]"  
          
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="psw2:"
        label-for="input-4"
        
      >
        <b-form-input
          id="input-4"
          v-model="form.psw2"
          type="password"          
          :error-msg="$v.$error?psw2Errs:[]"  
        ></b-form-input>
        <!-- option N2(Vl.Minin) https://www.youtube.com/watch?v=dGDUtEHa9Ng
         $dirty (system var)
        in input: :class="{red:($v.psw2.$dirty&&!$v.psw2.required)}"
         -->
      </b-form-group>
      <b-form-group
      class="mt-1"
        id="input-group-15"
        label="Url:"
        label-for="input-15">     
         <b-form-input
          id="input-15"
          v-model="form.url"
          type="text"          
          
        ></b-form-input>
      </b-form-group>

      <!-- checkbox -->

      <div class="form-droup mt-2">
        <div class="col col-md-4">
            <b-form-checkbox id="checkbox-1" v-model="form.hasWebsite" name="checkbox-1">         
            </b-form-checkbox>           
        </div>  
        <div class="col col-md-8">
        <b-form-input
          id="input-5"
          v-model="form.site2"
          type="text" 
          :error-msg="$v.$error?webSiteErrs:[]"         
          
        ></b-form-input>
        
    </div> 
    </div>  
     <!-- валидность это отрицание НЕвалидности  -->
    <b-button type="submit" variant="success"
      @click="onSubmit"  

      :disabled="$v.$invalid && $v.$error">Submit</b-button>

    </b-form>        
      
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength, sameAs, requiredIf, url } from 'vuelidate/lib/validators'
// vuelidate doesn't have validators below|=> need to create them self
import { hasUppercase, hasLowercase, hasSpecialChars } from './validFunc'



export default {
    name:"Login",
    mixins:[validationMixin],
    validations:[],
    data(){
        return {
            form:{
                name:"",                
                psw:"",
                psw2:"",
                hasWebsite:false,
                site:"",
                site2:"", 
                hasWebsite:false               
            },
            
        }
    },
    methods:{
        onSubmit(){
            console.log("submitting the form");
            this.$v.$touch();// transform dirty into true AND error as well
            console.log("form is valid?",this.$v.$invalid)
            if(!this.$v.$invalid){
              // alert(this.form)
              alert(JSON.stringify(this.form))
            }
        }
    },
    validations:{
        form: {
            name: {
            required,
            minLength: minLength(2),
            },
            psw: {
            required,
            minLength:minLength(4),
            sameAs: sameAs('psw2'),
            // hasLowercase,
            // hasUppercase,
            // hasSpecialChars,
            },
            psw2: {
            required,
            hasLowercase,
            hasUppercase,
            hasSpecialChars,
            },
            site: {
            requiredIf: requiredIf(form => form.hasWebsite),
            url,
            },
            site2: {
            requiredIf: requiredIf(form => form.hasWebsite),
            url,
            }
            // attr = hasWebsite no need to validate
      }
    },
    computed:{
       nameErrs(){
           const errs = [];
           if(!this.$v.form.name.required)errs.push("Name is required");
           if(!this.$v.form.name.miLength)errs.push("Name should be >2 chars");
           return errs;
       },
       pswErrs(){
           const errs=[];
           if(!this.$v.form.psw.required) errs.push("Psw required");
           if(!this.$v.form.psw.minLength) errs.push("Psw should be > 4 chars");
           if(!this.$v.form.psw.sameAs) errs.push("No match psw's");
           if (!this.$v.form.psw.hasUppercase) errs.push('Upper register needed.')
          if (!this.$v.form.psw.hasLowercase) errs.push('lowe register needed.')
          if (!this.$v.form.psw.hasSpecialChars) errs.push('special chars needed ($%#).')
            return errs;
       },
       psw2Errs(){
           const errs=[];
           if(!this.$v.form.psw2.required)errs.push("Confirm psw required");
           if(!this.$v.form.psw2.sameAs) errs.push("No match psw's")
           return errs;
       },
       webSiteErrs(){
           const errs=[];
           /* requiredIf: юзер кликнул по checkbox (have site)|=> тогда мы валидируем его url */
           if(!this.$v.form.site.requiredIf)errs.push("Info required");
           if(!this.$v.form.site.url)errs.push('Url not valid')
           return errs
       }
    }
    
}
</script>