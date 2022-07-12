import { StyleSheet, Text, View, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
const NewSubScreen = ({ visible, onRequestClose }) => {

    return (
        <View>
            <Modal
                visible={visible}
                onRequestClose={onRequestClose}
                transparent={true}>
                <TouchableOpacity style={styles.ModalContainer} onPressOut={onRequestClose}>
                        <View style={styles.subModal}>
                            <View style={styles.subModalContainer}>
                                <Text style={styles.text}>Spaces</Text>
                                <View style={styles.iconContainer}>
                                    <MaterialCommunityIcons name='microphone-plus' size={30} color={"#4288c9"} onPress={()=>console.warn('spaces pressed')} />
                                </View>
                            </View>
                            <View style={styles.subModalContainer}>
                                <Text style={styles.text}>Photos</Text>
                                <View style={styles.iconContainer}>
                                    <Ionicons name='image-outline' size={30} color={"#4288c9"} onPress={() => console.warn('Photos pressed')} />
                                </View>
                            </View>
                            <View style={styles.subModalContainer}>
                                <Text style={styles.text}>Gif</Text>
                                <View style={styles.iconContainer}>
                                    <Ionicons name='ios-gift-outline' size={30} color={"#4288c9"} onPress={() => console.warn('gif pressed')} />
                                </View>
                            </View>
                            <View style={styles.subModalContainer}>
                                <Text style={styles.text}>Tweet</Text>
                                <View style={styles.TweetContainer}>
                                    <MaterialCommunityIcons onPress={()=>console.warn('tweet pressed')} name='feather' size={30} color={"white"} />
                                </View>
                            </View>
                        </View>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

export default NewSubScreen;

const styles = StyleSheet.create({
    ModalContainer: {
        flex: 1,
        backgroundColor: '#fffffaaa',

    },
    subModal: {
        paddingBottom: 60,
        paddingRight: 20,
        backgroundColor: '#fffffaaa',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    subModalContainer: {
        Top: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginVertical:7,
    },
    text: {
        marginHorizontal: 15,
        fontSize: 20,
        color: 'black',
    },
    iconContainer: {
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:1,
        marginBottom:10,
        borderColor:'#e6e5e3'
    },
    TweetContainer: {
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: '#4288c9',
        justifyContent: 'center',
        alignItems: 'center',

    },
})