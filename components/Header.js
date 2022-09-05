import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Navi from 'react-native-vector-icons/EvilIcons';
import Search from 'react-native-vector-icons/Feather';
import Bell from 'react-native-vector-icons/FontAwesome';
import Friend from 'react-native-vector-icons/FontAwesome5';
import Data_P from './Profile/Data_P';


const Header = (props) => {
  return (
    <View style={{ flexDirection: 'row'}}>
        <TouchableOpacity style={{}}>
            <Navi name="navicon" size={40} color="#637381" />
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: ('1%'), width: wp('8%'), height: hp('3%'), marginLeft: ('2%') }}>
            <Search name="search" size={25} color="#637381" />
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: ('1%'), width: wp('8%'), height: hp('3%'), marginLeft:('31%')}}>
            <Image source={Data_P[0].flag} style={{ width: wp('8%'), height: hp('3%'), }} />
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: ('1%'), width: wp('8%'), height: hp('3%'), marginLeft: ('4%') }}>
            <Bell name="bell" size={22} color="#637381" />
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: ('1%'), width: wp('8%'), height: hp('3%'), marginLeft: ('2%') }}>
            <Friend name="user-friends" size={20} color="#637381" />
        </TouchableOpacity>

        <TouchableOpacity style={{ width: wp('8%'), height: hp('3%'), marginLeft: ('2%') }}>
            <Image source={Data_P[0].img} style={{
                height: hp('5%'), width: wp('10%'), borderRadius: 30,}} />
        </TouchableOpacity>
                            
                        
    </View>
  );
};


const styles = StyleSheet.create({});
export default Header;

