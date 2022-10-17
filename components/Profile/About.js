import { StyleSheet, Text, View ,FlatList,TouchableOpacity,Image} from 'react-native'
import React ,{useEffect,useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Location from 'react-native-vector-icons/Ionicons';
import Email from 'react-native-vector-icons/MaterialIcons';
import Bag from 'react-native-vector-icons/MaterialIcons';
import Data_P from './Data_P';

const About = () => {

  const [subSalonforWomen, setSubSalonforWomen] = useState([]);

    useEffect(() => {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
  
      fetch(
          // 'http://35.88.83.10/user_about_view/',
          'http://10.0.2.2:8000/user_about_view/',
  
        requestOptions,
      ).then(resp => {
       
          resp.json().then(resp => {
            console.log(resp);
          setSubSalonforWomen(resp);
        });
      });
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
                <Text style={styles.txt}>Manager at</Text>
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