import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import TopNewTweet from './TopNewTweet'
import MiddleNewTweet from './MiddleNewTweet'
import ScrollImageRenderer from './ScrollImage'
const AddNewTweet = () => {
    return (
        <View style={styles.root} >
            <TopNewTweet />
            <MiddleNewTweet />
            {/* flatlist system image  */}
            <ScrollImageRenderer />
        </View>
    )
}

export default AddNewTweet

const styles = StyleSheet.create({
    root: {},
})