import {
    Image, SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput,
    TouchableOpacity
} from 'react-native';
import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CheckBox from '@react-native-community/checkbox';
import Eye from 'react-native-vector-icons/Ionicons';
import Input_1 from '../Input_1';


const Company = "MyApp";

const Login = ({ navigation }) => {

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [show, setShow] = useState(true);
    const [visible, setVisible] = useState(true);

    const Loginn = () => {
        if (email === "abc@myapp.com" && password === "abc1234") {
            navigation.navigate('Profile');
        }
        else { alert('Wrong ID or Password') }
    };


    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.main}>
                    <Image source={require('../../Images/Capture.png')} style={{ height: hp('8%'), width: wp('16%'), borderRadius: 35 }} />
                    <Text style={styles.Heading}>Sign in to {Company}</Text>
                    <Text style={styles.Para}>Enter your details below.</Text>


                    <Input_1 place="Email Address" change={onChangeEmail} val={email} />

                    <View style={[styles.inputs, styles.rows]}>
                        <TextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            placeholder="Password"
                            placeholderTextColor={'#C4C4C4'}
                            secureTextEntry={visible}
                            style={{
                                margin: ('3%'), width: wp('70%'),
                            }}
                            onChangeText={onChangePassword}
                            value={password}
                        />
                        <TouchableOpacity style={{ alignSelf: 'center', marginLeft: ('5%') }}
                            onPress={() => {
                                setVisible(!visible)
                                setShow(!show)
                            }} >
                            <Eye name={show === false ? "eye-sharp" : "eye-off-sharp"} size={20} color="#7E8B98" solid />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', width: wp('90%'), marginTop: ('15%') }}>
                        <View style={{ flexDirection: 'row', width: wp('45%'), }}>
                            <CheckBox
                                tintColor='#F45CA5'
                                disabled={false}
                                value={toggleCheckBox}
                                tintColors={"black"}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            />
                            <Text style={{ marginTop: ('3%'), color: 'black' }}>Remember me</Text>
                        </View>
                        <View style={{ width: wp('45%') }}>
                            <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
                                <Text style={{ fontWeight: '480', color: '#F45CA5', fontWeight: 'bold', marginTop: ('3%') }}>
                                    Forget password?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity style={{
                        alignSelf: 'center', width: ('100%'), height: ('6%'), backgroundColor: '#F45CA5', borderRadius: 10,
                        marginTop: ('10%')
                    }}
                        onPress={Loginn}

                    >
                        <Text style={{ color: '#FFFFFF', alignSelf: 'center', marginTop: ('4%'), fontWeight: 'bold' }}>
                            Login</Text>

                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', marginTop: ('10%'), justifyContent: 'center' }}>
                        <Text style={{ alignSelf: 'center', color: 'black' }}> Don't have an account? </Text>
                        <TouchableOpacity onPress={() => { navigation.navigate("SignUp") }}>
                            <Text style={{ color: '#F45CA5', fontWeight: 'bold' }}> Get Started</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    main: {
        width: wp('100%'), backgroundColor: '#F2F1F0', padding: ('5%')
    },
    Heading: {
        fontSize: 25, color: 'black', fontWeight: 'bold', marginTop: '8%'
    },
    Para: {
        fontSize: 20, color: '#79747E', marginTop: '4%', marginBottom: ('10%')
    },
    inputs: {
        marginTop: ('10%'), borderColor: 'black', borderWidth: 1, borderRadius: 10, borderColor: '#ECECEC',
        width: wp('90%'), backgroundColor: 'white', elevation: 2, height: hp('8%'), fontSize: 15
    },
    rows: {
        flexDirection: 'row'
    },
    input1: {
        borderColor: 'black', borderRadius: 10, marginLeft: ('3%'), height: hp('7.7%'), fontSize: 15
    },


});
export default Login;

