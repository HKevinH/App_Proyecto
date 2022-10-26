import React, {useEffect, Component} from 'react';
import {FlatList, Image, SafeAreaView, TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import StringsOfLanguages from '@components/StringsOfLanguages';
import {styles, screenPlants} from "@styles/General";
import { useNavigation } from '@react-navigation/native';
import InfoScreen from '@screens/InfoScreen';

export default function ListPlant({ plants, onPress }) {
  const navigation = useNavigation();

  return (
      <TouchableOpacity onPress={onPress}>
      <SafeAreaView style={screenPlants.container}>
          <Image source={{uri: plants.thumbnail_url}} style={screenPlants.img} />
          <Text style={screenPlants.title}>{plants.name}</Text>
          <Text style={screenPlants.subtitle}>{plants.subtitle}</Text>
      </SafeAreaView>
      </TouchableOpacity>
  );
}