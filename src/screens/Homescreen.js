import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Tweet from '../components/Tweet/Tweet'
import TweetRender from '../components/Tweet/TweetRender'
import FloatingIcon from '../components/FloatingIcon/FloatingIcon'
import NewSubScreen from '../components/FloatingIcon/NewSubScreen'
import AddNewTweet from '../components/AddNewTweet/AddNewTweet'
const Homescreen = () => {
  return (
    <View>
    <FloatingIcon />
    <TweetRender />
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({})