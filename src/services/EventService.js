import axios from 'axios'

const apiClient = axios.create({
  // We do not use this server, it doesen't provide update capabilities
  // baseURL: 'https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router',
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
  postEvent(event) {
    return apiClient.post('/events', event)
  }
}
