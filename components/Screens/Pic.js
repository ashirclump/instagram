import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import axios from 'axios';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';


const options={
  
  title: 'Select Image',
  type: 'library',
  options: {
    selectionLimit: 0,
    mediaType: 'photo',
    includeBase64: false,
  },
  
}
const SignUp = props => {
  const {navigation, route} = props;
  // const [user, setUser] = useState(35);
 
  // const [images, onChangeFname] = useState('');
  const [backgound_image, onChangeLname] = useState('');
  const [uri, setUri] = useState('');
  const [uriTwo, setUriTwo] = useState('');
  // const [uri, setUri] = useState(props.source?.uri || undefined);
//   const openPicker = () => {
//     ImagePicker.openPicker({
//       // width: 300,
//       // height: 300,
//       // cropping: true,
//     }).then(image => {
//       setUri(image.path);
//       props.onChange?.(image);
//     });
// };


const [images, setImages] = useState('');
const [imageTwo, setImagesTwo] = useState('');
// const [user, setUser] = useState(`${props.route.params.id}`);
// const [images, setImages] = useState({
//   uri: `data:${image};base64,${image}`,
// });
// const [Mypic, setMypic] = useState({uri: `data:${image.mime};base64,${image.data}`});

const openTwo =async () => {
  const imageTwo = await launchImageLibrary(options)
  
      setUriTwo(imageTwo.assets);
      
      
  setImagesTwo(imageTwo);
  //  console.log(imagesss.assets[0])
  
  
  }


const open =async () => {
const imagesss = await launchImageLibrary(options)

    setUri(imagesss.assets);
    
    
setImages(imagesss);
//  console.log(imagesss.assets[0])


}
const postUser=async () => {
let parsed = await AsyncStorage.getItem('resp');  
        let users = JSON.parse(parsed);  
        console.log("neweeeee",parsed)
        let tokens = JSON.parse(parsed);
        const user=users.id
        const token=tokens.access
        console.log("iddddddd",user)

const formdata= new FormData()
formdata.append('images', 
{
 uri:images.assets[0].uri,
 type:images.assets[0].type,
 name:images.assets[0].fileName

})

formdata.append('backgound_image', 
{
 uri:imageTwo.assets[0].uri,
 type:imageTwo.assets[0].type,
 name:imageTwo.assets[0].fileName

})
formdata.append('user',user)
let res = await fetch(
 'http://35.90.113.221/user_profile_pic/',
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
  handleLogout()
        // alert("successful post");
      
        // navigation.navigate('Posts');
      }
        else{
          // alert("filled all the fields");
        }              
    

}

const handleLogout = async () => {
  const dataToken = await AsyncStorage.getItem('resp');
  if (!dataToken) {
    console.log("logout",dataToken);
} else {
      AsyncStorage.clear();
      navigation.navigate('Posts');
  }
};

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.main}>
          <Image
            source={require('../../Images/Capture.png')}
            style={{height: hp('8%'), width: wp('16%'), borderRadius: 35}}
          />
          <Text style={styles.Heading}>Upload Profile Picture</Text>
          <Text style={styles.Para}>Enter the details below</Text>

          {/* <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 16, marginBottom: 13 }}> */}
          <View style={styles.row}>
            <TouchableOpacity>
              <View style={styles.circles}>
                <Text
                  style={{position: 'absolute', alignSelf: 'center',color:"black",fontSize:50}}
                > + </Text>
                <Text
                  style={{color: 'black', fontSize: 16, top: 130, width: 400}}>
                  {props.title}
                </Text>
                <TouchableOpacity onPress={open}>
                  <Image
                    style={styles.avatar}
                    // {...props}
                    // source={uri ? {uri} : props.source}
                    source={uri}
                  />
                </TouchableOpacity>
                <Text style={{ alignSelf: 'center',color:"black",fontSize:15}}>
                Profile Pic</Text>
              </View>
            </TouchableOpacity>
          </View>

         
          <TouchableOpacity>
            <View
              style={styles.circleTwo}>
              <Text
                style={{position: 'absolute', alignSelf: 'center',color:"black",fontSize:50}}
              > + </Text>
              <Text
                style={{color: 'black', fontSize: 16, top: 130, width: 400}}>
                {props.title}
              </Text>
              <TouchableOpacity onPress={openTwo}>
                <Image
                  style={styles.avatarTwo}
                
                  source={uriTwo}
                />
              </TouchableOpacity>
              <Text style={{ alignSelf: 'center',color:"black",fontSize:15}}>
              Background image</Text>
            </View>
          </TouchableOpacity>
       
          <TouchableOpacity
            onPress={() =>postUser()}
            style={{
              backgroundColor: '#F45CA5',
              borderRadius: 10,
              marginTop: '10%',
              height: hp('8%'),
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                alignSelf: 'center',
                marginTop: '6%',
                fontWeight: 'bold',
              }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    width: wp('100%'),
    backgroundColor: '#F2F1F0',
    padding: '5%',
  },
  Heading: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginTop: '8%',
  },

  Para: {
    fontSize: 20,
    color: '#79747E',
    marginTop: '2%',
  },
  inputs: {
    marginTop: '8%',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ECECEC',
    width: wp('90%'),
    backgroundColor: 'white',
    elevation: 2,
    height: hp('8%'),
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
    alignContent:'center',
    justifyContent:'center',
    backgroundColor:'red'
  },
  input1: {
    borderColor: 'black',
    borderRadius: 10,
    marginLeft: '3%',
    height: hp('7.7%'),
    fontSize: 15,
  },
  textFailed: {
    alignSelf: 'flex-end',
    color: 'red',
  },
  head: {
    color: 'black',
    fontStyle: 'normal',

    // fontFamily:"RammettoOne-Regular",
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 36,
  },
  avatar: {
    height: "90%",
    width: '90%',
    // justifyContent: 'center',
    borderRadius: 80,
    marginBottom: 20,
    // alignContent: 'center',
    alignSelf: 'center',
     marginTop:10
  },
  avatarTwo: {
    height: '90%',
    width: '100%',
    // justifyContent: 'center',
   
    marginBottom: 20,
    // alignContent: 'center',
    alignSelf: 'center',
     marginTop:10
  },

  row: {},
circles:{
  height: 180,
  width: 180,
  borderRadius: 100,
  marginTop: '10%',
  justifyContent: 'center',
 borderWidth:2,
 alignContent:'center',
 alignSelf:'center',
  borderColor:"#F45CA5"
},
circleTwo:{
  height: 180,
  width: '100%',
 
  marginTop: '10%',
  justifyContent: 'center',
 borderWidth:2,
 alignContent:'center',
 alignSelf:'center',
  borderColor:"#F45CA5"
},


  modalcontainer: {
    // flex: 1,

    // flexDirection:'column',
    right: 10,
    alignItems: 'center',
  },
  modalview: {
    height: 70,
    width: 320,
    // justifyContent:'space-evenly',

    backgroundColor: 'white',
    borderColor: '#fff',

    borderRadius: 20,
    // alignSelf: 'flex-end',
    // position: 'absolute',
    top: 290,
  },
});
export default SignUp;


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
//         // 'http://35.90.113.221/create_blog/',
//         'http://35.90.113.221/user_profile_pic/',
//         {
//           method: 'post',
//           body:images,
//           body: JSON.stringify(user),
//           headers: {
//             // 'Content-Type': 'multipart/form-data; ',
//             'Media-Type': 'application/json ',
          
//                         Accept: 'application/json',
//                     Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY2MTY2ODc5LCJpYXQiOjE2NjYxNjYyNzksImp0aSI6ImJkNDc3MDg0ZWZlMTQ2NDc4MDRiMzYyZDEwZWJiNmFjIiwidXNlcl9pZCI6MTB9.feEn0uOaXgkLYivuUpO_YknBVDDdPBM9RKlyd0Si2N4',

//           },
//           headers: {
//             // 'Content-Type': 'multipart/form-data; ',
//             'Content-Type': 'application/json ',
          
//                         // Accept: 'application/json',
//                     Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY2MTY2ODc5LCJpYXQiOjE2NjYxNjYyNzksImp0aSI6ImJkNDc3MDg0ZWZlMTQ2NDc4MDRiMzYyZDEwZWJiNmFjIiwidXNlcl9pZCI6MTB9.feEn0uOaXgkLYivuUpO_YknBVDDdPBM9RKlyd0Si2N4',

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
//         type: [DocumentPicker.types.images],
//         // There can me more options as well
//         // DocumentPicker.types.allFiles
//         // DocumentPicker.types.images,
//         // DocumentPicker.types.plainText
//         // DocumentPicker.types.audio
//         // DocumentPicker.types.pdf
//       });
//       // Printing the log realted to the file
//       const user ="59";
//       console.log(user);
//       console.log('res : ' + JSON.stringify(res[0].uri));
//       // Setting the state to show single file attributes
//       setSingleFile(res[0].uri);
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

// import React, {useState} from 'react';
// // import {Header, Image} from 'react-native-elements';
// import {StyleSheet, View, ActivityIndicator, Platform,Image,TouchableOpacity,Text} from 'react-native';
// // import { TouchableOpacity } from 'react-native-gesture-handler';
// // import defaultAvatar from './profile.png';
// // import ImagePicker from 'react-native-image-crop-picker';
// import ImagePicker from 'react-native-image-crop-picker';

// const createFormData = (photo, body) => {
 
//   const data = new FormData();

//   data.append('photo', {
//     name: photo.fileName,
//     type: photo.type,
//     uri:
//       Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
//   });

//   Object.keys(body).forEach((key) => {
//     data.append(key, body[key]);
//   });

//   return data;
// };

// const App = () => {
//   const defaultAvatar = require('../../Images/Capture.png');
//   const [avatar, setAvatar] = useState(defaultAvatar);
//   const [title, setTitle] = useState('Profile Photo');
//   const handlePicker = () => {
//     ImagePicker.openPicker({
//       width: 300,
//       height: 300,
//       cropping: true,
//     }, (response) => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         setAvatar({uri: response.uri});
//         setTitle('Updating...'); // image start to upload on server so on header set text is 'Updating..'
//         fetch('http://35.90.113.221/user_profile_pic/', {
//           method: 'POST',
//           headers: new Headers({
//             'Content-Type': 'application/x-www-form-urlencoded', //Specifying the Content-Type
//           }),
//           body: createFormData(response, {id: '123'}),
//         })
//           .then((data) => data.json())
//           .then((res) => {
//             console.log('upload succes', res);
//             setTitle('Profile Photo');
//             setAvatar({uri: response.image});
//           })
//           .catch((error) => {
//             console.log('upload error', error);
//             setTitle('Profile Photo');
//           });
//       }
//     });
//   };

//   return (
//     <View>
      
//       <View style={styles.imageContainer}>
//         <Image
//           source={avatar}
//           // PlaceholderContent={<ActivityIndicator />}
//           // style=
//         />
//         <TouchableOpacity  style ={{height:20,width:20,backgroundColor:'red'}}onPress={handlePicker}>
//         <Text>good</Text></TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100%',
//   },
//   imageContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   headerText: {
//     color: '#fff',
//     fontSize: 20,
//   },
//   body: {flex: 1},
// });

// export default App;
