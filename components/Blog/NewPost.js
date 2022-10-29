
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Button,
  Switch,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../Header';
import Heading1 from '../Profile/Heading1';
import Data_P from '../Profile/Data_P';
import Underline from 'react-native-vector-icons/Feather';
import List from 'react-native-vector-icons/FontAwesome';
import Change from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Input_2 from '../Input_2';
import Input from '../Input';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import { DocumentPickerOptions } from 'react-native-document-picker';
 
 
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
  const NewPost = props => {
    const {navigation, route} = props;
  const [post_name, onChangePost] = useState('');
  const [tag_name, onChangeDes] = useState('');
  const [post_content, onChangeCon] = useState('');
  const [post_header, onChangeMeta] = useState('');
  const [Fname, onChangeFname] = useState('');
  const [blog_name, onChangeLname] = useState('');
  // const [user,onChangeUser] = useState(10);
  const [users,onChangeUsers] = useState('');
  const [uri, setUri] = useState("");
  const [images, setImages] = useState('');
  // const [user, setUser] = useState(`${props.route.params.id}`);
  // const [images, setImages] = useState({
  //   uri: `data:${image};base64,${image}`,
  // });
  // const [Mypic, setMypic] = useState({uri: `data:${image.mime};base64,${image.data}`});
 
const open =async () => {
  const imagesss = await launchImageLibrary(options)
 
      setUri(imagesss.assets);
      
      
  setImages(imagesss);
//  console.log(imagesss.assets[0])
 

}
const postUser=async () => {
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
 formdata.append('user',user),
 formdata.append('blog_name',blog_name),
 formdata.append('tag_name',tag_name)
 let res = await fetch(
   'http://35.90.113.221/create_blog/',
   {
     method: 'post',
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
        
          navigation.navigate('Posts');
        }
          else{
            // alert("filled all the fields");
          }              
      

 }


  // const [images, setImages] = useState(props.source?.images || undefined);
//   const openPicker = () => {
//     ImagePicker.openPicker({
//       // width: 300,
//       // height: 300,
//       // cropping: true,
//       includeBase64: true
//     }).then(image => {
//       setUri(image.path);
//       // setMypic(image);
//       setImages(image.path);
//       console.log(image.path);
//       props.onChange?.(image);
//     });
// };
  



  const Toggle = props => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
      <View style={{flexDirection: 'row', marginRight: '3%'}}>
        <Text
          style={{
            color: '#212B36',
            fontSize: 15,
            marginTop: '5%',
            marginLeft: '3%',
            // marginRight: '43%',
          }}>
          {props.text}
        </Text>
        <Switch
          trackColor={{false: '#F45CA5', true: '#F45CA5'}}
          thumbColor={isEnabled ? '#c34984' : '#c34984'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{
            marginLeft: '50%',
            marginTop: '4%',
          }}
        />
      </View>
    );
  };
 return (
    
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: '5%'}}>
          <Header />
          <Heading1
            sName={Data_P[1].sName}
            h1={Data_P[1].h1}
            userName={Data_P[1].userName}
          />

          <View style={styles.input}>
            <Input_2
              title="# Post"
              vale={tag_name}
              changed={onChangeDes}
              
            />
            <Input place="Description" change={onChangeLname} val={blog_name} />
              <Text style={styles.title}>Content</Text>
            <View
              style={{
                backgroundColor: 'white',
                width: wp('85%'),
                marginTop: '5%',
                // marginLeft: '3%',
                height: hp('35%'),
                borderRadius: 10,
                borderWidth: 1.5,
                borderColor: '#ECECEC',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Text style={{fontSize: 20, color: 'black'}}>Normal B</Text>
                <Underline size={25} name="underline" color="black" solid />
                <Underline size={25} name="italic" color="black" solid />
                <List size={25} name="list-ul" color="black" solid />
                <List size={25} name="list-ul" color="green" solid />
                <List size={25} name="list-ol" color="black" solid />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginTop: '2%',
                }}>
                <List size={25} name="list-ol" color="green" solid />
                <Change size={25} name="image" color="black" solid />
                <Icon size={25} name="format-clear" color="black" solid />

                <Icon size={25} name="theaters" color="black" solid />
                <List size={25} name="link" color="black" solid />
              </View>

              <View style={styles.hairline} />
              <TextInput
                multiline={true}
                onChangeText={onChangeCon}
                value={post_content}
              />
            </View>
            <Text style={styles.title}> Cover </Text>
            <View
              style={{
                backgroundColor: '#F7F8FA',
                width: wp('85%'),
                marginTop: '5%',
                // marginLeft: '3%',
                height: hp('45%'),
                borderRadius: 10,
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <ImageBackground
                  source={require('../../Images/Drag.png')}
                  style={styles.default}
                  ></ImageBackground>
                <ImageBackground
                  // source={require('../../Images/Drag.png')}
                  style={styles.avatar}
                  
                    source={uri}
                   
                  ></ImageBackground>
              </View>
              <View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    marginTop: '5%',
                    marginLeft: '3%',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  Drop or Select File
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    // marginTop: '5%',
                    marginLeft: '8%',
                    alignSelf: 'center',
                  }}>
                  Drop Files here or
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    alignSelf: 'center',
                    marginHorizontal: '1%',
                  }}>
                  click here to
                  <TouchableOpacity 
                  style={{fontSize: 15,marginTop:2}}
                  onPress={open}>
                  <Text
                    style={{color: '#F45CA5', textDecorationLine: 'underline',fontSize: 15}}>
                     browse 
                  </Text>
                  </TouchableOpacity>
                  through your machine
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.input}>
            <Toggle text="Publish                    " />

            <Toggle text="Enable Comments" />

            <View
              style={{
                margin: 5,
                justifyContent: 'space-evenly',
                flexDirection: 'column',
              }}>
              <Input_2 title="Tags" whi={styles.new} changed={onChangeFname} val={Fname} />
              <Input_2 title="Meta Title" changed={onChangePost} val={post_name}/>
              <Input
                place="Meta Description"
                change={onChangeMeta}
                val={post_header}
              />
              <Input_2 title="Meta Keyword" changed={onChangeUsers} val={users}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={[styles.btn, {backgroundColor: 'white'}]}>
                <Text style={[styles.texts, {color: 'black'}]}>Preview</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btn, {backgroundColor: '#F45CA5'}]}
                onPress={() => postUser()}
                  // navigation.navigate('Posts');
                  >
                <Text style={[styles.texts, {color: 'white'}]}>Post</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    width: wp('90%'),
    padding: '2%',
    marginTop: '8%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#F7F8FA',
    bottom: 10,
  },

  input1: {
    borderColor: 'black',
    borderRadius: 10,
    marginLeft: '3%',
    height: hp('7.7%'),
    fontSize: 15,
    width: wp('75%'),
    borderWidth: 1,
    borderColor: '#ECECEC',
  },
  hairline: {
    marginTop: '1%',
    backgroundColor: '#A2A2A2',
    height: hp('0.2%'),
    width: wp('75%'),
  },
  btn: {
    height: hp('8%'),
    width: wp('40%'),

    borderRadius: 15,
    alignItems: 'center',
    // alignContent:'center',
    alignSelf: 'center',
    marginRight: '6%',
    marginTop: '5%',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#ECECEC',
  },
  texts: {
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  title: {
    color: '#6C7B88',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: '5%',
    marginLeft: '3%',
  },
  container: {
    marginLeft: '80%',

    // alignSelf:'flex-end'
  },
  avatar: {
    height: 150,
    width: '95%',
    borderRadius: '24%',
    justifyContent: 'center',
    marginTop: '4%',
    // marginBottom: 20,
    alignContent: 'center',
    alignSelf: 'center',
     marginLeft:15
   
  },
  default: {
    height: 110,
    width: 110,
    justifyContent: 'center',
    borderRadius: 80,
    marginBottom: 20,
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: '4%',
    opacity: 150,
    
    position:'absolute'
    
  },
});
export default NewPost;

 

// const postUser =async ()=> {
//   const handleSubmit = async(e) => {
//        let parsed = await AsyncStorage.getItem('resp');  
//        let users = JSON.parse(parsed);  
//       //  console.log("neweeeee",parsed)
//        let tokens = JSON.parse(parsed);
//        const user=99
//        const token=tokens.access
//       //  console.log("iddddddd",user)
//       //  console.log(token)


      

//   // e.preventDefault();
//   // console.log(this.state);
//   let form_data = new FormData();
//   form_data.append('images', images);
//   form_data.append('title', blog_name);
//   form_data.append('content', tag_name);
//   form_data.append('user', user);
//    console.log("iddddddd",user)
//   let url = 'http://35.90.113.221/create_blog/';
//   axios.post(url, form_data, {
//     headers: {
//       'content-type': 'multipart/form-data',
//       Accept: 'application/json',
//       Authorization:  `Bearer ${token}`
//     }
//   })
//       .then(res => {
//         console.log(res.data);
//       })
//       .catch(err => console.log(err))
// };
      
//   const item ={post_name,
//     tag_name,
//     blog_name,
//     user,
//     images,
//     post_header,
//     post_content,
//     };
//     // console.log(item);
//     let form_data = new FormData();
//     if (images)
//         form_data.append("image_url", images);
//     form_data.append("title", blog_name);
//     form_data.append("description",tag_name);
//     form_data.append("category", user);
//       console.log("iddddddeeed",user)
//     // form_data.append("start_bid", data.start_bid);
//     // form_data.append("is_active", true);
//   const requestOptions = {
//     method: 'POST',
//     redirect: 'follow',

//     headers: {
//       'Content-Type': 'application/json;',
//           Accept: 'application/json',
//       Authorization:  `Bearer ${token}`},
   
   
//     body: JSON.stringify (form_data)
//   };

//   fetch(
   
//   'http://35.90.113.221/create_blog/',
//   // 'http://35.90.113.221/register/',
//     requestOptions,
//   )
//     .then(result => result.json())
//     .then(resp => {
//       console.log('newpost ', resp)
//       if (resp.user) {

//         alert("successful post");
      
//         // navigation.navigate('Posts');
//       }
//         else{
//           alert("filled all the fields");
//         }              
                  
//     })
//     .catch(error => {
//       console.error(error);
//     });
// };



  // this is our post screen

  // const Input = props => {
  //   return (
  //     <View
  //       style={{
  //         width: wp('85%'),
  //         marginTop: '5%',
  //         // marginLeft: '3%',
  //         height: hp('15%'),
  //         borderRadius: 10,
  //         borderWidth: 1.5,
  //         borderColor: '#ECECEC',
  //         fontSize: 15,
  //       }}>
  //       <TextInput
  //         placeholderTextColor={'#C4C4C4'}
  //         placeholder={props.place}
  //         multiline={true}
  //         onChangeText={props.change}
  //         value={props.val}
  //       />
  //     </View>
  //   );
  // };

  // const Input_2 = props => {
  //   return (
  //     <View>
  //       <TextInput
  //         // style={props.whi}
  //         autoCapitalize="none"
  //         autoCorrect={false}
  //         placeholder={props.title}
  //         placeholderTextColor={'#C4C4C4'}
  //         backgroundColor="white"
  //         onChangeText={props.changed}
  //         value={props.vale}
  //         style={{
  //           borderColor: 'black',
  //           borderRadius: 10,
  //           // marginLeft: '3%',
  //           height: hp('7.7%'),
  //           fontSize: 15,
  //           marginTop: '4%',
  //           borderWidth: 1.5,
  //           width: wp('85%'),
  //           borderColor: '#ECECEC',
  //         }}
  //       />
  //     </View>
  //   );
  // };





// import React, { useState } from 'react';
// // Import core components
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity
// } from 'react-native';

  // const uploadImage = async () => {
  //   const item={user};
  //   // data.append('file_attachment', user);
  //   console.log("idddddddyyyy",user);
  //   let parsed = await AsyncStorage.getItem('resp');  
  //         //  let users = JSON.parse(parsed);  
  //         //  console.log("neweeeee",parsed)
  //          let tokens = JSON.parse(parsed);
  //         //  const user=99
  //          const token=tokens.access
  //          console.log("iddddddd",user)
        
   
  //     const images = singleFile;
  //     const data = new FormData();
  //     data.append('file_attachment', images);
     
  //     fetch(
  //       'http://35.90.113.221/create_blog/',
  //       {
  //         method: 'post',
  //         body: data,
  //         headers: {
  //           'Content-Type': 'multipart/form-data; ',
  //           // 'Content-Type': 'application/json',
  //           Accept: 'application/json',
  //           Authorization:  `Bearer ${token}`
  //         },
  //         body: JSON.stringify(item),
  //         headers: {
  //           'Content-Type': 'application/json ',
  //           // 'Content-Type': 'application/json',
  //           Accept: 'application/json',
  //           Authorization:  `Bearer ${token}`
  //         },
  //       }
  //     )
  //     .then((response) => response.json())
  //           .then((response) => {
  //             console.log('response', response);
  //           })
  //           .catch((error) => {
  //             console.log('error', error);
  //           });
  //       };
  
 
  
//   return (
//     <View style={styles.mainBody}>
//       <View style={{ alignItems: 'center' }}>
//         <Text style={{ fontSize: 30, textAlign: 'center' }}>
//           React Native File Upload Example
//         </Text>
//         <Text
//           style={{
//             fontSize: 25,
//             marginTop: 20,
//             marginBottom: 30,
//             textAlign: 'center',
//           }}>
//           www.aboutreact.com
//         </Text>
//       </View>
      
      
//       <TouchableOpacity
//         style={styles.buttonStyle}
//         activeOpacity={0.5}
//         onPress={open}>
//         <Text style={styles.buttonTextStyle}>Upload File</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   mainBody: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   buttonStyle: {
//     backgroundColor: '#307ecc',
//     borderWidth: 0,
//     color: '#FFFFFF',
//     borderColor: '#307ecc',
//     height: 40,
//     alignItems: 'center',
//     borderRadius: 30,
//     marginLeft: 35,
//     marginRight: 35,
//     marginTop: 15,
//   },
//   buttonTextStyle: {
//     color: '#FFFFFF',
//     paddingVertical: 10,
//     fontSize: 16,
//   },
//   textStyle: {
//     backgroundColor: '#fff',
//     fontSize: 15,
//     marginTop: 16,
//     marginLeft: 35,
//     marginRight: 35,
//     textAlign: 'center',
//   },
// });
 
// export default App;