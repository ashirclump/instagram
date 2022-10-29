import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import React, {useState} from 'react';
import Header from '../Header';
import Heading1 from '../Profile/Heading1';
import Data_P from '../Profile/Data_P';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Search from 'react-native-vector-icons/Feather';
import { Dropdown } from 'react-native-element-dropdown';
import Blog_Post from './Blog_Post';
import { responsiveFontSizes } from '@material-ui/core';

const Posts = ({props,navigation}) => {
    const [value, setValue] = useState(null);

  return (
   
    <View >
        <View style={{margin:'5%'}}>
            <Header/>
         </View>
         <ScrollView style={{margin:'5%'}}>
            
             <View style={{flexDirection:'row'}}>
                <Heading1    sName={Data_P[3].sName} 
                 h1={Data_P[3].h1} 
                 userName={Data_P[3].userName}/>
                    
                
        </View>
        <Blog_Post navigation={navigation}/>
       </ScrollView>
    </View>

  
  )
};

export default Posts;

const styles = StyleSheet.create({
    dropdown: {
padding:3,
      borderColor: 'gray',
      borderWidth: 0.5,
      width:'30%',
      borderRadius:10,
      
      marginLeft:'20%'
    },

    placeholderStyle: {
      fontSize: 15,
    
    },
    
  });