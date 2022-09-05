import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react';
import Header from './Profile/Header';
import Heading1 from './Profile/Heading1';
import Box_P from './Profile/Box_P';
import Data_P from './Profile/Data_P';
import About from './Profile/About';
import PostType from './Profile/PostType';
import Posting from './Profile/Posting';


const Profile = (props) => {
  return (
    <SafeAreaView>
        <ScrollView style={{height:hp('100%')}}>
            <View style={styles.main}>
                <Header />
                <Heading1 sName={Data_P[0].user}/>
                <Posting/>
                <Box_P
                        username={Data_P[0].user}
                        pos={Data_P[0].position}/>
            
               
            </View>
           
                
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    main:{
        height:hp('100%'), width:wp('100%'),backgroundColor:'#F2F1F0',padding:('5%')
    },
});

export default Profile;

