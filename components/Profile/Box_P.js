import { StyleSheet, Text, View,ImageBackground,TouchableOpacity, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react';
import Person from 'react-native-vector-icons/Ionicons';
import Heart from 'react-native-vector-icons/Entypo';
import Right from 'react-native-vector-icons/Entypo';

const Box_P = (props) => {
  return (
    <View style={{ width: wp('90%'), backgroundColor: 'white', borderRadius: 20, marginTop: ('8%'),elevation:5 }}>
        <ImageBackground source={require('../../Images/cover_22.jpg')}
                          style={{justifyContent: 'center', alignItems: 'center',marginTop:('4%'),
                                width: wp('90%'), height: hp('30%'), opacity: 150}}>
            <TouchableOpacity>
                <Image source={require('../../Images/minimal_avatar.jpg')}
                        style={{height: hp('15%'), width: wp('30%'), borderRadius: 70, borderColor: 'white'
                                , borderWidth: wp('.5%')}} />
            </TouchableOpacity>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>{props.username}</Text>
            <Text style={{color: '#C4C4C4', fontWeight: 'bold', fontSize: 15}}>{props.pos}</Text>
                        </ImageBackground>


                        <View style={{ flexDirection: 'row', marginTop: ('4%'), marginBottom: ('4%'),}}>
                        <View style={{width:wp('40%'),  flexDirection:'row',justifyContent:'center'}}>    
                            <Person style={{
    
                                backgroundColor: '#637381', borderRadius: 5
                            }} size={18} name="person" color="white" />
                            <TouchableOpacity style={{ marginLeft: ('4%') }}>
                                <Text style={{color:'#637381'}}>Profile</Text>
                            </TouchableOpacity>
                            </View>
                            <View style={{width:wp('40%'),  flexDirection:'row'}}>
                            <Heart size={18}
                                name="heart" color="#637381" />
                            <TouchableOpacity style={{ marginLeft: ('4%') }}>
                                <Text style={{color:'#637381'}}>Followers</Text>
                            </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={{}}>
                                <Right size={18} name="chevron-right" color="#637381" />
                            </TouchableOpacity>
                        </View>


                    </View>

  );
};

const styles = StyleSheet.create({});
export default Box_P;

