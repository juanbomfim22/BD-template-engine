
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://bd-final-backend.herokuapp.com',
})

export { api }