import React, { useEffect, useState , useRef} from 'react';
import { Image, FlatList, SafeAreaView, View, Text, StyleSheet, ListViewComponent, ScrollView } from 'react-native';
import StringsOfLanguages from '@components/StringsOfLanguages';
import { styles, screenCategories , ButtonCG, ButtonBK, ButtonCT} from "@styles/General";
import  { useQuery } from 'react-query';
import usePlantsContexts from '@hooks/usePlantsContexts';

import * as Animatable from 'react-native-animatable';

export default function CategoriesScreen() {

  const GET_CATEGORY = 'GET_CATEGORY';

  async function fetchData() {
    const response = await fetch('https://my-json-server.typicode.com/HkevinH/test/plants');
    const json = await response.json();
    return json;
  }

  const {isSuccess, isLoading, data} = useQuery(GET_CATEGORY, fetchData);

  const handleOnCategory = (category) => {

    if (category == 'fruta') {
      const countCategory = data.filter(data => data.category == 'Fruta');
      return countCategory.length;
    }
    else if (category == 'vegetal') { 
      const countCategory = data.filter(data => data.category == 'Vetegal');
      return countCategory.length;
    }
    else if (category == 'aromatica') {
      const countCategory = data.filter(data => data.category == 'Aromatica');
      return countCategory.length;
    }
  }  
  
  return (
    <View style={{marginTop: 20}}>  
      <Text style={screenCategories.titleCT}>{StringsOfLanguages.title3}</Text>
      <ButtonBK>
      <Animatable.Image
      animation = "pulse"
      easing= "ease-out-circ"
      iterationCount = "infinite"
      source={require('@resources/Back.png')}></Animatable.Image>
      </ButtonBK>

      <View style={screenCategories.container}>
      <ButtonCG onPress={() => handleOnCategory('fruta')}>
      <Image source={require('@resources/Frutals.png')} style={screenCategories.imgs}/>
      <Text style={screenCategories.title}>{StringsOfLanguages.categoriestitle1}</Text>
      <View style={screenCategories.containerCircle}>
      <Text style={screenCategories.items}>#{() => handleOnCategory('fruta')}</Text>
      </View>
      </ButtonCG>
      <ButtonCG onPress={()  => handleOnCategory('vegetal')}>
      <Image source={require('@resources/Vegetals.png')} style={screenCategories.imgs}/>
      <Text style={screenCategories.title}>{StringsOfLanguages.categoriestitle2}</Text>
      <View style={screenCategories.containerCircle}>
      <Text style={screenCategories.items}>#{() =>handleOnCategory('vegetal')}</Text>
      </View>
      </ButtonCG>
      <ButtonCG onPress={() => handleOnCategory('aromatica')}>
      <Image source={require('@resources/Aromatics.png')} style={screenCategories.imgs}/>
      <Text style={screenCategories.title}>{StringsOfLanguages.categoriestitle3}</Text>
      <View style={screenCategories.containerCircle}>
      <Text style={screenCategories.items}>#{() => handleOnCategory('aromatica')}</Text>
      </View>
      </ButtonCG>
      </View>
      <ScrollView>
      <Image source={require('@resources/Aromatics.png')} style={screenCategories.imgs}/>

      </ScrollView>
      </View>
      
  );
} 
