import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../Header';
import Heading1 from '../Profile/Heading1';
import Data_P from '../Profile/Data_P';
import Underline from 'react-native-vector-icons/Feather';
import List from 'react-native-vector-icons/FontAwesome';
import Image from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const NewPost = ({navigation}) => {
  const [post, onChangePost] = useState('');
  const [des, onChangeDes] = useState('');
  const [con, onChangeCon] = useState('');
  const [meta, onChangeMeta] = useState('');

  const richText = React.useRef();

  // this is our post screen

  const Input = props => {
    return (
      <View
        style={{
          width: wp('85%'),
          marginTop: '5%',
          // marginLeft: '3%',
          height: hp('15%'),
          borderRadius: 10,
          borderWidth: 1.5,
          borderColor: '#ECECEC',
          fontSize: 15,
        }}>
        <TextInput
          placeholderTextColor={'#C4C4C4'}
          placeholder={props.place}
          multiline={true}
          onChangeText={props.onChan}
          value={props.val}
        />
      </View>
    );
  };

  const Input_2 = props => {
    return (
      <View>
        <TextInput
          // style={props.whi}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={props.title}
          placeholderTextColor={'#C4C4C4'}
          backgroundColor="white"
          onChangeText={props.change}
          value={props.vale}
          style={{
            borderColor: 'black',
            borderRadius: 10,
            // marginLeft: '3%',
            height: hp('7.7%'),
            fontSize: 15,
            marginTop: '4%',
            borderWidth: 1.5,
            width: wp('85%'),
            borderColor: '#ECECEC',
          }}
        />
      </View>
    );
  };

  const Toggle = props => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
      <View style={{flexDirection: 'row', marginRight: '3%'}}>
        <Text
          style={{
            color: '#212B36',
            fontSize: 15,
            marginTop: '5%',
            marginLeft: '3%',
            // marginRight: '43%',
          }}>
          {props.text}
        </Text>
        <Switch
          trackColor={{false: '#F45CA5', true: '#F45CA5'}}
          thumbColor={isEnabled ? '#c34984' : '#c34984'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{
            marginLeft: '50%',
            marginTop: '4%',
          }}
        />
      </View>
    );
  };

  // main

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{padding: '5%'}}>
          <Header />
          <Heading1
            sName={Data_P[1].sName}
            h1={Data_P[1].h1}
            userName={Data_P[1].userName}
          />

          <View style={styles.input}>
            <Input_2
              title="Post"
              vale={post}
              onChange={onChangePost}
              
            />
            <Input place="Description" onChan={onChangeDes} val={des} />

            <Text style={styles.title}>Content</Text>

            <View
              style={{
                backgroundColor: 'white',
                width: wp('85%'),
                marginTop: '5%',
                // marginLeft: '3%',
                height: hp('35%'),
                borderRadius: 10,
                borderWidth: 1.5,
                borderColor: '#ECECEC',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Text style={{fontSize: 20, color: 'black'}}>Normal B</Text>
                <Underline size={25} name="underline" color="black" solid />
                <Underline size={25} name="italic" color="black" solid />
                <List size={25} name="list-ul" color="black" solid />
                <List size={25} name="list-ul" color="green" solid />
                <List size={25} name="list-ol" color="black" solid />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginTop: '2%',
                }}>
                <List size={25} name="list-ol" color="green" solid />
                <Image size={25} name="image" color="black" solid />
                <Icon size={25} name="format-clear" color="black" solid />

                <Icon size={25} name="theaters" color="black" solid />
                <List size={25} name="link" color="black" solid />
              </View>

              <View style={styles.hairline} />
              <TextInput
                multiline={true}
                onChangeText={onChangeCon}
                value={con}
              />
            </View>
            <Text style={styles.title}> Cover </Text>
            <View
              style={{
                backgroundColor: '#F7F8FA',
                width: wp('85%'),
                marginTop: '5%',
                // marginLeft: '3%',
                height: hp('45%'),
                borderRadius: 10,
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <ImageBackground
                  source={require('../../Images/Drag.png')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '4%',
                    width: wp('50%'),
                    height: hp('20%'),
                    opacity: 150,
                  }}></ImageBackground>
              </View>
              <View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    marginTop: '5%',
                    marginLeft: '3%',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  Drop or Select File
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    marginTop: '5%',
                    marginLeft: '8%',
                    alignSelf: 'center',
                  }}>
                  Drop Files here or
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    alignSelf: 'center',
                    marginHorizontal: '1%',
                  }}>
                  click here to{' '}
                  <Text
                    style={{color: '#F45CA5', textDecorationLine: 'underline'}}>
                    browse
                  </Text>{' '}
                  through your machine
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.input}>
            <Toggle text="Publish                    " />

            <Toggle text="Enable Comments" />

            <View
              style={{
                margin: 5,
                justifyContent: 'space-evenly',
                flexDirection: 'column',
              }}>
              <Input_2 title="Tags" whi={styles.new} change />
              <Input_2 title="Meta Title" />
              <Input
                place="Meta Description"
                onChan={onChangeMeta}
                val={meta}
              />
              <Input_2 title="Meta Keyword" />
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={[styles.btn, {backgroundColor: 'white'}]}>
                <Text style={[styles.texts, {color: 'black'}]}>Preview</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btn, {backgroundColor: '#F45CA5'}]}
                onPress={() => {
                  navigation.navigate('Posts');
                }}>
                <Text style={[styles.texts, {color: 'white'}]}>Post</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    width: wp('90%'),
    padding: '2%',
    marginTop: '8%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#F7F8FA',
    bottom: 10,
  },

  input1: {
    borderColor: 'black',
    borderRadius: 10,
    marginLeft: '3%',
    height: hp('7.7%'),
    fontSize: 15,
    width: wp('75%'),
    borderWidth: 1,
    borderColor: '#ECECEC',
  },
  hairline: {
    marginTop: '1%',
    backgroundColor: '#A2A2A2',
    height: hp('0.2%'),
    width: wp('75%'),
  },
  btn: {
    height: hp('8%'),
    width: wp('40%'),

    borderRadius: 15,
    alignItems: 'center',
    // alignContent:'center',
    alignSelf: 'center',
    marginRight: '6%',
    marginTop: '5%',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#ECECEC',
  },
  texts: {
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  title: {
    color: '#6C7B88',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: '5%',
    marginLeft: '3%',
  },
  container: {
    marginLeft: '80%',

    // alignSelf:'flex-end'
  },
});
export default NewPost;

// import React, { Component } from 'react';
// import { View, StyleSheet, Keyboard
// , TouchableWithoutFeedback, Text
// , KeyboardAvoidingView } from 'react-native';

// import  CNRichTextEditor , { CNToolbar, getInitialObject , getDefaultStyles } from "react-native-cn-richtext-editor";

// const defaultStyles = getDefaultStyles();

// class App extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             selectedTag : 'body',
//             selectedStyles : [],
//             value: [getInitialObject()]
//         };

//         this.editor = null;
//     }

//     onStyleKeyPress = (toolType) => {
//         this.editor.applyToolbar(toolType);
//     }

//     onSelectedTagChanged = (tag) => {
//         this.setState({
//             selectedTag: tag
//         })
//     }

//     onSelectedStyleChanged = (styles) => {
//         this.setState({
//             selectedStyles: styles,
//         })
//     }

//     onValueChanged = (value) => {
//         this.setState({
//             value: value
//         });
//     }

//     render() {
//         return (
//             <KeyboardAvoidingView
//             behavior="padding"
//             enabled
//             keyboardVerticalOffset={0}
//             style={{
//                 flex: 1,
//                 paddingTop: 20,
//                 backgroundColor:'#eee',
//                 flexDirection: 'column',
//                 justifyContent: 'flex-end',
//             }}
//             >
//                 <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
//                     <View style={styles.main}>
//                         <CNRichTextEditor
//                         underline={true}
//                             ref={input => this.editor = input}
//                             onSelectedTagChanged={this.onSelectedTagChanged}
//                             onSelectedStyleChanged={this.onSelectedStyleChanged}
//                             value={this.state.value}
//                             style={{ backgroundColor : '#fff',height:100,}}
//                             styleList={defaultStyles}
//                             onValueChanged={this.onValueChanged}
//                         />
//                     </View>
//                 </TouchableWithoutFeedback>

//                 <View style={{
//                     minHeight: 35
//                 }}>

//                     <CNToolbar
//                                 style={{
//                                     height:35,
//                                 }}
//                                 iconSetContainerStyle={{
//                                     flexGrow: 1,
//                                     justifyContent: 'space-evenly',
//                                     alignItems: 'center',
//                                 }}
//                                 size={30}
//                                 iconSet={[
//                                     {
//                                         type: 'tool',
//                                         iconArray: [{
//                                             toolTypeText: 'image',
//                                             iconComponent:
//                                                 <Text style={styles.toolbarButton}>
//                                                 image
//                                                 </Text>
//                                         }]
//                                     },
//                                     {
//                                         type: 'tool',
//                                         iconArray: [{
//                                             toolTypeText: 'bold',
//                                             buttonTypes: 'style',
//                                             iconComponent:
//                                                 <Text style={styles.toolbarButton}>
//                                                 bold
//                                                 </Text>
//                                         }]
//                                     },
//                                     {
//                                         type: 'seperator'
//                                     },
//                                     {
//                                         type: 'tool',
//                                         iconArray: [
//                                             {
//                                                 toolTypeText: 'body',
//                                                 buttonTypes: 'tag',
//                                                 iconComponent:
//                                                     <Text style={styles.toolbarButton}>
//                                                     body
//                                                     </Text>
//                                             },
//                                         ]
//                                     },
//                                     {
//                                         type: 'tool',
//                                         iconArray: [
//                                             {
//                                                 toolTypeText: 'ul',
//                                                 buttonTypes: 'tag',
//                                                 iconComponent:
//                                                     <Text style={styles.toolbarButton}>
//                                                     ul
//                                                     </Text>
//                                             }
//                                         ]
//                                     },
//                                     {
//                                         type: 'tool',
//                                         iconArray: [
//                                             {
//                                                 toolTypeText: 'ol',
//                                                 buttonTypes: 'tag',
//                                                 iconComponent:
//                                                     <Text style={styles.toolbarButton}>
//                                                     ol
//                                                     </Text>
//                                             }
//                                         ]
//                                     },
//                                 ]}
//                                 selectedTag={this.state.selectedTag}
//                                 selectedStyles={this.state.selectedStyles}
//                                 onStyleKeyPress={this.onStyleKeyPress}
//                             />
//                 </View>
//         </KeyboardAvoidingView>
//         );
//     }

// }
// const styles = StyleSheet.create({
//     main: {
//         flex: 1,
//         height:10,
//         marginTop: 10,
//         paddingLeft: 30,
//         paddingRight: 30,
//         paddingBottom: 1,
//         alignItems: 'stretch',

//     },
//     toolbarButton: {
//         fontSize: 20,
//         width: 28,
//         height: 28,
//         // textAlign: 'center'
//     },
//     italicButton: {
//         fontStyle: 'italic'
//     },
//     boldButton: {
//         fontWeight: 'bold'
//     },
//     underlineButton: {
//         textDecorationLine: 'underline'
//     },
//     lineThroughButton: {
//         textDecorationLine: 'line-through'
//     },
// });

// export default App;
