import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Homescreen from '../screens/Homescreen'
import Searchscrren from '../screens/Searchscreen';
import Notification from '../screens/Notification';

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Homescreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation