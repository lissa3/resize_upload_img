import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import One from '@/components/TrainOne.vue'
import Two from '@/components/TrainTwo.vue'
import MultiUpload from '@/components/MultiUploads.vue'
import PhotoForm from '@/components/FormImage.vue'
import PhotoFormCrop from '@/components/FormImgCrop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
  path:'/one',
  name:'One',
  component:One
  },
  {
  path:'/two',
  name:'Two',
  component:Two
  },
  {
  path:'/multi-photo',
  name:'MultiUpload',
  component:MultiUpload
  },
  {path:'/photo-form',
  name:'PhotoForm',
  component:PhotoForm
  },
  {path:'/photo-form-crop',
  name:'PhotoFormCrop',
  component:PhotoFormCrop
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
