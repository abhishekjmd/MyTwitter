import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const BottomNewTweet = () => {
    return (
        <View>
            <View style={styles.subMainContainer} >
                <View style={styles.iconContainer} >
                    <Ionicons name='image-outline' size={30} color={"#4288c9"} onPress={() => console.warn('Photos pressed')} />
                    <Ionicons name='ios-gift-outline' size={30} color={"#4288c9"} onPress={() => console.warn('gif pressed')} />
                    <MaterialIcons name='poll' size={30} color={"#4288c9"} onPress={() => console.warn('Poll pressed')} />
                    <Octicons name='location' size={30} color={"#4288c9"} onPress={() => console.warn('Location pressed')} />
                </View>
                <View style={styles.subIconContainer}>
                    <Ionicons name='ios-add-circle' style={styles.subIcon} size={30} color={"#4288c9"} onPress={() => console.warn('gif pressed')} />
                    <MaterialCommunityIcons name='checkbox-blank-circle-outline' style={styles.subIcon} size={30} color={"#4288c9"} onPress={() => console.warn('gif pressed')} />
                </View>
            </View>
        </View>
    )
}

export default BottomNewTweet

const styles = StyleSheet.create({
    subMainContainer: {
        flexDirection: 'row',
        paddingTop:15,
        paddingBottom:15,
        borderTopWidth:1,
        borderTopColor: '#e6e5e3',

    },
    iconContainer: {
        flexDirection: 'row',
        marginLeft: 15,
        width: '50%',
        justifyContent: 'space-between',
    },
    subIconContainer: {
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'flex-end',
        marginLeft: 10,
    },
    subIcon: {
        paddingLeft: 20,
    },
})