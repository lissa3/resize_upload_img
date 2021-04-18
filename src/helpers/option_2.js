// https://github.com/axios/axios/issues/2203 = отмена and other complex features

axios.interceptors.response.use(
    async (response) => { return response },
    async (error) => {
      const originalRequest = error.config
      const serverCallUrl = new URL(originalRequest.url)
      const status = error.response.status
  
      if (
        (status === 401 || status === 403) &&
        !originalRequest._retry &&
        !serverCallUrl.pathname.includes('/auth')
      ) {
        let token = await refreshAccessToken()
        setAccessToken(token)
  
        originalRequest._retry = true
        originalRequest.headers.authorization = `Bearer ${token}`
  
        return axios(originalRequest)
      }
  
      return Promise.reject(error)
    })