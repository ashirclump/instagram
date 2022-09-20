import React from 'react';
import Login from './components/Screens/Login';
// import Input_1 from './components/Input_1';
// import SignUp from './components/Screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './components/Screens/Profile';
import NewPost from './components/Blog/NewPost';
// import Posting from './components/Profile/Posting'




const Stack = createNativeStackNavigator();

const App = () => {
  return (
  //   <NavigationContainer>
  //     <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
  //       <Stack.Screen name="Login" component={Login} />
  //       <Stack.Screen name="SignUp" component={SignUp} />
  //       <Stack.Screen name="Posting" component={Posting} />
  //     </Stack.Navigator>
  // </NavigationContainer>
  <NewPost/>
  // <Profile/>

  );
};


export default App;

