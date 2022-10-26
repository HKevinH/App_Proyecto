import React, { Component } from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "react-navigation-stack";
import LanguageSelectionScreen from '../components/LanguageSelectionScreen';
import { GeneralStyles } from '@styles/General';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import General from '@styles/General';

export default function LanguageScreen() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LanguageSelectionScreen">
          <Stack.Screen
            name="LanguageSelectionScreen"
            component={LanguageSelectionScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: 'Content Screen', //Set Header Title
              headerStyle: {
                backgroundColor: '#f4511e', //Set Header color
              },
              headerTintColor: '#fff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
}