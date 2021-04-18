import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import router from "../router";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[createPersistedState],
  state: {
    refresh_token:"",
    access_token:"",
    loggedInUser:{},
    isAuthenticated:false
  },
  getters:{
    loggedInUser: state => state.loggedInUser,
    isAuthenticated: state => state.isAuthenticated,
    accessToken: state => state.access_token,
    refreshToken: state => state.refresh_token
  },
  mutations: {
    setRefreshToken:function(state,refreshToken){
      state.refresh_token = refreshToken
    },
    setAccessToken:function(state,accessToken){
      state.access_token = accessToken
    },
    setLoggedInUser:function(state,user){
      state.loggedInUser = user;
      state.isAuthenticated = true;
    },
    clearUserData:function(state){
      state.refresh_token = "";
      state.access_token ="";
      state.loggedInUser = {};
      state.isAuthenticated = false;
    }
  },
  actions: {
    logIn:async({commit,dispatch},payload)=>{
      const loginUrl = "v1/jwt/create/"
      try{
        await axios.post(loginUrl,payload)
        .then((resp)=>{
          if(resp.status ===200){
            commit("setRefreshToken",resp.data.refresh)
            commit("setAccessToken",resp.data.access)
            dispatch("fetchuser")
            router.push({name:"Home"})
          }
        })
      }catch(err){
        console.log("err",err)
      }
    },
    refreshToken:async({state,commit})=>{
      const refreshUrl = "v1/auth/jwt/refresh/";    
    try{
      await axios.post (refreshToken,{refresh:state.refresh_token})
      .then((resp)=>{
        if(resp.status === 200){
          commit("setAccessToken",resp.data.access);
        }
      })
    }
    catch(err){
      console.log(err.response)
    }
  },
  fetchUser:async({commit})=>{
    const currentUserurl = "v1/auth/users/me/";
    try{
      await axios.get(currentUserurl)
      .then((resp)=>{
        if(resp.status === 200){
          commit("setLoggedInUser",resp.data)
        }
      })
    }catch(err){
      console.log(err.response)
    }
  }
  },
  modules: {
  }
})
