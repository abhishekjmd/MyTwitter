import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useCallback } from 'react'
import Tweets from '../../Data/Tweets'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import moment from 'moment'

moment
const Tweet = ({ name, username, createdAt, content, image,comment,retweet,heart }) => {
  return (
    <View style={styles.root}>
      <View style={styles.leftContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.RightContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.RightText1}>{name}</Text>
          <Text style={styles.RightText2}>{username}</Text>
          <Text style={styles.RightText3}>{moment({ createdAt }).fromNow()}</Text>

        </View>
        <View>
          <Text style={styles.Textcontent}>{content}</Text>
          <Image style={styles.image2} source={require('../../../assets/Images/photo.jpeg')} />
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.FirsticonsubContainer} >
            <EvilIcons name='comment' color={'black'} size={25} />
            <Text style={styles.iconText}>{comment}</Text>
          </View>
          <View style={styles.iconsubContainer} >
            <EvilIcons name='retweet' color={'black'} size={25} />
            <Text style={styles.iconText}>{retweet}</Text>
          </View>
          <View style={styles.iconsubContainer}>
            <Ionicons name='heart' color={'black'} size={20} />
            <Text style={styles.iconText}> {heart} </Text>
          </View>
          <View style={styles.iconsubContainer}>
            <EvilIcons name='share-google' color={'black'} size={25} />
          </View>

        </View>

      </View>
    </View>
  )
}

export default Tweet

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    marginTop: 10,
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e6e5e3',
  },
  leftContainer: {},
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  RightContainer: {
    marginLeft: 5,
    width: '83%',
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  RightText1: {
    fontWeight: 'bold',
    color: 'black',
  },
  RightText2: {
    marginHorizontal: 5,
    color: 'black',

  },
  RightText3: {
    marginHorizontal: 5,
    color: 'black',

  },
  image2: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 15,
    marginVertical: 5,
  },
  Textcontent: {
    lineHeight: 20,
    color: 'black',

  },
  iconContainer: {
    marginVertical: 10,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconsubContainer: {
    flexDirection: 'row',
    marginHorizontal: 18,
  },
  FirsticonsubContainer: {
    flexDirection: 'row',
  },
  iconText: {
    marginHorizontal: 5,
    color: 'black',

  },

})