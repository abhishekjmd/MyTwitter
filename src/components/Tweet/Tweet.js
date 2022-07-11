import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useCallback } from 'react'
import Tweets from '../../Data/Tweets'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tweet = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.root}>
        <View style={styles.leftContainer} >
          <Image style={styles.image} source={require('../../../assets/Images/profile.jpeg')} />
        </View>
        <View style={styles.RightContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.RightText1}>Ishant Juyal</Text>
            <Text style={styles.RightText2}>@juyal_ishant</Text>
            <Text style={styles.RightText3}>.9h</Text>
          </View>
          <View style={styles.contentContainer} >
            <Text numberOfLines={10}
              style={styles.Textcontent}>
              ngoing to the forest to become
              better technical writer
              better technical writer
              better technical writer
              better technical writer
              better technical writer
            </Text>
            <Image style={styles.image2} source={require('../../../assets/Images/profile.jpeg')} />
          </View>
          <View style={styles.iconContainer}>
            <View style={styles.FirsticonsubContainer} >
              <EvilIcons  name='comment' size={25} />
              <Text style={styles.iconText} >34</Text>
            </View>
            <View style={styles.iconsubContainer} >
              <EvilIcons name='retweet' size={25} />
              <Text style={styles.iconText}>133</Text>
            </View>
            <View style={styles.iconsubContainer}>
              <Ionicons name='heart' size={20} />
              <Text style={styles.iconText}>1,010</Text>
            </View>
            <View style={styles.iconsubContainer}>
              <EvilIcons name='share-google' size={25} />
            </View>

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
    marginBottom: 10,
  },
  leftContainer: {},
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  RightContainer: {
    marginLeft: 5,
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
  },
  RightText3: {
    marginHorizontal: 5,
  },
  image2: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 15,
    marginVertical: 5,

  },
  contentContainer: {
    width: '93%',
  },
  Textcontent: {
    lineHeight: 20,
  },
  iconContainer: {
    marginVertical:10,
    width: '80%',
    flexDirection: 'row',
    // justifyContent:'center',
    alignItems:'center',
  },
  iconsubContainer:{
    flexDirection: 'row',
    marginHorizontal:18,
  },
  FirsticonsubContainer:{
    flexDirection: 'row',
  },
  iconText:{
    marginHorizontal:5,
  }, 

})