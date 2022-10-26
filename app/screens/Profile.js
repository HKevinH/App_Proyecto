import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import StringsOfLanguages from '@components/StringsOfLanguages';
import {styles} from "@styles/General";
import { LoginManager, AccessToken, AuthenticationToken, LoginButton, Profile} from 'react-native-fbsdk-next';

const ProfileScreen = () => {
  return (
    <View style={{marginHorizontal: 10, marginTop: 60}}>
<LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
          <Text>Welcome</Text>
          </View>
);
}
export default ProfileScreen;