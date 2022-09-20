import { StyleSheet, Text, View,Image , TextInput, SafeAreaView, ScrollView, 
            TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Input_1 from '../Input_1';
import Eye from 'react-native-vector-icons/Ionicons';

const SignUp = ({navigation}) => {

    const [fname, onChangeFname] = useState('');
    const [lname, onChangeLname] = useState('');
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [show,setShow]= useState(true);
    const [visible,setVisible]= useState(true);

  return (
    <SafeAreaView>
        <ScrollView>
    <View style={styles.main}>
        <Image source={require('../../Images/Capture.png')} style={{height: hp('8%'),width: wp('16%'), borderRadius:35}}/>
        <Text style={styles.Heading}>Get started absolutely free. </Text>
        <Text style={styles.Para}>Free forever. No credit card needed.</Text>

        <Input_1 place="First Name" change={onChangeFname} val={fname}/>
        <Input_1 place="Last Name" change={onChangeLname} val={lname}/>
        <Input_1 place="Email Address" change={onChangeEmail} val={email}/>

        <View style={[styles.inputs,styles.rows]}>
                    <TextInput
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholder="Password"
                        placeholderTextColor={'#C4C4C4'}
                        secureTextEntry={visible}
                        style={{
                        margin:('3%'), width:wp('70%'),
                        }}
                        onChangeText={onChangePassword}
                        value={password}
                                    />
                    <TouchableOpacity  style={{alignSelf:'center', marginLeft:('5%') }}
                                    onPress={()=>{
                                    setVisible(!visible)
                                    setShow(!show) }} >
                                    <Eye name={ show === false ? "eye-sharp" : "eye-off-sharp"}  size={20} color="#7E8B98" solid />               
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{ backgroundColor: '#F45CA5', borderRadius:10,
                       marginTop: ('7%'),height:hp('8%') }} >
                    <Text style={{ color: '#FFFFFF', alignSelf: 'center', marginTop: ('6%'), fontWeight: 'bold' }}>
                        Register</Text>
                </TouchableOpacity>

                <View style={{ marginTop:('5%'), width:wp('90%')}}>
                    <Text style={{color:'black',alignSelf:'center' 
                                }}>By registering,I agree to Minimal Terms of</Text>
                    <Text style={{color:'black',alignSelf:'center' 
                                }}>Service and Privacy Policy.</Text>
                </View>
                
                <View style={{flexDirection:'row', marginTop:('5%'), justifyContent:'center'
                               , width:wp('90%')}}>
                    <Text style={{color:'black'}}> Already have an account? </Text>
                    <TouchableOpacity onPress={()=>{ navigation.navigate("Login") }}>
                        <Text style={{color:'#F45CA5', fontWeight: 'bold' }}>Login</Text>
                    </TouchableOpacity>
                </View>

                
        
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
    main:{
        width:wp('100%'),backgroundColor:'#F2F1F0',padding:('5%')
    },
    Heading:{
        fontSize:25,color:'black',fontWeight:'bold', marginTop:'8%'
        },
    
    Para:{
            fontSize:20, color:'#79747E', marginTop:'2%',
        },
    inputs:{
            marginTop: ('8%'), borderColor: 'black', borderWidth: 1, borderRadius: 10,
            borderColor: '#ECECEC', width:wp('90%'),backgroundColor:'white',elevation:2,
            height:hp('8%'),fontSize: 15
        },
    rows:{
            flexDirection:'row'
        },
    input1:{
            borderColor: 'black', borderRadius: 10,marginLeft:('3%'), height:hp('7.7%'), fontSize: 15,
        },
});
export default SignUp;

