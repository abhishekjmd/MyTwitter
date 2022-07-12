import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Tweets from '../../Data/Tweets'
import Tweet from './Tweet'

const TweetRender = () => {
  return (
    <View>
      <FlatList
        data={Tweets.data}
        renderItem={({ item }) => {
          return (
            <Tweet
              image={item.user.image}
              name={item.user.name}
              username={item.user.username}
              content={item.content}
              comment={item.numberOfComments}
              retweet={item.numberOfRetweets}
              heart={item.numberOfLikes}
            />
          )
        }}
      />
    </View>
  )
}

export default TweetRender

const styles = StyleSheet.create({})