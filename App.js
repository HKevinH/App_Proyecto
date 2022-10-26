/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import AppNavigation from '@navigation/AppNavigation';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { PlantContextProvider } from '@contexts/PlantsContexts';

const queryClient = new QueryClient()
export default class App extends React.Component {
  render() {
    return (
      
      <QueryClientProvider client={queryClient}>
        <PlantContextProvider>
          <AppNavigation />
        </PlantContextProvider>
      </QueryClientProvider>

    )
  }
}

