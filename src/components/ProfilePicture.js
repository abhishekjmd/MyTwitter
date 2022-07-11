import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ProfilePicture = () => {
    return (
        <View>
            <Image style={styles.image} source={require('../../assets/Images/profile.jpeg')} />
        </View>
    )
}

export default ProfilePicture

const styles = StyleSheet.create({
    image: {
        height: 40,
        width: 40,
        borderRadius: 40,
    },
})