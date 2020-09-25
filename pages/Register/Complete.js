import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, NativeModules} from 'react-native'
import {Button} from 'react-native-paper'
import { register } from '../../apis/Auth'
import AsyncStorage from '@react-native-community/async-storage';
const DeviceInfo = NativeModules.DeviceInfoGet;
const Complete = props => {
    const [warning, setWarning] = useState('')
    const [deviceID, setDeviceID] = useState('')

    useEffect (() => {
        DeviceInfo.getDeviceID((err, ID) => {
            if (err){
                throw err
            }
            else{
                console.log(ID)
                setDeviceID(ID)
            }
        })
    },[])


    let data =  props.route.params
    const handleRegister = async () => {
        let response = await register(data)
        console.log(response)
        if (response.status == 200){
            console.log("OK")
            await AsyncStorage.clear()
            await AsyncStorage.setItem('token', response.data.token, err=>{console.log(err)})
            await AsyncStorage.setItem('refreshToken', response.data.refreshToken, err => console.log('Err when saving phone'))
            await AsyncStorage.setItem('name', response.data.name , err => console.log('Err when saving name'))        
            props.navigation.navigate("mainPage")
        }else{
            setWarning(response.data.msg)
        } 
    }
    return(

        <View style={styles.body}>               
                
                <Text style={styles.title}>Accept policy</Text>

                <Text style={{alignSelf:'center', color: 'red'}} >{warning}</Text>
                <Button onPress={handleRegister} style={{backgroundColor:"#1a73e8", marginTop: '50%'}} uppercase={false} mode="contained">Register</Button>
        </View>
    )
}
export default Complete

const styles = StyleSheet.create({

    body: {
        paddingTop: '25%',
        padding: 20,
        backgroundColor: "#ffffff",
        height: '100%'
    },
    title: {
        alignSelf: 'center',
        fontWeight:'bold',
        fontSize: 22,
        marginBottom: 10
    },
    header: {
        textTransform: 'uppercase',
        color: '#009688',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#1a73e8",
        borderRadius: 3,
        alignSelf: 'center',
        width: '100%',
        paddingVertical: 7
    },
    appButtonText: {
        fontSize: 16,
        color: "#fff",        
        alignSelf: "center",
        textTransform: "capitalize"
    }
});
