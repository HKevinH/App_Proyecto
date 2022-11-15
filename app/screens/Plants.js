import React from 'react';
import {FlatList, Image, SafeAreaView, TouchableOpacity, View, Text, StyleSheet, ScrollView} from 'react-native';
import StringsOfLanguages from '@components/StringsOfLanguages';
import {styles, screenPlants} from "@styles/General";
import { StackNavigator } from 'react-navigation';
import  ListPlant from '../components/MylistPlants';
import InfoScreen from '@screens/InfoScreen';
import { useNavigation } from '@react-navigation/native';
import  { useQuery } from 'react-query';
import { ActivityIndicator } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import usePlantsContexts from '@hooks/usePlantsContexts';
import { infoScreen, AvatarRedondo } from '../styles/General';
import Icon from 'react-native-vector-icons/Ionicons';

export default function PlantsScreen()
 {
  renderSeparator = () => (
    <View
      style={{
        marginTop: 10,
      }}
    />
  );
  
  const navigation = useNavigation();
  const {isSuccess, isLoading, plants} = usePlantsContexts();
  const result = plants.length;
  function handleOnPress({plantsId}) {
    navigation.navigate('InfoScreen', {plantsId});
  }
      return (  
        <SafeAreaView style={{flex:1}}>
          <Image source={require('../resources/encabezado.png')} style={screenPlants.image}></Image>
          <Animatable.Image
            animation = "pulse"
            easing= "ease-out-circ"
            iterationCount = "infinite"
            style={screenPlants.image2}
            source={require('../resources/dos-hojas.png')}></Animatable.Image>
          <View style={screenPlants.container}>
            <Text style={screenPlants.text}>Mis Plantas </Text>
            <View style={screenPlants.containerCircle}>
            <Text style={{color: 'black', fontFamily: 'DMSans-Bold', fontWeight: '200'}}>{result}</Text>
            </View>
          </View>
          <View style={screenPlants.containerFlatlist}>
            <FlatList
            numColumns={2}
            height={420}
            ItemSeparatorComponent={this.renderSeparator}
              data={isSuccess ? plants : []}
              renderItem={({ item }) => <ListPlant plants={item} onPress={() => handleOnPress({ plantsId: item.id })} />}
              keyExtractor={item => item.id}
            />
          </View>
        </SafeAreaView>
        
      )
  } 
