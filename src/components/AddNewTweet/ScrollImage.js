import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AnotherData from '../../Data/AnotherData'
const ScrollImage = () => {
  return (
    <View>
    <View style={styles.mainContainer}>
      <View style={styles.Container}>
        <Ionicons name='camera-outline' size={35} color={'#4288c9'} />
      </View>
        <FlatList
          data={AnotherData.images}
          horizontal
          renderItem={({ item }) => {
            return (
              <View style={styles.Container}>
                <Image style={styles.image} source={item.image} />
              </View>
            )
          }}
        />


      {/*
      <View style={styles.Container}> 
      <Image style={styles.image} source={require('../../../assets/Images/sample1.jpeg')} />
      </View>
      */}
      <View style={styles.Container}>
        <Ionicons name='image-outline' size={35} color={'#4288c9'} />
      </View>
    </View>
    </View>
  )
}

export default ScrollImage

const styles = StyleSheet.create({
  mainContainer: {
    height: 200,
    width: '100%',
    flexDirection: 'row',
    // backgroundColor:'blue'
  },
  Container: {
    margin: 5,
    width: 100,
    height: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#f0eded',
  },
  image: {
    height: '98%',
    width: '98%',
    borderRadius: 15,

  },
})