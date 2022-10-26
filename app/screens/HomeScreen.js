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

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: StringsOfLanguages.title1, focusedIcon: 'sprout', unfocusedIcon: 'sprout-outline'},
    { key: 'fertilizers', title: StringsOfLanguages.title2, focusedIcon: 'album' },
    { key: 'categories', title: StringsOfLanguages.title3, focusedIcon: 'history' },
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
      barStyle={{backgroundColor: 'white'}} 
      />
      </View>

  );
};

export default MyComponent;