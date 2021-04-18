<template>
<div class="main">
    <h3>I am a Train Two</h3>
    <div class="search-bar">
        <label >Search member:
            <input v-model="term" type="text" @keydown.enter="checkInput">
        </label>
    </div>
    <div v-if="termToFind" class="search-result">
        <div v-if="found" class="display-result">
            <p>Found {{found}}</p>
            <div v-for="res in result" :key="res.id">
                <p>{{res.name}}, age: {{res.age}}</p>
            </div>
        </div>
        <div v-if="!found" class="display-result">
            Nothing found
        </div>
    </div>
    <div class="coach">        
        <div class="repr">
            <img src="@/assets/img/geit.jpg" alt="geit" class="geit">
            <h3>Coach everybody</h3>
            <h4>100% success</h4>
        <h5>Teamleader: {{getFullName}}</h5>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quibusdam repudiandae suscipit amet, a, sequi obcaecati alias voluptate minus blanditiis, exercitationem qui sint voluptas recusandae! Fugiat, maiores. Nesciunt, ut adipisci.
            Reiciendis repudiandae atque animi, ut esse in, aperiam tenetur alias explicabo quod nostrum aspernatur laudantium, enim delectus corrupti! Temporibus alias magni perspiciatis at provident animi, saepe nostrum explicabo nemo enim!
            s nihil porro maiores natus similique vero? Modi, illum alias!
            Aspernatur debitis sint iste quos, sapiente non ratione rem aliquid fugiat dolorem quia possimus autem distinctio iure esse ex quidem. Harum porro, cupiditate odit adipisci error corporis impedit in quasi.
            Nostrum, dicta odio. Sapiente itaque dolorum eveniet, laudantium saepe aspernatur dicta illum quibusdam aliquam enim, odio cupiditate laboriosam ipsam. Laborum voluptatibus, voluptatem praesentium pariatur commodi reiciendis aliquid hic minus animi.
            <p>Current page: {{currentPage}} Total pages: {{pages}}</p>
        </div>
        <!-- <p>Amount of participators are limited! </p>
        <p>Now {{getTotalParticipants}}</p>
        <hr>
        <p><strong>Please, assign here:</strong> </p> -->
    </div>
    <!-- <div>
        <ul>Now already here:
            <li v-for="(person,index) in participants" :key="index">
                Name: {{person.name}} | Age {{person.age}}
            </li>
        </ul>
    </div> -->
    <div class="showPeople">
        <button class="back" @click="currentPage--">Previous</button>
        <!-- go through all pages: display index(here page == num); let op: it starts with 1 NOT zero-->
        <div v-for="page in pages" :key="page.index">
               <div class="page-wrapper" @click="currentPage=page">
                   <span class="one-page"> {{page}}</span>
                </div>   
                   
        </div>
        <button class="forward" @click="currentPage++">Next</button>
        
    </div>

</div>

</template>

<script>
export default {
    name:'Two',
    data(){
        return{
            coachFirstName:'Zoo',
            coachLastName:'Fun',
            participants:[
                {name:'Helen',age:34},
                {name:'Nick',age:54},
                {name:'Laila',age:45}
            ],
            pages:3,
            currentPage:1,
            term:'',
            termToFind:false,
            found:false,
            searchResult:[]

        }
    },
    watch:{
        currentPage(newVal,oldVal){
            console.log("old: ",oldVal,"new: ",newVal);
            this.loadUserPages(newVal)
        }
    },
    methods:{
        loadUserPages(page){
            console.log(`calling api to fetch info for ${page}`);
        }, 
        checkInput(){
             if(this.term.length>0){
                 console.log("term for search detected",this.term);
                 this.termToFind = true;
                 if(this.result.length>0){
                     this.found = true;
                     console.log(this.result)
                     console.log("found a match")
                     
                 }else{
                     console.log("match not found")
                 }
             }
             this.term = ''
        }      
        
    },
    computed:{
        getFullName(){
            return `${this.coachFirstName} ${this.coachLastName}`.toUpperCase()
        },
        getTotalParticipants(){
            return this.participants.length
        },
        result(){               
            return this.participants.filter((person)=>{return person.name.toLowerCase() === this.term.toLowerCase();
                })
                         
        }
        
    }  
    
    
}
</script>
<style>
.coach{
    max-width: 70%;
    padding:1rem;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

}
.geit{
    width:300px;
    float:left;
    margin: 0.5rem 1rem 0.5rem 0;
}
.repr{
    text-align: left;
}
.showPeople{
    display: flex;
    flex-wrap: wrap;
}
.page-wrapper{
    border-radius: 50%;
    border:1px solid black;
    cursor: pointer;
}
.one-page{
    padding:10px;
    width:30px;
    height: 30px;
}

input[type=text]{
    border: 1px solid black;
    padding:10px;
    max-width: 80%;
    border-radius: 5px;
    margin: 0 1rem;
    
}

</style>
