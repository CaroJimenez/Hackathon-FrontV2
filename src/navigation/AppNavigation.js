import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import HeaderComponent from '../components/common/HeaderComponent';
import PaymentScreen from '../screens/PaymentScreen';
import TicketCashScreen from '../screens/TicketCashScreen';
import CardScreen from '../screens/CardScreen'


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    
    <Stack.Navigator
    // screenOptions={{
    //   header: (props) => <HeaderComponent {...props}/>
    // }}
    >
      <Stack.Screen name ='Home' component={HomeScreen}
      options={{

        headerShown: false,
      }
      }
      />
      <Stack.Screen name ='Payment' component={PaymentScreen}
      options={{

        headerShown: false,
      }
      }
      />
      <Stack.Screen name ='ticket' component={TicketCashScreen}
      options={{

        headerShown: false,
      }
      }
      />
      <Stack.Screen name ='card' component={CardScreen}
      options={{

        headerShown: false,
      }
      }
      />
      </Stack.Navigator>
  
  )
}