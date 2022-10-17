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
import Input_1 from '../Input_1';
import Eye from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import ImagePicker from 'react-native-image-crop-picker';

const SignUp = props => {
  const {navigation, route} = props;
  // const [user, setUser] = useState(`${props.route.params.id}`);
  const [user, setUser] = useState(23);
  const [facebook, onChangeFname] = useState('');
  const [uri, setUri] = useState(props.source?.uri || undefined);
  const openPicker = () => {
    ImagePicker.openPicker({
      // width: 300,
      // height: 300,
      // cropping: true,
    }).then(image => {
      setUri(image.path);
      props.onChange?.(image);
    });
};
  const postUser = () => {
    const item = {user, facebook};
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY1NzM0MzIyLCJpYXQiOjE2NjU3MzM3MjIsImp0aSI6Ijg3MjMyMDJhYzQ2MDQ3Y2E5MzQ4Y2U1YmZmMGE2MWYwIiwidXNlcl9pZCI6MX0.h3cmhYtD3pstWSRT1CFC4UHR5Ci-K_QgH2P06E9E_cY',
      },

      body: JSON.stringify(item),
    };

    fetch(
      
      'http://10.0.2.2:8000/user_profile_pic_update/',
      
      requestOptions,
    )
      .then(result => result.json())
      .then(resp => {
        console.log('profile pic ', resp);
        if (resp) {
          alert(resp.email);
          navigation.navigate('Login');
        } else {
          alert('network error');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  
//   ImagePicker.openCamera({
    
//   }).then(image => {
//     setUri(image.path);
//     props.onChange?.(image);
//   });




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
              <View
                style={{
                 
                  height: 180,
                  width: 180,
                  borderRadius: 100,
                  marginTop: '10%',
                  justifyContent: 'center',
                 borderWidth:2,
                 alignContent:'center',
                 alignSelf:'center',
                  borderColor:"#F45CA5"
                }}>
                <Text
                  style={{position: 'absolute', alignSelf: 'center',color:"black",fontSize:50}}
                > + </Text>
                <Text
                  style={{color: 'black', fontSize: 16, top: 130, width: 400}}>
                  {props.title}
                </Text>
                <TouchableOpacity onPress={openPicker}>
                  <Image
                    style={styles.avatar}
                    {...props}
                    source={uri ? {uri} : props.source}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => postUser()}
            style={{
              backgroundColor: '#F45CA5',
              borderRadius: 10,
              marginTop: '70%',
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
    height: 110,
    width: 110,
    justifyContent: 'center',
    borderRadius: 80,
    marginBottom: 20,
    alignContent: 'center',
    alignSelf: 'center',
    //  marginLeft:15
  },

  row: {},
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
