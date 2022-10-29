import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React, {useState, useEffect} from 'react';
import Person from 'react-native-vector-icons/Ionicons';
import Heart from 'react-native-vector-icons/Entypo';
import Right from 'react-native-vector-icons/Entypo';
import Data_P from '../Profile/Data_P';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary } from 'react-native-image-picker';




const options={
  
  title: 'Select Image',
  type: 'library',
  options: {
    selectionLimit: 0,
    mediaType: 'photo',
    includeBase64: false,
  },
  
}
const Box_P = props => {
  const {navigation, route} = props;

  const [blog, setBlog] = useState([]);
  const [images, setImages] = useState('');

  const postUser = async () => {
    let parsed = await AsyncStorage.getItem('resp');

    let tokens = JSON.parse(parsed);

    const token = tokens.access;
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
      'http://35.90.113.221/user_profile_pic/',

      requestOptions,
    ).then(resp => {
      resp.json().then(resp => {
        console.log('image pic', resp);
        setBlog(resp);
      });
    });
  };
  useEffect(() => {
    postUser();
  }, []);


  // const open =async () => {
  //   const imagesss = await launchImageLibrary(options)
   
  //       setUri(imagesss.assets);
        
        
  //   setImages(imagesss);
  // //  console.log(imagesss.assets[0])
   
  
  // }
  const profileUpdate=async () => {
    const images = await launchImageLibrary(options)
    // setImages(images);
    console.log(images.assets[0]);
   let parsed = await AsyncStorage.getItem('resp');  
            let tokens = JSON.parse(parsed);
          const token=tokens.access
  let userparsed = await AsyncStorage.getItem('response');  
         let users = JSON.parse(userparsed); 
         const user=users[0].user
   const formdata= new FormData()
   formdata.append('images', 
   {
     uri:images.assets[0].uri,
     type:images.assets[0].type,
     name:images.assets[0].fileName
  
   })
   formdata.append('user',user)
   let res = await fetch(
     `http://35.90.113.221/user_profile_pic_update/${user}/`,
     {
       method: 'PUT',
       body: formdata,
       headers: {
         'Content-Type': 'multipart/form-data',
       Authorization:  `Bearer ${token}`
       },
     }
   );
   let responseJson = await res.json();
   console.log("responseJson",responseJson)
   if (responseJson.user) {
  
            // alert("successful post");
          
           
          }
            else{
              // alert("filled all the fields");
            }              
        
  
   }
  return (
    <View
      style={{
        width: wp('90%'),
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: '8%',
        elevation: 5,
      }}>
      <FlatList
        style={{width: 400}}
        data={blog}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <View>
            <ImageBackground
              source={{uri: 'http://35.90.113.221' + item.backgound_image}}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '4%',
                width: wp('90%'),
                height: hp('30%'),
                opacity: 150,
              }}>
              <TouchableOpacity onPress={()=>profileUpdate()}>
                <Image
                  source={{uri: 'http://35.90.113.221' + item.images}}
                  style={{
                    height: hp('25%'),
                    width: wp('45%'),
                    borderRadius: 100,
                    borderColor: 'white',
                    borderWidth: wp('.5%'),
                    marginTop: '8%',
                  }}
                />
              </TouchableOpacity>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                {item.user}
              </Text>
              <Text
                style={{color: '#C4C4C4', fontWeight: 'bold', fontSize: 15}}>
                {props.pos}
              </Text>
            </ImageBackground>

            <View
              style={{
                flexDirection: 'row',
                marginTop: '4%',
                marginBottom: '4%',
              }}>
              <View
                style={{
                  width: wp('40%'),
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Person
                  style={{
                    backgroundColor: '#637381',
                    borderRadius: 5,
                  }}
                  size={18}
                  name="person"
                  color="white"
                />
                <TouchableOpacity style={{marginLeft: '4%'}}>
                  <Text style={{color: '#637381'}}>Profile</Text>
                </TouchableOpacity>
              </View>
              <View style={{width: wp('40%'), flexDirection: 'row'}}>
                <Heart size={18} name="heart" color="#637381" />
                <TouchableOpacity style={{marginLeft: '4%'}}>
                  <Text style={{color: '#637381'}}>Followers</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={{}}>
                <Right size={18} name="chevron-right" color="#637381" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default Box_P;
