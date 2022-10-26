import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import  SplashScreen  from '@screens/SplashScreen'
import  HomeScreen  from '@screens/HomeScreen'
import  LanguagesScreen from '@screens/LanguagesScreen'
import LanguageSelectionScreen from '@components/LanguageSelectionScreen';
import ContentScreen from '@components/ContentScreen';
import InfoScreen from '@screens/InfoScreen';
import PlantsScreen from '@screens/Plants';

const Stack = createStackNavigator();
const AppNavigation = () =>{
    return(
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
            >
            </Stack.Screen>
        <Stack.Screen
          name="LanguageSelectionScreen"
          component={LanguageSelectionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
          />
          <Stack.Screen 
          name='PlantsScresen'
          component={PlantsScreen}
          options={{headerShown: false}}
          />
          <Stack.Screen 
          name='InfoScreen'
          component={InfoScreen}
          options={{headerShown: true}}
          ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    );
};

export default AppNavigation;
