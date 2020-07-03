import axios from 'axios'

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL + '/api',
  withCredentials: true
}) 

http.interceptors.response.use( (response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

export default http