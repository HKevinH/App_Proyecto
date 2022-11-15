import {screenLogin, ButtonFb, ButtonGle} from '@styles/General';
import React, { Component } from "react";
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { ButtonFB, ButtonGL} from '@styles/General';
import {Pressable, TouchableOpacity, SafeAreaView, View, Text, ScrollView, Image, StyleSheet, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Settings , AccessToken, AuthenticationToken, LoginButton, LoginManager, Profile } from 'react-native-fbsdk-next';
import StringsOfLanguages from '@components/StringsOfLanguages';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen({ }) {
    
    const navigation = useNavigation();
        function handleNext({}) {
            navigation.navigate('HomeScreen');
          }

    const HandleLoginFb = async () => {

        LoginManager.logInWithPermissions(["public_profile"], ["email"]).then(result =>
            {
                if(result.isCancelled)
                {

                }
                else {
                    Profile.getCurrentProfile().then(currentProfile => {
                    if(currentProfile)
                        console.log(currentProfile);
                    })

                    AccessToken.getCurrentAccessToken().then((data) => 
                    {
                        console.log(data?.accessToken.toString()) 
                    }
                    )
                }
            })
    }
    return (
        
        <ImageBackground source={require('../resources/2.png')} style={screenLogin.images}>    
            <SafeAreaView style={{flex: 1}}>
            <Animatable.Image
            animation = "pulse"
            easing= "ease-out-circ"
            iterationCount = "infinite"
            style={screenLogin.image2}
            source={require('../resources/dos-hojas.png')}></Animatable.Image>
            <View style={screenLogin.container}>
                <Text style={screenLogin.headingStyle}>{StringsOfLanguages.login}</Text>
                <Text style={screenLogin.textStyle}>{StringsOfLanguages.bannerlogin}</Text>
                <ButtonFB onPress={() => HandleLoginFb}>
            <Icon name="logo-facebook" size={30} color="#fff" style={screenLogin.icon}/>
                    <Text>{StringsOfLanguages.loginFB}</Text>
                </ButtonFB>
                <ButtonGL>
            <Icon name="logo-google" size={30} color="#F75747" style={screenLogin.icon}/>
                <Text style={{color: '#000'}}>{StringsOfLanguages.loginGL}</Text>
                </ButtonGL>
                <ButtonGL onPress={handleNext}>
            <Icon name="checkmark-done-outline" size={30} color="#F75747" style={screenLogin.icon}/>
                <Text style={{color: '#000'}}>{StringsOfLanguages.next}</Text>
                </ButtonGL>
            </View>

        </SafeAreaView>

        </ImageBackground>

    );
}

