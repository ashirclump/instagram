import {View, Text, StyleSheet, Image, TouchableOpacity,FlatList} from 'react-native';
import React ,{useState,useEffect} from 'react';
import Commenting from 'react-native-vector-icons/FontAwesome';
import Share from 'react-native-vector-icons/Entypo';
import Eye from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
// This is our post component only not screen

const Blog_Post = (props) => {
  const [blog, setBlog] = useState([]);
      useEffect(() => {
      postUser();
    }, []);
  
  const postUser =async ()=> {
    // const Token = await AsyncStorage.getItem('user');
    //   const token = await AsyncStorage.getItem('access');
    //      const user= dataToken;
    //      const dataToken = await AsyncStorage.getItem('token');
         let parsed = await AsyncStorage.getItem('resp');  
         let users = JSON.parse(parsed);  
         let tokens = JSON.parse(parsed);
         const user=users.id
         const token=tokens.access
         console.log("user",token) 
              
        //  console.log("link token", dataToken);
   const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`, 
        
    },
      
    };

    fetch(
      // 'http://35.88.83.10/blog_view/',
      'http://35.90.113.221/blog_view/',

      requestOptions,
    ).then(resp => {
      resp.json().then(resp => {
        console.log("postdetailss",resp);
        setBlog(resp);
        // if (resp.user[100]) {
        //   postUser(resp);
        // }
      });
    });
  }


  return (
    <View style={{  marginBottom:'15%',}}>
    <FlatList
    style={{ width: "100%"}}
   
    data={blog}
    
    keyExtractor={item => item.user}
    // listKey="YourListName"
    renderItem={({item}) => 
    
    <View style={styles.main1}>
    <TouchableOpacity  onPress={() => props.navigation.navigate("PostDetail")}>
    <Image
        style={{
          width: '100%',
          height: 280,
          margin:10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        
        }}
        // source={require('../../Images/market.jpg')}
        source={{uri:item.images}}
      /></TouchableOpacity>  
      <Text style={{color: '#919EAB', marginTop: '10%', marginLeft: '5%'}}>
        {item.created_date}
      </Text>
      <Text style={{color: 'black', marginTop: '3%', marginLeft: '5%'}}>
        {item.blog_name}
      </Text>
      <Text style={{color: 'black', marginTop: '3%', marginLeft: '5%'}}>
        {item.tag_name}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginLeft: '40%',
          marginTop: '5%',
          
        }}>
        <TouchableOpacity style={{}}>
          <Commenting name="commenting" size={15} color="#637381" />
        </TouchableOpacity>
        <Text>6.14k</Text>
        <TouchableOpacity style={{}}>
          <Eye name="eye-sharp" size={15} color="#7E8B98" solid />
        </TouchableOpacity>
        <Text>9.62k</Text>
        <TouchableOpacity style={{}}>
          <Share name="share" size={15} color="#7E8B98" solid />
        </TouchableOpacity>
        <Text>1.9k</Text>
      </View>
      </View>
    }
    />
    </View>
  );
};

export default Blog_Post;

const styles = StyleSheet.create({
  main1: {
    backgroundColor: 'white',
    width: '100%',
    marginTop: 10,
    elevation: 1,
    marginBottom:'15%',
    borderRadius: 20,
  },
});
