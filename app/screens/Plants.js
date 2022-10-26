import React from 'react';
import {FlatList, Image, SafeAreaView, TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import StringsOfLanguages from '@components/StringsOfLanguages';
import {styles, screenPlants} from "@styles/General";
import { StackNavigator } from 'react-navigation';
import  ListPlant from '../components/MylistPlants';
import InfoScreen from '@screens/InfoScreen';
import { useNavigation } from '@react-navigation/native';
import  { useQuery } from 'react-query';
import { ActivityIndicator } from 'react-native-paper';

import usePlantsContexts from '@hooks/usePlantsContexts';
import { infoScreen, AvatarRedondo } from '../styles/General';
import Icon from 'react-native-vector-icons/Ionicons';

export default function PlantsScreen()
 {
  const navigation = useNavigation();
  const {isSuccess, isLoading, plants} = usePlantsContexts();
  function handleOnPress({plantsId}) {
    navigation.navigate('InfoScreen', {plantsId});
  }

      return (  
        <SafeAreaView style={{marginTop: 20}}>
          <View style={screenPlants.containerInfo}>
            <Text style={screenPlants.name}>Bienvenido!</Text>
            <AvatarRedondo>
              <Image source={require('@asset/img/avatar.png')} style={screenPlants.avatar} resizeMode='contain' />
            </AvatarRedondo>
            <Text style={screenPlants.nameBold}>Nombre Completo!</Text>
            <View style={screenPlants.containerWeather}>
            <Icon name="location-outline" size={30} color="#000" />
              <Text style={screenPlants.text}>asdasd</Text>

            </View>
          </View>

          <View style={screenPlants.container}>
            <Text style={screenPlants.text}>aksdkakskdaksdk</Text>
          </View>
          <View style={infoScreen.containerFlatlist}>
            <FlatList
              data={isSuccess ? plants : []}
              renderItem={({ item }) => <ListPlant plants={item} onPress={() => handleOnPress({ plantsId: item.id })} />}
              keyExtractor={item => item.id}
            />
          </View>
        </SafeAreaView>
      )
  } 
