import axios from "axios"

const api = axios.create({
  baseURL: process.env.NEXTAUTH_URL + "/api",
  timeout: 10000,
})

export default api
