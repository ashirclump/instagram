import { StyleSheet, Text, View ,FlatList,TouchableOpacity,Image} from 'react-native'
import React ,{useEffect,useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Location from 'react-native-vector-icons/Ionicons';
import Email from 'react-native-vector-icons/MaterialIcons';
import Bag from 'react-native-vector-icons/MaterialIcons';
import Data_P from './Data_P';
import AsyncStorage from '@react-native-async-storage/async-storage';

const About = () => {

  const [subSalonforWomen, setSubSalonforWomen] = useState([]);

  const postUser = async () => {
    // const dataToken = await AsyncStorage.getItem('user');
    // const token = await AsyncStorage.getItem('access');
    let parsed = await AsyncStorage.getItem('resp');  
     
    let tokens = JSON.parse(parsed);
    
    const token=tokens.access
    // console.log("user",token) 
      //  const user= dataToken;
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
          // 'http://35.88.83.10/user_about_view/',
          'http://35.90.113.221/user_about_view/',
  
        requestOptions,
      ).then(respp => {
        respp.json().then(async(respp)=> {
           setSubSalonforWomen(respp)
          if (respp) {
           
            await AsyncStorage.setItem('respp',JSON.stringify(respp));
            // console.log(respp);
            // alert(result.data.message);
            // alert(respp[0].user);
            // console.log(respp[0].user);
           
            // navigation.replace('MyDrawer');
          }
          else{
            // alert("network error");
          }          
            console.log("about",respp);
          
        });
      });
    }
    useEffect(() => {
      postUser();
    }, []);
  return (
    <View style={styles.main}>
    <Text style={{
      fontSize: 16, fontWeight: 'bold',color:'#637381',
      marginLeft: ('5%'), marginTop: ('10%')
  }}>About</Text>
    <FlatList
    style={{ width: 400}}
    
    data={subSalonforWomen}
    
    keyExtractor={item => item._id}
    listKey="YourListName"
    renderItem={({item}) => (
      <View>
     
    <View >
            
            <Text style={{ marginLeft: ('5%'), marginTop: ('5%'), 
            color:'#637381',width: wp('81%'),marginRight: ('5%') }}>
              {item.description}</Text>

            <View style={styles.link}>
                <Location size={18} name="ios-location" color="#637381" solid />
                <Text style={styles.txt}>Live at</Text>
                <Text style={styles.txt1}>{item.location}</Text>
            </View>

            <View style={styles.link}>
                <Email size={18} name="email" color="#637381" solid />
                <Text style={styles.txt}>{item.email}</Text>
            </View>

            <View style={styles.link}>
                <Bag size={18} name="shopping-bag" color="#637381" solid />
                <Text style={styles.txt}>Worked at</Text>
                <Text style={styles.txt1}>{item.workad_at}</Text>
            </View>

            <View style={styles.link}>
                <Bag size={18} name="shopping-bag" color="#637381" solid />
                <Text style={styles.txt }>Studied at</Text>
                <Text style={{ marginLeft: ('2%'), fontWeight: 'bold', 
                color:'#637381',marginBottom: ('8%') }}>{item.Studied_at}</Text>
            </View>
            
                    </View>
                    </View>
                    )}
/>
</View>
  );
}

export default About

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