import React, {useEffect} from 'react';
import {Pressable, SafeAreaView, View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import StringsOfLanguages from '@components/StringsOfLanguages';

const LanguageSelectionScreen = ({navigation}) => {
  const lang = [
    {shortform: 'es', longform: 'Spanish'},
    {shortform: 'en', longform: 'English'},
  ];
 
  const settext = (value) => {
    StringsOfLanguages.setLanguage(value);
    navigation.navigate('HomeScreen', {selectedLanguage: value});
  };
 
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.headingStyle}>
          {StringsOfLanguages.language}
        </Text>
          {lang.map((item, key) => (
            <View style={styles.elenoxentContainer} key={key}>
              <Text
                onPress={() => settext(item.shortform)}
                style={styles.textStyle}>
                {item.longform}
              </Text>
              <View/>
            </View>
          ))}
      </View>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  headingStyle: {
    marginTop: 80,
    color: '#191919',
    fontSize: 60,
    fontFamily: 'Poppins-ExtraBold',
  },
  elementContainer: {
    width: '100%',
    marginTop: 30,
    textAlign: 'left',
  },
  textStyle: {
    marginLeft: 15,
    marginRight: 15,
    color: '#191919',
    fontFamily: 'Poppins-Medium',
    fontSize: 25,
  },
});
 
export default LanguageSelectionScreen;