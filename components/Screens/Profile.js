import { StyleSheet, Text, View, SafeAreaView, ScrollView,
    TextInput,TouchableOpacity,Image,FlatList} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, {useState,useEffect} from 'react';
import Header from '../Header';
import Heading1 from '../Profile/Heading1';
import Box_P from '../Profile/Box_P';
import Data_P from '../Profile/Data_P';
import About from '../Profile/About';
import PostType from '../Profile/PostType';
import Dot3 from 'react-native-vector-icons/Entypo';
import Heart from 'react-native-vector-icons/Entypo';
import Share from 'react-native-vector-icons/Entypo';
import Photo from 'react-native-vector-icons/MaterialIcons';
import Smile from 'react-native-vector-icons/Fontisto';
import Send from 'react-native-vector-icons/Ionicons';
import Links from '../Profile/Links';
import { SettingsTwoTone } from '@material-ui/icons';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Profile = ({props,navigation}) => {
    const [subSalonforWomen, setSubSalonforWomen] = useState([]);
    const [two, setTwo] = useState([]);

    useEffect(() => {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
  
      fetch(
          'http://10.0.2.2:8000/post_view/',
         requestOptions,
      ).then(resp => {
       resp.json().then(resp => {
            // console.log('postview',resp[0].comment_set);
          setSubSalonforWomen(resp);
          setTwo(resp[0])
        });
      });
    }, []);
    
    const handleLogout = async () => {
        const dataToken = await AsyncStorage.getItem('AccessToken');
        if (!dataToken) {
          console.log("excellent",'AccessToken');
          
        } else {
          
        }
        AsyncStorage.clear();
        navigation.navigate('Login');

      };
      
  return (
    <SafeAreaView>
        <ScrollView>
            <View style={styles.main}>
           
                <Header />
                
                <Heading1 sName={Data_P[0].sName} 
                          h1={Data_P[0].h1} 
                          userName={Data_P[0].userName}/>
                          <TouchableOpacity style={{ width: wp('15%'), height: hp('4%'), backgroundColor:'yellow'}}
         onPress={handleLogout}>
             <Text style={{
                 height: hp('15%'), width: wp('20%'), borderRadius: 30
             }} > logout</Text>
             </TouchableOpacity>
                
                <Box_P
                
                        username={Data_P[0].userName}
                        pos={Data_P[0].position}/>

                

                <About/>
                <Links/>
                <PostType />
                
                <FlatList
                style={{ width: 400}}
                
                data={subSalonforWomen}
                
                keyExtractor={item => item._id}
                
                renderItem={({item}) => (

     <View style={{ elevation:5,width: wp('91%'), backgroundColor: 'white', borderRadius: 20, marginTop: ('8%') }}>

     <View style={{ flexDirection: 'row', marginTop: ('8%'), marginLeft: ('5%') }}>
         <TouchableOpacity style={{ width: wp('8%'), height: hp('3%'), }}>
             <Image source={{uri:item.images}}style={{
                 height: hp('5%'), width: wp('10%'), borderRadius: 30,
             }} />
         </TouchableOpacity>
         <View style={{ marginLeft: ('5%') }}>
             <TouchableOpacity>
                 <Text style={{ fontWeight: 'bold', color: 'black' }}>Amitabh UI</Text>
             </TouchableOpacity>
             <Text style={{ fontSize: 12,color:'#637381' }}>25 August 2022 </Text>
         </View>
         <TouchableOpacity>
             <Dot3 style={{ marginLeft: ('67%') }} size={18} name="dots-three-vertical" color="#637381" solid />
         </TouchableOpacity>
     </View>

     <Text style={{ fontSize: 16, marginTop: ('8%'), margin: ('5%'),color:'#637381'}}>{item.post_name}</Text>
     <Image source={{uri:item.images}}
    //  source={require('../../Images/feed_1.jpg')}
         style={{
             width: wp('81%'), height: hp('25%'), marginLeft: ('5%'),
             borderRadius: 5
         }} />

     <View style={{ flexDirection: 'row', marginTop: ('8%'), marginLeft: ('5%') }}>
         <TouchableOpacity style={{ borderRadius: 4 }}>
             <Heart size={25}
                 name="heart" color="#FF4842" />
         </TouchableOpacity>
         <Text style={{ fontSize: 16, marginLeft: ('2%'),color:'black' }}>{item.likes}</Text>
         <TouchableOpacity style={{
             height: hp('3.5%'), width: wp('7%'), borderRadius: 30,
             borderWidth: wp('.3%'), borderColor: 'white',
             marginLeft: ('17%'), position: 'absolute'
         }}>
             <Image source={require('../../Images/avatar_3.jpg')}
                 style={{
                     height: hp('3.5%'), width: wp('7%'), borderRadius: 30,
                     position: 'absolute'
                 }} />
         </TouchableOpacity>
         <TouchableOpacity style={{
             height: hp('3.5%'), width: wp('7%'), borderRadius: 30,
             borderWidth: wp('.3%'), borderColor: 'white',
             marginLeft: ('23%'), position: 'absolute'
         }}>
             <Image source={require('../../Images/avatar_4.jpg')}
                 style={{
                     height: hp('3.5%'), width: wp('7%'), borderRadius: 30,
                     position: 'absolute'
                 }} />
         </TouchableOpacity>
         <TouchableOpacity style={{
             height: hp('3.5%'), width: wp('7%'), borderRadius: 30,
             borderWidth: wp('.3%'), borderColor: 'white',
             marginLeft: ('29%'), position: 'absolute'
         }}>
             <Image source={require('../../Images/avatar_5.jpg')}
                 style={{ height: hp('3.5%'), width: wp('7%'), borderRadius: 30 }} />
         </TouchableOpacity>

         <TouchableOpacity style={{
             height: hp('4%'), width: wp('7.5%'), borderRadius: 30,
             backgroundColor: '#BEF6C7', marginLeft: ('21%'), borderWidth: wp('.3%'), borderColor: 'white',
             justifyContent: 'center'
         }}>

             <Text style={{
                 color: '#70D798', fontSize: 14, fontWeight: 'bold',
             }}>+{item.likes}</Text>
         </TouchableOpacity>

         <TouchableOpacity style={{
             height: hp('2%'), width: wp('4%'), backgroundColor: '#BEF6C7'
             , marginLeft: ('35%')
         }}>
             <Image source={require('../../Images/msg.png')}
                 style={{
                     height: hp('2%'), width: wp('4%')
                 }} />
         </TouchableOpacity>
         <TouchableOpacity style={{ marginLeft: ('5%') }} >
             <Share size={16}
                 name="share" color="#637381" />
         </TouchableOpacity>
     </View>




           
     <FlatList
     style={{ width: 400}}
     
     data={two.comment_set}
    //  horizontal={false}
     keyExtractor={item => item._id}
     
     renderItem={({item}) => (
        <View>

     <View style={{flexDirection: 'row',
                 marginLeft:'5%',marginRight:'5%',marginTop:'5%'}}>
         <TouchableOpacity style={{ width: wp('8%'), height: hp('3%'), }}>
             <Image source={require('../../Images/avatar_4.jpg')} style={{
                 height: hp('5%'), width: wp('10%'), borderRadius: 30,
             }} />
         </TouchableOpacity>

         <View style={{
             backgroundColor: '#F3F5F7', borderRadius: 10,
             width: wp('68%'), marginLeft: ('7%')
         }}>
             <View style={{margin:('5%')}}>
                 <TouchableOpacity>
                     <Text style={{ fontWeight: 'bold', color: 'black' }}>{item.user}</Text>
                 </TouchableOpacity>
                 <Text style={{ fontSize: 12 ,color:'#637381'}}>{item.time.toLocaleTimeString} </Text>
                 <Text style={{color:'#637381', marginTop: ('5%') }}>{item.text}</Text>
             </View>
         </View>
         </View>



      
</View>
     )}
     />

     
    
    
   
    

     <View style={{ flexDirection: 'row', marginTop: 15 }}>
         <TouchableOpacity style={{
             width: wp('8%'), height: hp('3%'),
             marginLeft: ('5%')
         }}>
             <Image source={Data_P[0].img} style={{
                 height: hp('5%'), width: wp('10%'), borderRadius: 30,
             }} />
         </TouchableOpacity>

         <View style={{
             borderWidth: wp('.3%'), flexDirection: 'row', width: ('64%'),
             height: ('57%'),
             borderRadius: 10,
              marginBottom: ('8%'), marginLeft: ('6%'), borderColor: '#F4F6F8'
         }}>
             <TextInput
                 placeholder='Write a comment'
                 placeholderTextColor={'#C4C4C4'}
                 style={{ width: wp('44%') }}

             />
             <TouchableOpacity>
                 <Photo style={{ marginTop: ('50%') }} size={20} name="add-photo-alternate" color="#637381" solid />
             </TouchableOpacity>
             <TouchableOpacity>
                 <Smile style={{ marginLeft: ('12%'), marginTop: ('20%') }} size={20} name="smiley" color="#637381" solid />
             </TouchableOpacity>
         </View>
         <TouchableOpacity>
             <Send style={{ marginLeft: ('20%'), marginTop: ('10%') }} size={20} name="send" color="#637381" solid />
         </TouchableOpacity>
     </View>
     <View>
     </View>
 </View>

 )}
            />

               
           
           
            </View>    
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    main:{
        width:wp('100%'),backgroundColor:'#F2F1F0',padding:('5%')
    },
});

export default Profile;


    //  <View style={{ flexDirection: 'row',margin: ('5%'), }}>
    //      <TouchableOpacity style={{ width: wp('8%'), height: hp('3%'), }}>
    //          <Image source={require('../../Images/avatar_11.jpg')} style={{
    //              height: hp('5%'), width: wp('10%'), borderRadius: 30,
//              }} />
//          </TouchableOpacity>

//          <View style={{
//              backgroundColor: '#F3F5F7', borderRadius: 10,
//              width: wp('68%'), marginLeft: ('7%')
//          }}>
//              <View style={{margin:'5%' }}>
//                  <TouchableOpacity>
//                      <Text style={{ fontWeight: 'bold', color: 'black' }}>Shahid kapoor</Text>
//                  </TouchableOpacity>
//                  <Text style={{ fontSize: 12,color:'#637381' }}>22 August 2022</Text>
//                  <Text style={{ color:'#637381', marginTop: ('5%') }}>Etiam rhoncus. Nullam vel sem. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed lectus.</Text>
//              </View>
//          </View>
    
// </View>