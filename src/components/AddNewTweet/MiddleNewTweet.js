import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'


const MiddleNewTweet = () => {
    return (
        <View style={styles.root}>
            <View style={styles.Container} >
                <Image style={styles.image} source={require('../../../assets/Images/ProfilePhoto3.jpeg')} />
            </View>
            <View style={styles.Container} >
                <TextInput style={styles.textInput} placeholder="What's happening?" />
            </View>
        </View>
    )
}

export default MiddleNewTweet

const styles = StyleSheet.create({
    root: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 35,
        width: 35,
        borderRadius: 35,
    },
    Container: {
        marginLeft: 10,
    },
    textInput: {
        fontSize: 25,
    },
})