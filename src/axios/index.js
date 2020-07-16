import axios from 'axios'

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL + '/api',
  withCredentials: true
}) 

http.interceptors.response.use( (response) => {
  return response
}, (error) => {
  console.log('error', error.response)
  alert(error.response ? error.response.data.error : error.message)
  return Promise.reject(error)
})

export default http