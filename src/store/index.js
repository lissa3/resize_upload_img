import Vue from 'vue'
import Vuex from 'vuex'
// import router from "../router";
import auth from './auth'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie';

Vue.use(Vuex)

export default new Vuex.Store({  
  modules: {
      auth
  },
  plugins:[
    createPersistedState({
      key:'hm',
      paths:["auth"],
      // or use dot notation for nested module items
      storage:{
        getItem: (key) => {
          // See https://nuxtjs.org/guide/plugins/#using-process-flags
          if (process.server) {
              const parsedCookies = cookie.parse(req.headers.cookie);
              return parsedCookies[key];
          } else {
              return Cookies.get(key);
          }
      },
      // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
      setItem: (key, value) =>
          Cookies.set(key, value, { expires: 365, secure: false }),
      removeItem: key => Cookies.remove(key)
      }
    })
  ]
})
