import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, TextInput, ImageBackground } from 'react-native'
import Search from 'react-native-vector-icons/Feather';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Bell from 'react-native-vector-icons/FontAwesome';
import Friend from 'react-native-vector-icons/FontAwesome5';
import Dot from 'react-native-vector-icons/Entypo';
import Dot3 from 'react-native-vector-icons/Entypo';
import Person from 'react-native-vector-icons/Ionicons';
import Heart from 'react-native-vector-icons/Entypo';
import Right from 'react-native-vector-icons/Entypo';
import Share from 'react-native-vector-icons/Entypo';
import Location from 'react-native-vector-icons/Ionicons';
import Option from 'react-native-vector-icons/Ionicons';
import Email from 'react-native-vector-icons/MaterialIcons';
import Bag from 'react-native-vector-icons/MaterialIcons';
import Linkedin from 'react-native-vector-icons/Entypo';
import Twitter from 'react-native-vector-icons/Entypo';
import Insta from 'react-native-vector-icons/Entypo';
import Facebook from 'react-native-vector-icons/Entypo';
import { useState } from 'react';
import Photo from 'react-native-vector-icons/MaterialIcons';
import Attach from 'react-native-vector-icons/Ionicons';
import Smile from 'react-native-vector-icons/Fontisto';
import Send from 'react-native-vector-icons/Ionicons';
import Navi from 'react-native-vector-icons/EvilIcons';


// This is for backup profile screen 

const Profile = () => {

    const [text, onChangeText] = useState();

    return (

        <SafeAreaView style={{backgroundColor:'#F2F1F0'}}>
            <ScrollView >



                <View style={{ flex: 1, padding: ('4%') }}>



                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{}}>
                            <Navi name="navicon" size={40} color="#637381" />

                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: ('1%'), width: wp('8%'), height: hp('3%'), marginLeft: ('2%') }}>
                            <Search name="search" size={25} color="#637381" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: ('1%'), width: wp('8%'), height: hp('3%'), marginLeft: ('33%') }}>
                            <Image source={require('../../Images/Flag.png')} style={{ width: wp('8%'), height: hp('3%'), }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginTop: ('1%'), width: wp('8%'), height: hp('3%'), marginLeft: ('4%') }}>
                            <Bell name="bell" size={22} color="#637381" />
                        </TouchableOpacity>


                        <TouchableOpacity style={{ marginTop: ('1%'), width: wp('8%'), height: hp('3%'), marginLeft: ('2%') }}>
                            <Friend name="user-friends" size={20} color="#637381" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: wp('8%'), height: hp('3%'), marginLeft: ('2%') }}>
                            <Image source={require('../../Images/minimal_avatar.jpg')} style={{
                                height: hp('5%'), width: wp('10%'), borderRadius: 30,

                            }} />
                        </TouchableOpacity>
                    </View>




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
                                <Text style={{color:'#637381'}}>MyApp UI</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


        <View style={{ width: wp('91%'), backgroundColor: 'white', borderRadius: 20, marginTop: ('8%'),elevation:5 }}>

                        <ImageBackground source={require('../../Images/cover_22.jpg')}
                            style={{
                                justifyContent: 'center', alignItems: 'center',
                                width: wp('91%'), height: hp('30%'), opacity: 150,
                            }}>
                            <TouchableOpacity>
                                <Image source={require('../../Images/minimal_avatar.jpg')}
                                    style={{
                                        height: hp('15%'), width: wp('30%'), borderRadius: 70, borderColor: 'white'
                                        , borderWidth: wp('.5%')
                                    }} />
                            </TouchableOpacity>
                            <Text style={{
                                color: 'white', fontWeight: 'bold', fontSize: 20
                            }}>MyApp UI</Text>
                            <Text style={{
                                color: '#C4C4C4', fontWeight: 'bold', fontSize: 15
                            }}>UI Designer</Text>
                        </ImageBackground>


                        <View style={{ flexDirection: 'row', marginTop: ('4%'), marginBottom: ('4%'),}}>
                        <View style={{width:wp('40%'),  flexDirection:'row',justifyContent:'center'}}>    
                            <Person style={{
    
                                backgroundColor: '#637381', borderRadius: 5
                            }} size={18} name="person" color="white" />
                            <TouchableOpacity style={{ marginLeft: ('4%') }}>
                                <Text style={{color:'#637381'}}>Profile</Text>
                            </TouchableOpacity>
                            </View>
                            <View style={{width:wp('40%'),  flexDirection:'row'}}>
                            <Heart size={18}
                                name="heart" color="#637381" />
                            <TouchableOpacity style={{ marginLeft: ('4%') }}>
                                <Text style={{color:'#637381'}}>Followers</Text>
                            </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={{}}>
                                <Right size={18} name="chevron-right" color="#637381" />
                            </TouchableOpacity>
                        </View>


                    </View>






    <View style={{ width: wp('91%'), backgroundColor: 'white', borderRadius: 20, marginTop: ('8%') 
                ,elevation:5}}>
                        <Text style={{
                            fontSize: 16, fontWeight: 'bold',color:'#637381',
                            marginLeft: ('5%'), marginTop: ('10%')
                        }}>About</Text>
                        <Text style={{ marginLeft: ('5%'), marginTop: ('5%'), 
                        color:'#637381',width: wp('81%'),marginRight: ('5%') }}>
                            Science is a systematic enterprise that builds and organizes knowledge in the form of testable explanations and predictions about the universe.</Text>

                        <View style={{ flexDirection: 'row', marginLeft: ('5%'), marginTop: ('5%') }}>
                            <Location size={18} name="ios-location" color="#637381" solid />
                            <Text style={{ marginLeft: ('5%'),color:'#637381' }}>Live at</Text>
                            <Text style={{ marginLeft: ('2%'), fontWeight: 'bold',color:'#637381' }}>India</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: ('5%'), marginTop: ('5%') }}>
                            <Email style={{}} size={18} name="email" color="#637381" solid />
                            <Text style={{ marginLeft: ('5%'),color:'#637381' }}>abc@gmail.com</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: ('5%'), marginTop: ('5%') }}>
                            <Bag style={{}} size={18} name="shopping-bag" color="#637381" solid />
                            <Text style={{ marginLeft: ('5%') ,color:'#637381'}}>Manager at</Text>
                            <Text style={{ marginLeft: ('2%'), fontWeight: 'bold',color:'#637381' }}>future_company</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: ('5%'), marginTop: ('5%') }}>
                            <Bag style={{}} size={18} name="shopping-bag" color="#637381" solid />
                            <Text style={{ marginLeft: ('5%') ,color:'#637381'}}>Studied at</Text>
                            <Text style={{ marginLeft: ('2%'), fontWeight: 'bold', 
                            color:'#637381',marginBottom: ('8%') }}>XYZ_institution</Text>
                        </View>

                    </View>

     <View style={{elevation:5, width: wp('91%'), backgroundColor: 'white', borderRadius: 20, marginTop: ('8%') }}>
                        <Text style={{
                            fontSize: 16, fontWeight: 'bold',color:'#637381',
                            marginLeft: ('5%'), marginTop: ('10%')
                        }}>Social</Text>

                        <View style={{ flexDirection: 'row', marginLeft: ('5%'), marginTop: ('5%') }}>
                            <Linkedin style={{}} size={18} name="linkedin" color="#006097" solid />
                            <Text style={{ marginLeft: ('5%'),color:'#637381' }}>https://www.linkedin.com/in/amitabh</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: ('5%'), marginTop: ('5%') }}>
                            <Twitter style={{}} size={18} name="twitter" color="#1C9CEA" solid />
                            <Text style={{ marginLeft: ('5%'),color:'#637381' }}>https://www.twitter.com/amitabh</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: ('5%'), marginTop: ('5%') }}>
                            <Insta style={{}} size={18} name="instagram" color="#D7336D" solid />
                            <Text style={{ marginLeft: ('5%'),color:'#637381' }}>https://www.instagram.com/amitabh</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: ('5%'), marginTop: ('5%') }}>
                            <Facebook style={{}} size={18} name="facebook" color="#1877F2" solid />
                            <Text style={{ marginLeft: ('5%'), marginBottom: ('8%'),color:'#637381' }}>https://www.facebook.com/amitabh</Text>
                        </View>

                    </View>


    <View style={{elevation:5, width: wp('91%'), backgroundColor: 'white', borderRadius: 20, marginTop: ('8%') }}>
                        <View style={{
                            borderWidth: wp('.1%'), alignSelf: 'center', width: wp('80%'),
                            borderColor: '#DCE0E4', marginTop: ('8%'), height: hp('15%'), borderRadius: 10
                        }}>
                            <TextInput
                                placeholder='Share what you are thinking here'
                                placeholderTextColor={'#C4C4C4'}
                                multiline={true}
                                style={{}}
                                onChangeText={onChangeText}
                                value={text}
                            />
                        </View>
                <View style={{  marginTop: ('5%'), width:('91%'), flexDirection:'row', marginBottom:('5%')}}>
                        <View style={{ flexDirection: 'row',width:wp('71%') }}>
                            <TouchableOpacity style={{ marginLeft: ('5%') }} >
                                <Photo size={30} name="add-photo-alternate" color="#637381" solid />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: ('5%') }}>
                                <Attach style={{}} size={30} name="attach" color="#637381" solid />
                            </TouchableOpacity>
                            </View>
                    <View style={{width:wp('20%')}}>
                            <TouchableOpacity style={{
                                backgroundColor: '#21D393',
                                borderRadius: 10, justifyContent: 'center', alignItems: 'center', height: hp('4%'),
                                width: wp('15%'), marginBottom: ('8%')
                            }}>
                                <Text style={{
                                    fontWeight: 'bold', fontSize: 16,
                                    color: '#ffffff', alignSelf: 'center',
                                }}>Post</Text>
                            </TouchableOpacity>
                        
                            </View>
                        </View>
                    </View>




     <View style={{ elevation:5,width: wp('91%'), backgroundColor: 'white', borderRadius: 20, marginTop: ('8%') }}>

                        <View style={{ flexDirection: 'row', marginTop: ('8%'), marginLeft: ('5%') }}>
                            <TouchableOpacity style={{ width: wp('8%'), height: hp('3%'), }}>
                                <Image source={require('../../Images/minimal_avatar.jpg')} style={{
                                    height: hp('5%'), width: wp('10%'), borderRadius: 30,
                                }} />
                            </TouchableOpacity>
                            <View style={{ marginLeft: ('5%') }}>
                                <TouchableOpacity>
                                    <Text style={{ fontWeight: 'bold', color: 'black' }}>Amitabh UI</Text>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 12,color:'#637381' }}>25 August 2022 </Text>
                            </View>
                            <TouchableOpacity>
                                <Dot3 style={{ marginLeft: ('67%') }} size={18} name="dots-three-vertical" color="#637381" solid />
                            </TouchableOpacity>
                        </View>

                        <Text style={{ fontSize: 16, marginTop: ('8%'), margin: ('5%'),color:'#637381'}}>
                            Assumenda nam repudiandae rerum fugiat vel maxime.</Text>
                        <Image source={require('../../Images/feed_1.jpg')}
                            style={{
                                width: wp('81%'), height: hp('25%'), marginLeft: ('5%'),
                                borderRadius: 5
                            }} />

                        <View style={{ flexDirection: 'row', marginTop: ('8%'), marginLeft: ('5%') }}>
                            <TouchableOpacity style={{ borderRadius: 4 }}>
                                <Heart size={25}
                                    name="heart" color="#FF4842" />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 16, marginLeft: ('2%'),color:'black' }}>36</Text>
                            <TouchableOpacity style={{
                                height: hp('3.5%'), width: wp('7%'), borderRadius: 30,
                                borderWidth: wp('.3%'), borderColor: 'white',
                                marginLeft: ('17%'), position: 'absolute'
                            }}>
                                <Image source={require('../../Images/avatar_3.jpg')}
                                    style={{
                                        height: hp('3.5%'), width: wp('7%'), borderRadius: 30,
                                        position: 'absolute'
                                    }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                height: hp('3.5%'), width: wp('7%'), borderRadius: 30,
                                borderWidth: wp('.3%'), borderColor: 'white',
                                marginLeft: ('23%'), position: 'absolute'
                            }}>
                                <Image source={require('../../Images/avatar_4.jpg')}
                                    style={{
                                        height: hp('3.5%'), width: wp('7%'), borderRadius: 30,
                                        position: 'absolute'
                                    }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                height: hp('3.5%'), width: wp('7%'), borderRadius: 30,
                                borderWidth: wp('.3%'), borderColor: 'white',
                                marginLeft: ('29%'), position: 'absolute'
                            }}>
                                <Image source={require('../../Images/avatar_5.jpg')}
                                    style={{ height: hp('3.5%'), width: wp('7%'), borderRadius: 30 }} />
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                height: hp('4%'), width: wp('7.5%'), borderRadius: 30,
                                backgroundColor: '#BEF6C7', marginLeft: ('21%'), borderWidth: wp('.3%'), borderColor: 'white',
                                justifyContent: 'center'
                            }}>

                                <Text style={{
                                    color: '#70D798', fontSize: 14, fontWeight: 'bold',
                                }}>+33</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                height: hp('2%'), width: wp('4%'), backgroundColor: '#BEF6C7'
                                , marginLeft: ('35%')
                            }}>
                                <Image source={require('../../Images/msg.png')}
                                    style={{
                                        height: hp('2%'), width: wp('4%')
                                    }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: ('5%') }} >
                                <Share size={16}
                                    name="share" color="#637381" />
                            </TouchableOpacity>
                        </View>








                        <View style={{ flexDirection: 'row',
                                    marginLeft:'5%',marginRight:'5%',marginTop:'5%'}}>
                            <TouchableOpacity style={{ width: wp('8%'), height: hp('3%'), }}>
                                <Image source={require('../../Images/avatar_4.jpg')} style={{
                                    height: hp('5%'), width: wp('10%'), borderRadius: 30,
                                }} />
                            </TouchableOpacity>

                            <View style={{
                                backgroundColor: '#F3F5F7', borderRadius: 10,
                                width: wp('68%'), marginLeft: ('7%')
                            }}>
                                <View style={{margin:('5%')}}>
                                    <TouchableOpacity>
                                        <Text style={{ fontWeight: 'bold', color: 'black' }}>kartik aryan</Text>
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 12 ,color:'#637381'}}>23 August 2022 </Text>
                                    <Text style={{color:'#637381', marginTop: ('5%') }}>Praesent venenatis metus at</Text>
                                </View>
                            </View>
                        </View>

                       
                       
                       
                       
                        <View style={{ flexDirection: 'row',margin: ('5%'), }}>
                            <TouchableOpacity style={{ width: wp('8%'), height: hp('3%'), }}>
                                <Image source={require('../../Images/avatar_11.jpg')} style={{
                                    height: hp('5%'), width: wp('10%'), borderRadius: 30,
                                }} />
                            </TouchableOpacity>

                            <View style={{
                                backgroundColor: '#F3F5F7', borderRadius: 10,
                                width: wp('68%'), marginLeft: ('7%')
                            }}>
                                <View style={{margin:'5%' }}>
                                    <TouchableOpacity>
                                        <Text style={{ fontWeight: 'bold', color: 'black' }}>Shahid kapoor</Text>
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 12,color:'#637381' }}>22 August 2022</Text>
                                    <Text style={{ color:'#637381', marginTop: ('5%') }}>Etiam rhoncus. Nullam vel sem. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed lectus.</Text>
                                </View>
                            </View>
                        </View>



                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <TouchableOpacity style={{
                                width: wp('8%'), height: hp('3%'),
                                marginLeft: ('5%')
                            }}>
                                <Image source={require('../../Images/minimal_avatar.jpg')} style={{
                                    height: hp('5%'), width: wp('10%'), borderRadius: 30,
                                }} />
                            </TouchableOpacity>

                            <View style={{
                                borderWidth: wp('.3%'), flexDirection: 'row', width: ('64%'),
                                height: ('57%'),
                                borderRadius: 10,
                                 marginBottom: ('8%'), marginLeft: ('6%'), borderColor: '#F4F6F8'
                            }}>
                                <TextInput
                                    placeholder='Write a comment'
                                    placeholderTextColor={'#C4C4C4'}
                                    style={{ width: wp('44%') }}

                                />
                                <TouchableOpacity>
                                    <Photo style={{ marginTop: ('50%') }} size={20} name="add-photo-alternate" color="#637381" solid />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Smile style={{ marginLeft: ('12%'), marginTop: ('20%') }} size={20} name="smiley" color="#637381" solid />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity>
                                <Send style={{ marginLeft: ('20%'), marginTop: ('10%') }} size={20} name="send" color="#637381" solid />
                            </TouchableOpacity>
                        </View>
                        <View>
                        </View>
                    </View>








                </View>

            </ScrollView>
            <TouchableOpacity style={{
                marginTop: 350, position: 'absolute', alignSelf: 'flex-end'
                , backgroundColor: '#FFFFFF', opacity: 0.7, height: 50, width: 50, borderRadius: 30
            }}>

                <Option style={{ alignSelf: 'center', marginTop: 6 }} name="options" size={35} color="#637381" />
            </TouchableOpacity>

        </SafeAreaView>


    )
};

export default Profile;