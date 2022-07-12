import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './src/Routes/Navigation'
import Homescreen from './src/screens/Homescreen'
import AddNewTweet from './src/components/AddNewTweet/AddNewTweet'
const App = () => {
  return (
    <View style={styles.root} >
      <AddNewTweet />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  root:{
    flex:1,
  }
})