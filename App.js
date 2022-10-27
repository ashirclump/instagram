import React,{useEffect,useState} from 'react';
import Login from './components/Screens/Login';
// import Input_1 from './components/Input_1';
// import SignUp from './components/Screens/SignUp';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './components/Screens/Profile';
import SignUp from './components/Screens/SignUp';
import Posting from './components/Profile/Posting';




import NewPost from './components/Blog/NewPost';
import Posts from './components/Blog/Posts';
import MyDrawer from './components/MyDrawer';
import Forgot from './components/Screens/Forgot';
// import Splash from './components/Screens/Splash';
import Aboutpost from './components/Screens/Aboutpost'
import Linkpost from './components/Screens/Linkpost'
import Pic from './components/Screens/Pic'
import Splash from './components/Screens/Splash'

import AsyncStorage from '@react-native-async-storage/async-storage';



const Stack = createNativeStackNavigator();

const App = () => {


  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="MyDrawer" component={MyDrawer} />
        <Stack.Screen name="Aboutpost" component={Aboutpost} />
        <Stack.Screen name="Linkpost" component={Linkpost} />
        <Stack.Screen name="Pic" component={Pic} />

      </Stack.Navigator>
  </NavigationContainer>
  // <NavigationContainer>
  //   <MyDrawer/>
  // </NavigationContainer>
 
    

  );
};


export default App;

