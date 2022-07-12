import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// import TabBarIcons form 'react-native'
// Screens
import Homescreen from '../screens/Homescreen'
import Searchscrren from '../screens/Searchscreen';
import Notification from '../screens/Notification';
import Spacesscrean from '../screens/Spacesscreen'
import Communities from '../screens/Communities';
import DirectMessagescreen from '../screens/DirectMessagescreen'
import ProfilePicture from '../components/ProfilePicture'
import StackNavigation from './StackNavigation';

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          // tabBarActiveBackgroundColor:'black',
          tabBarActiveTintColor: '#4288c9',
          tabBarInactiveTintColor: 'black'
        }} >
        <Tab.Screen
          name='Home'
          component={StackNavigation}
          options={{
            headerShown: false,
            'tabBarIcon': (({ color }) =>
              <Entypo name='home' color={color} size={25} />
            )
          }}

        />
        <Tab.Screen
          name='Search'
          component={Searchscrren}
          options={{
            'tabBarIcon': (({ color }) =>
              <AntDesign name='search1' color={color} size={25} />
            )
          }}
        />

        <Tab.Screen
          name='Notification'
          component={Notification}
          options={{
            'tabBarIcon': (({ color }) =>
              <Ionicons name='notifications' color={color} size={25} />
            )
          }}
        />
        <Tab.Screen name='Spaces'
          component={Spacesscrean}
          options={{
            'tabBarIcon': (({ color }) =>
              <Ionicons name='mic' size={25} color={color} />
            )
          }}
        />
        <Tab.Screen
          name='Communities'
          component={Communities}
          options={{
            'tabBarIcon': (({ color }) =>
              <FontAwesome5 name='user-friends' size={25} color={color} />
            )
          }}
        />
        <Tab.Screen
          name='DirectMessage'
          component={DirectMessagescreen}
          options={{
            'tabBarIcon': (({ color }) =>
              <Entypo name='mail' size={25} color={color} />
            )
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='HomeScreen'
        component={Homescreen}
        options={{
          headerTitle: () => (
            <View style={{ marginLeft: 125, }}>
              <Ionicons name={"logo-twitter"} size={30} color='#4288c9' />
            </View>

          ),
          headerRight: () => (
            <MaterialCommunityIcons name={"star-four-points-outline"} size={30} />
          ),
          headerLeft: () => (
            <ProfilePicture />
          )
        }}
      />
    </Stack.Navigator>
  )
}
export default Navigation