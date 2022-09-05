import { View, Text,TextInput,TouchableOpacity,StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, {useState}from 'react';
import Photo from 'react-native-vector-icons/MaterialIcons';
import Attach from 'react-native-vector-icons/Ionicons';


const PostType = () => {

    const [text, onChangeText] = useState();
  return (
    <View style={styles.main}>
         <View style={{ marginTop: ('8%'), borderColor: 'black', borderWidth: 1, borderRadius: 10,borderColor: '#ECECEC', 
         width:wp('80%'),backgroundColor:'white',elevation:2,height:hp('20%'),fontSize: 15, marginLeft:('5%')}}>
                    <TextInput
                     placeholder='Share what you are thinking here'
                     multiline={true}
                     onChangeText={onChangeText}
                     value={text} />
         </View>
            <View style={{ width:('90%'), flexDirection:'row',marginLeft:('5%'), marginBottom:('5%'), marginTop:('5%')}}>
                        <View style={{ flexDirection: 'row',width:wp('65%')}}>
                            <TouchableOpacity style={{}} >
                                <Photo size={30} name="add-photo-alternate" color="#637381" solid />
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft:('5%')}}>
                                <Attach style={{}} size={30} name="attach" color="#637381" solid />
                            </TouchableOpacity>
                        </View>
                        <View style={{width:wp('15%')}}>
                            <TouchableOpacity style={{
                                backgroundColor: '#21D393',
                                borderRadius: 10, justifyContent: 'center', alignItems: 'center', height: hp('4%'),
                                width: wp('15%'), marginBottom: ('8%')}}>
                                         <Text style={{
                                    fontWeight: 'bold', fontSize: 16,
                                    color: '#ffffff', alignSelf: 'center',
                                }}>Post</Text>
                            </TouchableOpacity>
              </View>
          </View>
        </View>
  );
};
const styles = StyleSheet.create({
    main:{
        width: wp('90%'), backgroundColor: 'white', borderRadius: 20,
    },
});


export default PostType;