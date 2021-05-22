import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import UserRoot from '@/components/UserManagement/UserRoot.vue'
import ColorRoot from '@/components/colorPicker/ColorRoot.vue'
import One from '@/components/inputs/TrainOne.vue'
import Two from '@/components/TrainTwo.vue'
import MultiUpload from '@/components/img/MultiUploads.vue'
import PhotoForm from '@/components/img/FormImage.vue'
import PhotoFormCrop from '@/components/img/FormImgCrop.vue'
import Watch from '@/components/Watch.vue'
import InputSpy from '@/components/inputs/InputSpy.vue'
import ProdList from '@/components/prods/ProdList.vue'
// input plus
import Parent from '@/components/VmodelComp/Parent.vue'
import Login from '@/components/Auth/Login.vue'
// stars
import MyStar from '@/components/Stars/RootStar.vue'


Vue.use(VueRouter)

const routes = [  
  {
    path: '/give-star',
    name: 'MyStar',
    component: MyStar
  },
  {
    path: '/user-management',
    name: 'UserRoot',
    component: UserRoot
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/color-root',
    name: 'ColorRoot',
    component: ColorRoot
  },
  {
    path: '/problem-vmod',
    name: 'Parent',
    component: Parent
  },
  {
    path: '/prod-list',
    name: 'ProdList',
    component: ProdList
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
  path:'/input-spy',
  name:'InputSpy',
  component:InputSpy
  },
  {
  path:'/one',
  name:'One',
  component:One
  },
  {
  path:'/watch',
  name:'Watch',
  component:Watch
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
