import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NewPost from './Blog/NewPost';
import Posts from './Blog/Posts';
import Posting from '../components/Profile/Posting';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Profile from './Screens/Profile';
import Blog_Post from './Blog/Blog_Post';
import PostDetail from './Blog/PostDetail';




const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
   
      <Drawer.Navigator   screenOptions={{headerShown:false}} initialRouteName={{Posts}}>
      <Drawer.Screen name="Posts" component={Posts} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="NewPost" component={NewPost} />
      <Drawer.Screen name="PostDetail" component={PostDetail} />
      
    


    </Drawer.Navigator>
   
  )
};

export default MyDrawer;