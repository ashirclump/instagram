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
  
  const SignUp = props => {
    const {navigation, route} = props;
    // const [user, setUser] = useState(`${props.route.params.id}`);
    const [user, setUser] = useState(23);
    const [facebook, onChangeFname] = useState('');
    const [instagram, onChangeLname] = useState('');
    const [linkedin, setEmail] = useState('');
    const [twitter, onChangeUser] = useState('');
    const [checkValidEmail, setCheckValidEmail] = useState(false);
  
    const postUser = () => {
      const item = {user, facebook, instagram, linkedin, twitter};
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
        // 'https://gorest.co.in/public/v1/users'
        //   'http://35.88.83.10/login/',
        'http://10.0.2.2:8000/user_social/',
        // `http://10.0.2.2:8000/user_about/${props.route.params.id}`,
        // 'http://35.90.113.221/register/',
        requestOptions,
      )
        .then(result => result.json())
        .then(resp => {
          console.log('Linkpost ', resp);
          if (resp) {
            alert(resp.email);
            navigation.navigate('Pic');
          } else {
            alert('network error');
          }
        })
        .catch(error => {
          console.error(error);
        });
    };
   
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.main}>
            <Image
              source={require('../../Images/Capture.png')}
              style={{height: hp('8%'), width: wp('16%'), borderRadius: 35}}
            />
            <Text style={styles.Heading}>Social links</Text>
            <Text style={styles.Para}>Enter the details below</Text>
         
            <Input_1
              place="facebook"
              change={onChangeFname}
              val={facebook}
            />
            <Input_1 place="instagram" change={onChangeLname} val={instagram} />
  
            <Input_1
              place="linkedin"
              change={setEmail}
              val={linkedin}
            />
           
  
            <Input_1 place="twitter" change={onChangeUser} val={twitter} />
            
  
            <TouchableOpacity
              onPress={() => postUser()}
              style={{
                backgroundColor: '#F45CA5',
                borderRadius: 10,
                marginTop: '7%',
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
    rows: {
      flexDirection: 'row',
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
  });
  export default SignUp;
  