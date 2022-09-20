import { StyleSheet, Text, View,TextInput, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import Header from '../Header';
import Heading1 from '../Profile/Heading1';
import Data_P from '../Profile/Data_P';
import Input_1 from '../Input_1';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const NewPost = () => {

    const [postTitle, onChangePostTitle] = useState('');
    const [des, onChangeDes] = useState('');


  return (
    <SafeAreaView>
        <View style={{padding:('5%'),}}>
                <Header />
                <Heading1 sName={Data_P[1].sName} 
                        h1={Data_P[1].h1} 
                        userName={Data_P[1].userName}/>

                <View style={styles.input}>
                    <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder='Post Title'
                    placeholderTextColor={'#C4C4C4'}
                    backgroundColor='white'
                    onChangeText={onChangePostTitle}
                    value={postTitle}
                    style={styles.input1}
                        />

                    <View style={{backgroundColor:'white', width:wp("75%"),marginTop:('5%'),
                                marginLeft:('3%'), height:hp('15%'), borderRadius:10}}> 
                         <TextInput
                            placeholder='Description'
                            multiline={true}
                            onChangeText={onChangeDes}
                            value={des} />
                    </View>
                    <Text style={{color:'black', fontWeight:'bold', fontSize:15,
                            marginTop:('5%'), marginLeft:('3%')}}>Content</Text>
                </View>
    
            </View>
    </SafeAreaView>
  )
}   

const styles = StyleSheet.create({

    input:{
        backgroundColor:'red',width:wp('90%'), padding:('5%'),marginTop:('8%'),borderRadius:10
    },

    input1:{
        borderColor: 'black', borderRadius: 10,marginLeft:('3%'), 
        height:hp('7.7%'), fontSize: 15, width:wp("75%")
    },

});
export default NewPost;

