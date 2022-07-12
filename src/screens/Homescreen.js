import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Tweet from '../components/Tweet/Tweet'
import TweetRender from '../components/Tweet/TweetRender'
import FloatingIcon from '../components/FloatingIcon/FloatingIcon'
import NewSubScreen from '../components/FloatingIcon/NewSubScreen'
const Homescreen = () => {
  return (
    <View>
      <TweetRender />
      <FloatingIcon />
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({})