import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo'
import NewSubScreen from './NewSubScreen';

const FloatingIcon = () => {
    const navigation = useNavigation();
    const [modalOpen, setModalOpen] = useState(false);
    const FloatingIconPressed = () => {
        setModalOpen(true)
    }
    return (
        <View>
            <NewSubScreen visible={modalOpen} onRequestClose={()=>setModalOpen(false)} />
        <TouchableOpacity activeOpacity={0.8} style={styles.root} onPress={FloatingIconPressed}>
            <Entypo name='plus' style={styles.icon} size={35} color={'white'} />
        </TouchableOpacity>
        </View>
    )
}

export default FloatingIcon

const styles = StyleSheet.create({
    root: {
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: '#4288c9',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 18,
        right: 18,

    },
})