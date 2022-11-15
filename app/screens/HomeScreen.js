import StringsOfLanguages from '@components/StringsOfLanguages';
import React, { useEffect, useState}  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//Screens
import '@components/LanguageSelectionScreen';
import SettingScreen from '@components/SettingsScreen';
import Plants from '@screens/Plants';
import Profile from '@screens/Profile';
import styles from "@styles/General";

import FertilizersScreen from '@screens/FertilizersScreen';
import PlantsScreen from '@screens/Plants';
import ProfileScreen from '@screens/Profile';
import CategoriesScreen from '@screens/CategoriesScreen';
import InfoScreen from '@screens/InfoScreen';

const images = require('@resources/dos-hojas.png');
const images2 = require('@resources/fer.png');
const images3 = require('@resources/cat.png');

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: StringsOfLanguages.title1, focusedIcon: images, unfocusedIcon: 'sprout-outline'},
    { key: 'fertilizers', title: StringsOfLanguages.title2, focusedIcon: images2},
    { key: 'categories', title: StringsOfLanguages.title3, focusedIcon: images3 },
    { key: 'profile', title: StringsOfLanguages.title4, focusedIcon: 'account', unfocusedIcon: 'account-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: PlantsScreen,
    fertilizers: FertilizersScreen,
    categories: CategoriesScreen,
    profile: ProfileScreen,
  });

  return (
    <View style={{
      flex: 1,
    }}>
      <BottomNavigation
      navigationState={{index,routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{backgroundColor: '#BCF1CB'}} 
      />
      </View>

  );
};

export default MyComponent;