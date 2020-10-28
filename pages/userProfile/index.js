import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { upload } from '../../apis/Upload'
import AsyncStorage from '@react-native-community/async-storage'
import Overlay from 'react-native-modal-overlay/index'
import Button from '../../components/Button'
import { Divider } from 'react-native-paper'
import {API_URL} from '../../apis/Constance'


const Profile = (props) => {

    let id = props.route.params.userId
    let path =  `${API_URL}/avatar/${id}.jpg?date=${Date.now().toString()}`
    let wallPath = `${API_URL}/wallpaper/${id}.jpg?date=${Date.now().toString()}`

    
    return (
        <View style={{ height: '100%', width: '100%', position: 'relative', backgroundColor: '#fff' }} >
            <View style={{ height: '30%', backgroundColor: 'gray', borderTopRightRadius: 5, borderTopLeftRadius: 5, margin: 12, position: 'relative' }}>
                <Image source={{ uri: wallPath }} style={{ height: '100%', width: '100%', borderTopRightRadius: 5, borderTopLeftRadius: 5 }} />
                
            </View>

            <View
                style={{
                    width: 200,
                    backgroundColor: '#fff',
                    height: 200,
                    marginLeft: '25%',
                    marginTop: '-27%',
                    borderRadius: 100,
                    padding: 5
                }}
            >

                <Image source={{ uri: path }} style={{ height: '100%', width: '100%', borderRadius: 100 }} />
                

            </View>
            <View style={{ alignSelf: 'center', padding: 10, marginTop: 5 }}>
                <Text style={{ fontSize: 26, fontWeight: 'bold' }}>{props.route.params.name}</Text>

            </View>

            


            <View flexDirection="row" style={{ alignSelf: 'center' }}>
                <Button style={{ width: 330 }} icon={<Icon name="plus-circle" color="white" size={20} style={{ paddingTop: 2 }} />} >Add Friend</Button>
                <Button style={{ width: 50, backgroundColor: "#cfcfcf", marginLeft: 10 }} icon={<Icon name="dots-horizontal" color="black" size={20} style={{ paddingTop: 2 }} />}  ></Button>
            </View>
            <Divider style={{ marginTop: 15, width: '95%', alignSelf: 'center', height: 1, backgroundColor: '#ccc' }} />

            
        </View>

    )
}
export default Profile

const styles = StyleSheet.create({

    modalView: {
        width: '100%',
        backgroundColor: "white",
        padding: 15,
        alignItems: "center",
        shadowColor: "#222",

        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        // position: 'absolute',
        // bottom: 0,

    },
    openButton: {
        color: 'black',
        width: '100%',
        padding: 10,
        flexDirection: 'row',

    },
    textStyle: {
        color: 'black',
        fontWeight: "bold",
        paddingLeft: 10,
        paddingTop: 3,
        fontSize: 16
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
