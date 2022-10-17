import axios from 'axios';

const ApiManager = axios.create({
  baseURL:'http://10.0.2.2:8000/login/',
  
  
  // responseType: 'json',9@
  // withCredentials: true,
});


export default ApiManager;