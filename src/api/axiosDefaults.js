import axios from "axios";

axios.defaults.baseURL = 'https://codestar100-1ca13721cbe6.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true