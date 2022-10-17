import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import React, {useState} from 'react';
import Header from '../Header';
import Heading1 from '../Profile/Heading1';
import Data_P from '../Profile/Data_P';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Search from 'react-native-vector-icons/Feather';
import { Dropdown } from 'react-native-element-dropdown';
import Blog_Post from './Blog_Post';



const data = [
    { label: 'Latest', value: '1' },
    { label: 'Popular', value: '2' },
    { label: 'Oldest', value: '3' },
    
  ];

const Posts = ({props,navigation}) => {
    const [value, setValue] = useState(null);

  return (
   
    <View >
        <View style={{margin:'5%'}}>
            <Header/>
         </View>
         <ScrollView style={{margin:'5%'}}>
            
             <View style={{flexDirection:'row'}}>
                <Heading1    sName={Data_P[2].sName} 
                 h1={Data_P[2].h1} 
                 userName={Data_P[2].userName}/>
                    <TouchableOpacity style={{marginTop:'14%',marginLeft:'19%',
                    backgroundColor: '#F45CA5',
                    borderRadius: 10, justifyContent: 'center', 
                    alignItems: 'center', height: hp('5%'),
                    width: wp('28%')}}>
                             <Text style={{
                        fontWeight: 'bold', fontSize: 16,
                        color: '#ffffff', alignSelf: 'center',
                    }}
                    onPress={() => { navigation.navigate("NewPost") }}
                    
                    >+ New Post</Text>
                </TouchableOpacity>
                 </View>
            <View style={{flexDirection:'row',alignItems:'center',
            width:'100%',  marginTop:'8%'
        }}>
        <View style={{flexDirection:'row',alignItems:'center',borderWidth:0.5, borderColor:'gray', 
                    borderRadius:10, width:'50%', height:'80%'}}>
                <TouchableOpacity style={{ marginLeft: ('2%') }}>
                     <Search name="search" size={22} color="#637381" />
                 </TouchableOpacity>
                 <TextInput
                 placeholder='Search Post...'
                 style={{padding:'10%'}}
                 />
        </View>
            <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Latest"
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        />
        </View>
        
            <Blog_Post/>
            <Blog_Post/>




    

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