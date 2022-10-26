import React, { useEffect, useState } from 'react';
import { Image, FlatList, SafeAreaView, View, Text, StyleSheet, ListViewComponent } from 'react-native';
import StringsOfLanguages from '@components/StringsOfLanguages';
import { styles, screenCategories } from "@styles/General";
import  { useQuery } from 'react-query';

import PlantsList from '@components/PlantsList';


export default function CategoriesScreen() {

  const GET_CATEGORY = 'GET_CATEGORY';
async function fetchData() {
  const response = await fetch('https://633f082a83f50e9ba3be64ae.mockapi.io/api/v1/plants');
  const json = await response.json();
  return json;
}
  const { isLoading, status, data, error} = useQuery(GET_CATEGORY, fetchData);
  return (
    <View style={{marginHorizontal: 10, marginTop: 60}}>
      <FlatList
        data={data}
        renderItem={({ item }) => <PlantsList plants={item}/>}
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <View style={{flex: 1}}>
              <Text>Mi lista de Categorias</Text>
            </View>
          }
          ListEmptyComponent={
            <View>{isLoading && <Text>Cargando Categorias...</Text>}</View>
          }/>
      </View>
  );
} 
