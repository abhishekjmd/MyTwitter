import { StyleSheet, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import AnotherData from '../../Data/AnotherData'
const ScrollImage = ({ type, source }) => {
  return (
    <View>
      <View style={styles.mainContainer}>
        <TouchableOpacity activeOpacity={0.7} style={styles.Container}>
          <Image style={[styles.image, styles[`image_${type}`]]} source={source} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const ScrollImageRenderer = () => {
  return (
    <View>
      <FlatList
        data={AnotherData.images}
        horizontal
        renderItem={({ item }) => {
          return (
            <ScrollImage
              source={item.image}
              type={item.type}
            />
          )
        }}
        showsHorizontalScrollIndicator={false}
      />

    </View>
  )
}

export default ScrollImageRenderer

const styles = StyleSheet.create({
  mainContainer: {
    height: 225,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
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
  image_primary: {
    height: 50,
    width: 50,
  },
  image_secondary: {
    height: 60,
    width: 60,
  },
})