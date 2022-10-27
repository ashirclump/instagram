import ApiManager from './ApiManger';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const user_login = async data => {
  // let parsed = await AsyncStorage.getItem('resp');  
  // let users = JSON.parse(parsed);  
  // let tokens = JSON.parse(parsed);
  // // const user=users.id
  // const token=tokens.access
  try {
    const result = await ApiManager( {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        // Accept: 'application/json',
        
        // Authorization: `Bearer ${token}`,
      },
      
      data: data,
     
    });
    return result;
   
  } catch (error) {
    return error.response;
    
  }
};