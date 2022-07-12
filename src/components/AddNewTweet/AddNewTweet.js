import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const AddNewTweet = () => {
    return (
        <View style={styles.root} >
            <View style={styles.iconContainer} >
                <AntDesign name='close' size={25} color={'black'} />
            </View>
            <View style={styles.btnmainCointainer}>
                <View style={styles.anotherContainer} >
                    <View style={styles.btnSubCointainer1} >
                        <Text style={styles.text1}>Drafts</Text>
                    </View>
                    <View style={styles.btnSubCointainer2} >
                        <Text style={styles.text2}>Tweet</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default AddNewTweet

const styles = StyleSheet.create({
    root: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 10,
        justifyContent:'center',
        alignItems:'center',
    },
    btnmainCointainer: {
        width: '92%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection:'row',
    },
    anotherContainer:{
        flexDirection:'row',
        marginRight:10,

    },
    btnSubCointainer1: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight:20,

    },
    btnSubCointainer2: {
        width: 115,
        height: 50,
        borderRadius: 35,
        backgroundColor: '#4288c9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text1: {
        color: '#4288c9',
        fontSize: 25,
        fontWeight:'600',
    },
    text2: {
        color: 'white',
        fontSize: 25,
    },

})