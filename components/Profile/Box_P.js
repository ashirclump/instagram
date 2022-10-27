import { StyleSheet, Text, View,ImageBackground,TouchableOpacity, Image ,FlatList} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React ,{useState,useEffect} from 'react';
import Person from 'react-native-vector-icons/Ionicons';
import Heart from 'react-native-vector-icons/Entypo';
import Right from 'react-native-vector-icons/Entypo';
import Data_P from '../Profile/Data_P';
import AsyncStorage from '@react-native-async-storage/async-storage';

   

const Box_P = (props) => {
    const [blog, setBlog] = useState([]);

    const postUser = async () => {

        let parsed = await AsyncStorage.getItem('resp');  
     
        let tokens = JSON.parse(parsed);
        
        const token=tokens.access
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`, 
        
    },
    };
    fetch(
      // 'http://35.88.83.10/blog_view/',
      'http://35.90.113.221/user_profile_pic/',

      requestOptions,
    ).then(resp => {resp.json()
        .then(resp => {
            console.log("image pic",resp);
        setBlog(resp);
      });
    });
}
useEffect(() => {
    postUser();
  }, []);

//   return (
//     <View style={{ width: wp('90%'), backgroundColor: 'white', borderRadius: 20, marginTop: ('8%'),elevation:5 }}>
    
//     <ImageBackground 
//         // source={require('../../Images/cover_22.jpg')}l
//         // source={{uri:'http://35.90.113.221' + item.backgound_image}}
//         // source={{uri:'https://35.90.113.221'+item.images}}
//                           style={{justifyContent: 'center', alignItems: 'center',marginTop:('4%'),
//                                 width: wp('90%'), height: hp('30%'), opacity: 150}}>
            
//                                 {
//                                     blog.map=((item)=> 
//                                                         <TouchableOpacity>
 

// <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>{item.username}dsdsds</Text>
//                 <Image 
//                 // source={require('../../Images/cover_22.jpg')} 
//                 source={{uri:'http://35.90.113.221'+item.backgound_image}}
//         style={{height: hp('15%'), width: wp('30%'), borderRadius: 70, borderColor: 'white'
//                                 , borderWidth: wp('.5%')}} /> 

           
                                

//             </TouchableOpacity>
//             )}   
            
//             <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>{props.username}</Text>
//             <Text style={{color: '#C4C4C4', fontWeight: 'bold', fontSize: 15}}>{props.pos}</Text>
//                         </ImageBackground>
                        

//                         <View style={{ flexDirection: 'row', marginTop: ('4%'), marginBottom: ('4%'),}}>
//                         <View style={{width:wp('40%'),  flexDirection:'row',justifyContent:'center'}}>    
//                             <Person style={{
    
//                                 backgroundColor: '#637381', borderRadius: 5
//                             }} size={18} name="person" color="white" />
//                             <TouchableOpacity style={{ marginLeft: ('4%') }}>
//                                 <Text style={{color:'#637381'}}>Profile</Text>
//                             </TouchableOpacity>
//                             </View>
//                             <View style={{width:wp('40%'),  flexDirection:'row'}}>
//                             <Heart size={18}
//                                 name="heart" color="#637381" />
//                             <TouchableOpacity style={{ marginLeft: ('4%') }}>
//                                 <Text style={{color:'#637381'}}>Followers</Text>
//                             </TouchableOpacity>
//                             </View>
//                             <TouchableOpacity style={{}}>
//                                 <Right size={18} name="chevron-right" color="#637381" />
//                             </TouchableOpacity>
//                         </View>

//                         <FlatList
//                         style={{ width: 400}}
                        
//                         data={subSalonforWomen}
                        
//                         keyExtractor={item => item._id}
                        
//                         renderItem={({item}) => (
                    
//                     <View style={{ elevation:5,width: wp('91%'), backgroundColor: 'white', borderRadius: 20, marginTop: ('8%') }}>
                    
//                     <View style={{ flexDirection: 'row', marginTop: ('8%'), marginLeft: ('5%') }}>
//                     <TouchableOpacity style={{ width: wp('8%'), height: hp('3%'), }}>
//                      <Image source={{uri:item.images}}style={{
//                          height: hp('5%'), width: wp('10%'), borderRadius: 30,
//                      }} />
//                     </TouchableOpacity>
                    
                    
                    
                    
//                     <Text style={{ fontSize: 16, marginTop: ('8%'), margin: ('5%'),color:'#637381'}}>{item.post_name}</Text>
//                     <Image source={{uri:item.images}}
//                     //  source={require('../../Images/feed_1.jpg')}
//                     style={{
//                      width: wp('81%'), height: hp('25%'), marginLeft: ('5%'),
//                      borderRadius: 5
//                     }} />
//                     </View>
                    
//                         )}/>
                    
//                     </View>

//   );
// };


// export default Box_P;



//                             ********* */ ashir api code for user profile don tousch****************
                            
// import { StyleSheet, Text, View,ImageBackground,TouchableOpacity, Image ,FlatList} from 'react-native';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import React,{useState,useEffect} from 'react';
// import Person from 'react-native-vector-icons/Ionicons';
// import Heart from 'react-native-vector-icons/Entypo';
// import Right from 'react-native-vector-icons/Entypo';
// import Data_P from '../Profile/Data_P';


// const Box_P = (props) => {

//     const [subSalonforWomen, setSubSalonforWomen] = useState([]);

//     useEffect(() => {
//       const requestOptions = {
//         method: 'GET',
//         redirect: 'follow',
//       };
  
//       fetch(
//           'http://35.88.83.10/user_profile_pic/',
  
//         requestOptions,
//       ).then(resp => {
       
//           resp.json().then(resp => {
//             console.log("pic",resp);
//           setSubSalonforWomen(resp);
//         });
//       });
//     }, []);

  return (
   

    <View style={{ width: wp('90%'), backgroundColor: 'white', borderRadius: 20, marginTop: ('8%'),elevation:5 }}>
    

    <FlatList
    style={{ width: 400}}
    
    data={blog}
    
    keyExtractor={item => item._id}
    
    renderItem={({item}) => (
    <View>
         <ImageBackground source={{uri:'http://35.90.113.221'+item.backgound_image}}
                          style={{justifyContent: 'center', alignItems: 'center',marginTop:('4%'),
                            width: wp('90%'), height: hp('30%'), opacity: 150}}>
            <TouchableOpacity>
                <Image source={{uri:'http://35.90.113.221'+item.images}}
                        style={{height: hp('15%'), width: wp('30%'), borderRadius: 70, borderColor: 'white'
                                , borderWidth: wp('.5%')}} />
            </TouchableOpacity>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>{item.user}</Text>
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
                    )}
/>

                    </View>
  );
};

const styles = StyleSheet.create({});
export default Box_P;

