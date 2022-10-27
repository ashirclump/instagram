import { StyleSheet, Text, View,TextInput } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import React, { useState } from 'react'

const Input_2 = (props) => {


  // const [email, onChangeEmail] = useState('');
  return (
    <View >
    <Text style={{color:'red',fontSize:20}}>*</Text>
                <TextInput
                             autoCapitalize='none'
                             autoCorrect={false}
                             placeholder={props.title}
                             placeholderTextColor={'#C4C4C4'}
                             backgroundColor='white'
                             onChangeText={props.changed}
                             value={props.vale}
                             style={styles.input1}
                />
            </View>
  );
};

const styles = StyleSheet.create({

  inputs:{
    marginTop: ('8%'), borderColor: 'black', borderWidth: 1, borderRadius: 10,borderColor: '#ECECEC', 
    width:wp('90%'),backgroundColor:'white',elevation:2,height:hp('8%'),fontSize: 15
},
rows:{
    flexDirection:'row'
},
input1:{
    borderColor: 'black',
              borderRadius: 10,
              // marginLeft: '3%',
              height: hp('7.7%'),
              fontSize: 15,
              marginTop: '4%',
              borderWidth: 1.5,
              width: wp('85%'),
              borderColor: '#ECECEC',
},
});
export default Input_2;

