import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Dot from 'react-native-vector-icons/Entypo';

const Heading1 = (props) => {
  return (
    <View style={{ marginTop: ('12%') }}>
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>Profile</Text>
              <View style={{ flexDirection: 'row', marginTop: ('5%') }}>
                <TouchableOpacity>
                                <Text style={{ color: 'black' }}>Dashboard</Text>
                </TouchableOpacity>
                            <Dot name="dot-single" size={22} color="#637381" />
                <TouchableOpacity>
                                <Text style={{ color: 'black' }}>User</Text>
                </TouchableOpacity>
                            <Dot name="dot-single" size={22} color="#637381" />
                <TouchableOpacity>
                                <Text style={{color:'#637381'}}>{props.sName}</Text>
                </TouchableOpacity>
               </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default Heading1;
