import axios from 'axios';

const ApiManager = axios.create({
  baseURL:'http://35.90.113.221/login/',
  
  
  // responseType: 'json',9@
  // withCredentials: true,
});


export default ApiManager;