import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import ProfilePicture from '../components/ProfilePicture';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Homescreen from '../screens/Homescreen';
import NewSubScreen from '../components/FloatingIcon/NewSubScreen';

const StackNavigation = () => {
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
            <Stack.Screen name='NewSub' component={NewSubScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation