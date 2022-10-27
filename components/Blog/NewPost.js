



import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../Header';
import Heading1 from '../Profile/Heading1';
import Data_P from '../Profile/Data_P';
import Underline from 'react-native-vector-icons/Feather';
import List from 'react-native-vector-icons/FontAwesome';
import Image from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Input_2 from '../Input_2';
import Input from '../Input';
import ImagePicker from 'react-native-image-crop-picker';


 
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
  const [uri, setUri] = useState(props.source?.uri || undefined);
  
  // const [user, setUser] = useState(`${props.route.params.id}`);
  // const [images, setImages] = useState({
  //   uri: `data:${image};base64,${image}`,
  // });
 
 
  const [singleFile, setSingleFile] = useState('');
  


  const [image, setImage] = useState(null);
const [uploading, setUploading] = useState(false);
const [transferred, setTransferred] = useState(0);



  const [images, setImages] = useState(props.source?.images || undefined);
  const openPicker = () => {
    ImagePicker.openPicker({
      // width: 300,
      // height: 300,
      // cropping: true,
    }).then(image => {
      setUri(image.path);
      setImages(image.mime);
      console.log(image);
      props.onChange?.(image);
    });
};
  


const postUser =async ()=> {
  // const dataToken = await AsyncStorage.getItem('user');
  //   const token = await AsyncStorage.getItem('access');
  //   const oken = await AsyncStorage.getItem('token');
  //      const user= dataToken;
      //  const dataToken = await AsyncStorage.getItem('token');
      const cool = await AsyncStorage.getItem('respp');  
      console.log("ddd",cool)
      // resp[0].user
      // let newest = JSON.parse(parsed);
      // const user=users.id
      // const dd=newest.user
      // console.log(user)
      // console.log(token)

       let parsed = await AsyncStorage.getItem('resp');  
      //  let users = JSON.parse(parsed);  
       console.log(parsed)
       let tokens = JSON.parse(parsed);
       const user=users.id
       const token=tokens.access
       console.log(user)
       console.log(token)
      
  const item ={post_name,
    tag_name,
    blog_name,
    user,
    post_header,
    post_content,
    };
    // console.log(item);
    
  const requestOptions = {
    method: 'POST',
    redirect: 'follow',

    headers: {
      'Content-Type': 'application/json;',
          Accept: 'application/json',
      Authorization:  `Bearer ${token}`},
   
   
    body: JSON.stringify (item)
  };

  fetch(
   
  'http://35.90.113.221/create_blog/',
  // 'http://35.90.113.221/register/',
    requestOptions,
  )
    .then(result => result.json())
    .then(resp => {
      console.log('newpost ', resp)
      if (resp.user) {

        alert("successful post");
      
        navigation.navigate('Posts');
      }
        else{
          alert("filled all the fields");
        }              
                  
    })
    .catch(error => {
      console.error(error);
    });
};

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

  // main

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
                <Image size={25} name="image" color="black" solid />
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
                  // {...props}
                    source={uri ? {uri} : props.source}
                    // source={{uri:images}}
                  // style={{
                  //   justifyContent: 'center',
                  //   alignItems: 'center',
                  //   marginTop: '4%',
                  //   width: wp('50%'),
                  //   height: hp('20%'),
                  //   opacity: 150,
                  // }}
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
                    marginTop: '5%',
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
                  <TouchableOpacity onPress={openPicker}>
                  <Text
                    style={{color: '#F45CA5', textDecorationLine: 'underline'}}>
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
    height: 110,
    width: 110,
    justifyContent: 'center',
    borderRadius: 80,
    marginTop: '4%',
    marginBottom: 20,
    alignContent: 'center',
    alignSelf: 'center',
    //  marginLeft:15
   
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

 

// import React, { useState } from 'react';
// // Import core components
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity
// } from 'react-native';
// // import DocumentPicker from 'react-native-document-picker';
// import DocumentPicker, { types } from 'react-native-document-picker';
 

// const App = props => {
//   const {navigation, route} = props;
  
//   const [singleFile, setSingleFile] = useState(59);
//   const [user,onChangeUser] = useState(`${props.route.params.id}`);

//   const uploadImage = async () => {
//     // const item = {user};
//     // Check if any file is selected or not
//     if (singleFile != null) {
//       // If file selected then create FormData
//       const fileToUpload = singleFile;
//       const images = new FormData();
//       images.append('name', 'Image Upload',);
//       images.append('file_attachment', fileToUpload,);
//       // Please change file upload URL
//       let res = await fetch(
//         'http://35.90.113.221/create_blog/',
//         {
//           method: 'post',
//           body:images,
//           body: ({user:59,images}),
//           headers: {
//             'Content-Type': 'multipart/form-data; ',
//             // 'Content-Type': 'application/json ',
          
//                         Accept: 'application/json',
//                     Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY2MDE0MzczLCJpYXQiOjE2NjYwMTM3NzMsImp0aSI6ImQ3YTUzZWUwMmIzMDRlMzViZjY4MTYzNzYwOTA5Zjc0IiwidXNlcl9pZCI6NTl9.PxAZ9yYQRmQKR4TXGSRRMuLb8iyTVzJiG6VJUEWxkzE',

//           },
//           headers: {
//             // 'Content-Type': 'multipart/form-data; ',
//             'Content-Type': 'application/json ',
          
//                         // Accept: 'application/json',
//                     Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY2MDE0MzczLCJpYXQiOjE2NjYwMTM3NzMsImp0aSI6ImQ3YTUzZWUwMmIzMDRlMzViZjY4MTYzNzYwOTA5Zjc0IiwidXNlcl9pZCI6NTl9.PxAZ9yYQRmQKR4TXGSRRMuLb8iyTVzJiG6VJUEWxkzE',

//           },
         
//         }
//       );
//       let responseJson = await res.json();
//       if (responseJson) {
//         alert('Upload Successful');
//         console.log(responseJson);
//       }
//     } else {
//       // If no file selected the show alert
//       alert('Please Select File first');
//     }
//   };
 
//   const selectFile = async () => {
//     // Opening Document Picker to select one file
//     try {
//       // const user=59;
//       const res = await DocumentPicker.pick({
//         // Provide which type of file you want user to pick
//         type: [DocumentPicker.types.allFiles],
//         // There can me more options as well
//         // DocumentPicker.types.allFiles
//         // DocumentPicker.types.images
//         // DocumentPicker.types.plainText
//         // DocumentPicker.types.audio
//         // DocumentPicker.types.pdf
//       });
//       // Printing the log realted to the file
//       const user ="59";
//       console.log(user);
//       console.log('res : ' + JSON.stringify(res));
//       // Setting the state to show single file attributes
//       setSingleFile(res,user);
//     } catch (err) {
//       setSingleFile(null);
//       // Handling any exception (If any)
//       if (DocumentPicker.isCancel(err)) {
//         // If user canceled the document selection
//         alert('Canceled');
//       } else {
//         // For Unknown Error
//         alert('Unknown Error: ' + JSON.stringify(err));
//         throw err;
//       }
//     }
//   };
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
//       {/*Showing the data of selected Single file*/}
//       {singleFile != null ? (
//         <Text style={styles.textStyle}>
//           File Name: {singleFile.name ? singleFile.name : ''}
//           {'\n'}
//           Type: {singleFile.type ? singleFile.type : ''}
//           {'\n'}
//           File Size: {singleFile.size ? singleFile.size : ''}
//           {'\n'}
//           URI: {singleFile.uri ? singleFile.uri : ''}
//           {'\n'}
//         </Text>
//       ) : null}
//       <TouchableOpacity
//         style={styles.buttonStyle}
//         activeOpacity={0.5}
//         onPress={selectFile}>
//         <Text style={styles.buttonTextStyle}>Select File</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.buttonStyle}
//         activeOpacity={0.5}
//         onPress={uploadImage}>
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
