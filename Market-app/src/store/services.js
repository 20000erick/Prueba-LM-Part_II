/* eslint-disable new-cap */
import Axios from 'axios'
import exampleService from '../services/ExampleService'

// Axios Configuration
Axios.defaults.headers.common.Accept = 'application/json'

export default {
    // eslint-disable-next-line indent
    exampleService: new exampleService(Axios)
}