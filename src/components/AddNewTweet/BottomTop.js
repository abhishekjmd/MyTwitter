import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
const BottomTop = () => {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.subContainer} >
                <Entypo name='globe' size={18} color={'#4288c9'} />
                <Text style={styles.text}>Everyone can reply</Text>
            </View>
        </View>
    )
}

export default BottomTop

const styles = StyleSheet.create({
    rootContainer: {
        width: '100%',
        paddingTop: 15,
        paddingBottom: 15,
        borderTopWidth: 1,
        borderTopColor: '#e6e5e3',
    },
    subContainer: {
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-between',
        marginLeft: 15,
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
    },
})