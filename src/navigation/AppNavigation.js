import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import HeaderComponent from '../components/common/HeaderComponent';


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    
    <Stack.Navigator
    screenOptions={{
      header: (props) => <HeaderComponent {...props}/>
    }}
    >
      <Stack.Screen name ='Home' component={HomeScreen}
      options={{

        headerShown: true,
      }
      }
      />
      </Stack.Navigator>
  
  )
}