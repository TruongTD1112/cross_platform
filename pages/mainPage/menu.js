import React, {useState, useEffect} from 'react'
import {View,Text, TouchableOpacity, StyleSheet} from 'react-native'
import 'react-native-gesture-handler';
import {logout} from '../../apis/Auth'
import AsyncStorage from '@react-native-community/async-storage';


const Menu = props => {
    const [userName, setUserName] = useState('')
    useEffect(()=>{
        async function setName(){
            const name = await AsyncStorage.getItem('Name')
            setUserName(name)
        }
        setName()
    }, [])
    const onLogout = async () => {
        const token = await AsyncStorage.getItem('token')
        const phone = await AsyncStorage.getItem('phone')
        
        console.log(phone)
        try{
            const response = await logout({phone: phone}, token)
            
            if (response.status === 200){
                console.log("OK")
                await AsyncStorage.removeItem('token')
                await AsyncStorage.removeItem('refreshToken')
                await AsyncStorage.removeItem('phone')   
                props.logout()             
            }                    
        }catch{err => console.log(err)}
    }

    const onGoProfile = ()=>{
        props.goProfile()
    }
    return (
        <View>
            <TouchableOpacity  style={styles.openButton} onPress={onGoProfile} >
                <Text style={styles.textStyle} > {userName}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: 'green', padding:10}} onPress={onLogout} >

                <Text style={{color:'#fff', fontSize:16}}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Menu

const styles = StyleSheet.create({
    centeredView: {
        flex: 2,
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        width: '100%',
        backgroundColor: "white",
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
    },
    openButton: {
        color: 'black',

        padding: 10,

    },
    textStyle: {
        color: 'black',
        fontWeight: "bold"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
