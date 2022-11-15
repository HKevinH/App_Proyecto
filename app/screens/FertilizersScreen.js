import React, {useEffect} from 'react';
import {SafeAreaView,FlatList, View, Text, StyleSheet, ScrollView} from 'react-native';
import StringsOfLanguages from '@components/StringsOfLanguages';
import {fertilizersList} from "@styles/General";
import  { useQuery } from 'react-query';
import FertilizersList  from '@components/FertilizersList';

export default function FertilizersScreen()
 {
  const GET_FERTILIZERS = 'GET_FERTILIZERS';
async function fetchData() {
  const response = await fetch('https://my-json-server.typicode.com/HkevinH/api/plants');
  const json = await response.json();
  return json;
}
  const { isLoading, status, data, error} = useQuery(GET_FERTILIZERS, fetchData);
  return (
    <View style={{
      marginHorizontal: 10,
      marginTop: 60,
    }}>
      <Text style={fertilizersList.t1}>Name</Text>
      <Text style={fertilizersList.t2}>Name</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <FertilizersList fertilizers={item}/>}
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
