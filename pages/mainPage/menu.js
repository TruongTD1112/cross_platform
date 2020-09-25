import React, {useState} from 'react'
import {View,Text, TouchableOpacity} from 'react-native'
import 'react-native-gesture-handler';
import {logout} from '../../apis/Auth'
import AsyncStorage from '@react-native-community/async-storage';


const Menu = props => {
    const name = AsyncStorage.getItem('name')
    console.log(name)
    const onLogout = async () => {
        const token = await AsyncStorage.getItem('token')
        const phone = await AsyncStorage.getItem('phone')
        
        console.log(phone)
        try{
            const response = await logout(phone, token)
            if (response.status === 200){
                console.log("OK")
                await AsyncStorage.removeItem('token')
                await AsyncStorage.removeItem('refreshToken')
                await AsyncStorage.removeItem('phone')   
                props.logout()             
            }                    
        }catch{err => console.log(err)}

        

        
    }
    return (
        <View>
            <TouchableOpacity style={{backgroundColor: 'green', padding:10}} onPress={onLogout} >
                <Text style={{color:'#fff', fontSize:16}}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Menu