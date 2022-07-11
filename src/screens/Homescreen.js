import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Tweet from '../components/Tweet/Tweet'
const Homescreen = () => {
  return (
    <View>
      <Tweet />
      <Tweet />
      <Tweet />
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({})