import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import StringsOfLanguages from '@components/StringsOfLanguages';
 
const SettingScreen = ({route, navigation}) => {
  useEffect(() => {
    let heading = '';
    if (route.params.selectedLanguage == 'es') {
      heading = 'Selected Language Spanish';
    } else if (route.params.selectedLanguage == 'en') {
      heading = 'Selected Language English';
    }
    navigation.setOptions({title: heading});
  }, []);
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>
          {StringsOfLanguages.welcome}
        </Text>
        <Text style={styles.text}>
          {StringsOfLanguages.second}
        </Text>
      </View>
      <Text
        style={
          {
          fontSize: 18,
          textAlign: 'center',
          color: 'grey',
        }}>
        {StringsOfLanguages.footer}
      </Text>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey',
        }}>
        {StringsOfLanguages.web}
      </Text>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    color: '#000000',
    fontSize: 25,
    marginTop: 90,
  },
});
 
export default SettingScreen;