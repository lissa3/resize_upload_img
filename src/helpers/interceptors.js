import axios from "axios";
import store from "../store";
import router from "../router";

export default function axiosSetup(){
    axios.defaults.baseURl = "<http://127.0.0.1/api/>";
    axios.interceptors.request.use(
        function(config){
            const token = store.getters.accessToken;
            if(token){
                config.headers.Authorixation = `JWT ${token}`
            }
            return config
        },
        function(error){
            return Promise.reject(error)
        }
    );
    //resp
    axios.interceptors.response.use(
        // OK
        function(resp){
            return resp;
        },
        // smth went wrong
        async function(error){
            const originalRequest = error.config;
            if(error.response.status ===401&&originalRequest.url.inludes("auth/jwt/refresh")){
                store.commit("clearUserData");
                router.push("/login");
                return Promise.reject(error)
            }else if(error.response.status ===401&&!originalRequest._retry){
                originalRequest._retry = true;
                await store.dispatch("refreshToken");
                return axios(originalRequest)
            }
            return Promise.reject(error);   
            

        }
    )
}
