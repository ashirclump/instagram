import {View, Text, StyleSheet, Image, TouchableOpacity,FlatList} from 'react-native';
import React ,{useState,useEffect} from 'react';
import Commenting from 'react-native-vector-icons/FontAwesome';
import Share from 'react-native-vector-icons/Entypo';
import Eye from 'react-native-vector-icons/Ionicons';

// This is our post component only not screen

const Blog_Post = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      
    };

    fetch(
      // 'http://35.88.83.10/blog_view/',
      'http://10.0.2.2:8000/blog_view/',

      requestOptions,
    ).then(resp => {
      resp.json().then(resp => {
        console.log(resp);
        setBlog(resp);
      });
    });
  }, []);


  return (
    <View >
    <FlatList
    style={{ width: 400}}
    
    data={blog}
    
    keyExtractor={item => item._id}
    listKey="YourListName"
    renderItem={({item}) => 
    <View style={styles.main1}>
      <Image
        style={{
          width: '100%',
          height: 280,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
        source={require('../../Images/market.jpg')}
      />
      <Text style={{color: '#919EAB', marginTop: '10%', marginLeft: '5%'}}>
        {item.created_date}
      </Text>
      <Text style={{color: 'black', marginTop: '3%', marginLeft: '5%'}}>
        {item.blog_name}
      </Text>
      <Text style={{color: 'black', marginTop: '3%', marginLeft: '5%'}}>
        {item.tag_name}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginLeft: '40%',
          marginTop: '5%',
          marginBottom: '5%',
        }}>
        <TouchableOpacity style={{}}>
          <Commenting name="commenting" size={15} color="#637381" />
        </TouchableOpacity>
        <Text>6.14k</Text>
        <TouchableOpacity style={{}}>
          <Eye name="eye-sharp" size={15} color="#7E8B98" solid />
        </TouchableOpacity>
        <Text>9.62k</Text>
        <TouchableOpacity style={{}}>
          <Share name="share" size={15} color="#7E8B98" solid />
        </TouchableOpacity>
        <Text>1.9k</Text>
      </View>
      </View>
    }
    />
    </View>
  );
};

export default Blog_Post;

const styles = StyleSheet.create({
  main1: {
    backgroundColor: 'white',
    width: '100%',
    marginTop: 10,
    elevation: 1,
    marginBottom: 10,
    borderRadius: 20,
  },
});
