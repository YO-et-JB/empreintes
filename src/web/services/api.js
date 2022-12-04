import axios from "axios"
//import config from "@/config.js"

// create the Axios Instance cf. https://axios-http.com/docs/instance

const api = axios.create({
  baseURL: "/api",
  withCredentials: false,
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  },
})
export default api

/*const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
  config.api.baseUrl,
})
export default api */
