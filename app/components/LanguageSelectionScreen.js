import React, {useEffect} from 'react';
import {Pressable, SafeAreaView, View, Text, ScrollView, Image, StyleSheet, ImageBackground} from 'react-native';
import StringsOfLanguages from '@components/StringsOfLanguages';
import {screenLanguage, ButtonLanguage, ButtonFB } from '@styles/General';
const LanguageSelectionScreen = ({navigation}) => {
  const lang = [
    {shortform: 'es', longform: 'Spanish'},
    {shortform: 'en', longform: 'English'},
  ];
 
  const settext = (value) => {
    StringsOfLanguages.setLanguage(value);
    navigation.navigate('LoginScreen', {selectedLanguage: value});
  };
 
  return (
    <ImageBackground source={require('../resources/1.png')} style={screenLanguage.images}>
    <SafeAreaView style={{flex: 1}}>
      <View style={screenLanguage.container}>
        <Text style={screenLanguage.headingStyle}>
          {StringsOfLanguages.language}
        </Text>
        {lang.map((item, key) => (
            <View style={screenLanguage.container2} key={key}>                
              <ButtonLanguage onPress={async () => settext(item.shortform)} 
              />
              <Text
                onPress={() => settext(item.shortform)}
                style={screenLanguage.textStyle}>
                {item.longform}
              </Text>
            </View>
          ))}
      </View>

    </SafeAreaView>
    </ImageBackground>
  );
};
 
export default LanguageSelectionScreen;