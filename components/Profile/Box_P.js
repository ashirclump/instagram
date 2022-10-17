import { StyleSheet, Text, View,ImageBackground,TouchableOpacity, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React ,{useState,useEffect} from 'react';
import Person from 'react-native-vector-icons/Ionicons';
import Heart from 'react-native-vector-icons/Entypo';
import Right from 'react-native-vector-icons/Entypo';
import Data_P from '../Profile/Data_P';


   

const Box_P = (props) => {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY1NzM0MzIyLCJpYXQiOjE2NjU3MzM3MjIsImp0aSI6Ijg3MjMyMDJhYzQ2MDQ3Y2E5MzQ4Y2U1YmZmMGE2MWYwIiwidXNlcl9pZCI6MX0.h3cmhYtD3pstWSRT1CFC4UHR5Ci-K_QgH2P06E9E_cY', 
    },
    };
    fetch(
      // 'http://35.88.83.10/blog_view/',
      'http://10.0.2.2:8000/user_profile_pic/',

      requestOptions,
    ).then(result => {
        
        result.json().then(resp => {
            console.log("image pic",resp);
        setBlog(resp);
      });
    });
}, []);
  return (
    <View style={{ width: wp('90%'), backgroundColor: 'white', borderRadius: 20, marginTop: ('8%'),elevation:5 }}>
    {
        blog.map =((item)=>   
    <ImageBackground 
        source={require('../../Images/cover_22.jpg')}
        // source={{uri:item.backgound_image}}
                          style={{justifyContent: 'center', alignItems: 'center',marginTop:('4%'),
                                width: wp('90%'), height: hp('30%'), opacity: 150}}>
            <TouchableOpacity>
           


          
                <Image 
                source={require('../../Images/cover_22.jpg')} 
                // source={{uri:item.images}}
        
                        style={{height: hp('15%'), width: wp('30%'), borderRadius: 70, borderColor: 'white'
                                , borderWidth: wp('.5%')}} /> 
 
            </TouchableOpacity>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>{item.user}{props.username}</Text>
            <Text style={{color: '#C4C4C4', fontWeight: 'bold', fontSize: 15}}>{props.pos}</Text>
                        </ImageBackground>
                        )}

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



                            //********* */ ashir api code for user profile don tousch****************
                            
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

//   return (


//     <View style={{ width: wp('90%'), backgroundColor: 'white', borderRadius: 20, marginTop: ('8%'),elevation:5 }}>
//     <FlatList
//     style={{ width: 400}}
    
//     data={subSalonforWomen}
    
//     keyExtractor={item => item._id}
    
//     renderItem={({item}) => (
//     <View>
//          <ImageBackground source={{uri:item.backgound_image}}
//                           style={{justifyContent: 'center', alignItems: 'center',marginTop:('4%'),
//                             width: wp('90%'), height: hp('30%'), opacity: 150}}>
//             <TouchableOpacity>
//                 <Image source={{uri:item.images}}
//                         style={{height: hp('15%'), width: wp('30%'), borderRadius: 70, borderColor: 'white'
//                                 , borderWidth: wp('.5%')}} />
//             </TouchableOpacity>
//             <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>{item.user}</Text>
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


//                     </View>
//                     )}
// />

//                     </View>
//   );
// };

// const styles = StyleSheet.create({});
// export default Box_P;

