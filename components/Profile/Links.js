import { StyleSheet, Text, View,FlatList } from 'react-native'
import React ,{useState,useEffect} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Linkedin from 'react-native-vector-icons/Entypo';
import Twitter from 'react-native-vector-icons/Entypo';
import Insta from 'react-native-vector-icons/Entypo';
import Facebook from 'react-native-vector-icons/Entypo';
// import {datatoken} from '../../App'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Links = () => {
    const [subSalonforWomen, setSubSalonforWomen] = useState([]);
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
          
          'http://35.90.113.221/user_social_view/',
        requestOptions,
      ).then(resp => {
          resp.json().then(async (resp) => {
            // console.log('links',datatoken);
            console.log('links',resp);
            await AsyncStorage.setItem('response',JSON.stringify (resp));
          setSubSalonforWomen(resp);
        });
      });
    }
    useEffect(() => {
      postUser();
    }, []);
  return (
   <View style={{elevation:5, width: wp('91%'), backgroundColor: 'white', borderRadius: 20, marginTop: ('8%') }}>
  
    <FlatList
    style={{ width: 400}}
    
    data={subSalonforWomen}
    
    keyExtractor={item => item._id}
    listKey="YourListName"
    renderItem={({item}) => 
        <View >
    <Text style={{
        fontSize: 16, fontWeight: 'bold',color:'#637381',
        marginLeft: ('5%'), marginTop: ('10%')
    }}>Social</Text>

    <View style={{ flexDirection: 'row', marginLeft: ('5%'), marginTop: ('5%') }}>
        <Linkedin style={{}} size={18} name="linkedin" color="#006097" solid />
        <Text style={{ marginLeft: ('5%'),color:'#637381' }}>{item.linkedin}</Text>
    </View>

    <View style={{ flexDirection: 'row', marginLeft: ('5%'), marginTop: ('5%') }}>
        <Twitter style={{}} size={18} name="twitter" color="#1C9CEA" solid />
        <Text style={{ marginLeft: ('5%'),color:'#637381' }}>{item.twitter}</Text>
    </View>

    <View style={{ flexDirection: 'row', marginLeft: ('5%'), marginTop: ('5%') }}>
        <Insta style={{}} size={18} name="instagram" color="#D7336D" solid />
        <Text style={{ marginLeft: ('5%'),color:'#637381' }}>{item.instagram}</Text>
    </View>

    <View style={{ flexDirection: 'row', marginLeft: ('5%'), marginTop: ('5%') }}>
        <Facebook style={{}} size={18} name="facebook" color="#1877F2" solid />
        <Text style={{ marginLeft: ('5%'), marginBottom: ('8%'),color:'#637381' }}>{item.facebook}</Text>
    </View>
    </View>
 }
/>

</View>               
  );
};

export default Links;

const styles = StyleSheet.create({
    main:{
        width: wp('90%'), backgroundColor: 'white', borderRadius: 20, marginTop: ('8%') 
        ,elevation:5,
    },

    link:{
        flexDirection: 'row', marginLeft: ('5%'), marginTop: ('5%'),width:('90%'),
    },
    txt:{
        marginLeft: ('5%') ,color:'#637381'
    },
    txt1:{
        marginLeft: ('2%'), fontWeight: 'bold',color:'#637381' 
    }

})

// const Summarylist = (props) => {
//   return (

//         <View style={{ marginTop: 20 }}>

//             <FlatList
//                 style={{ height: 650, marginHorizontal: 5 }}
//                 data={props.dom}
//                 // horizontal={true}
//                 renderItem={({ item }) => {
//                     return (


//                         <View style={{
//                             flexDirection: 'row',
//                             marginLeft: '5%', marginRight: '5%', marginTop: '5%'
//                         }}>
//                             <TouchableOpacity style={{ width: wp('8%'), height: hp('3%'), }}>
//                                 <Image source={require('../../Images/avatar_4.jpg')} style={{
//                                     height: hp('5%'), width: wp('10%'), borderRadius: 30,
//                                 }} />
//                             </TouchableOpacity>

//                             <View style={{
//                                 backgroundColor: '#F3F5F7', borderRadius: 10,
//                                 width: wp('68%'), marginLeft: ('7%')
//                             }}>
//                                 <View style={{ margin: ('5%') }}>
//                                     <TouchableOpacity>
//                                         <Text style={{ fontWeight: 'bold', color: 'black' }}>kartik aryan</Text>
//                                     </TouchableOpacity>
//                                     <Text style={{ fontSize: 12, color: '#637381' }}>{item.time} </Text>
//                                     <Text style={{ color: '#637381', marginTop: ('5%') }}>{item.text}</Text>
//                                 </View>
//                             </View>
//                         </View>)
// }}
// />
// </View>
// )
// }