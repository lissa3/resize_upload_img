import store from "../store";
import axios from "axios";

const getAPI = axios.create({
  baseUrl:'http://127.0.0.1:8000' 
  
});

getAPI.interceptors.request.use(
  function (config) {
    // unpacking object config (config.url,config.headers ect)
    // to unpack and user it's attrs to manipulation
    // here header['Atu...n'] = ..., or conditional check for url
    const { url, headers } = config;
    const { access_token } = store.state.auth;
    if (url.startsWith("/api/v1") && !url.startsWith("/api/v1/auth")) {
      headers["Authorization"] = `JWT ${access_token} `;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default getAPI;

