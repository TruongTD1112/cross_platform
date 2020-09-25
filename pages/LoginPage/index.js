import React, {useState} from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { Input } from 'react-native-elements';
import {Button} from 'react-native-paper'
import {login} from '../../apis/Auth'
import AsyncStorage from '@react-native-community/async-storage';

const LoginPage = (props) => {
    const [phone, setPhone] = useState('')
    const [pass, setPass] = useState('')
    const [err, setErr] = useState('')
    const handleLogin = async()=>{
        const response = await login({phone: phone, password: pass})
        if (response.status===200) {
            try{
                await AsyncStorage.setItem('token', response.data.token)
                await AsyncStorage.setItem('refreshToken', response.data.refreshToken)
                await AsyncStorage.setItem('name', response.data.name)
                await AsyncStorage.setItem('phone', phone)
            } catch{err => console.log(err)}
            
            props.navigation.navigate("mainPage")
        }
        else{
            setErr(response.data.msg)
        }
    }
    return (
        <>
            <View style={styles.body}>
                

                <Input placeholder="Phone or Email" value={phone} onChangeText={text => setPhone(text)} />
                
                <Input placeholder="Password" secureTextEntry={true} value={pass} onChangeText={pass => setPass(pass)}/>
                <Text style={{color: 'red', alignSelf:'center'}} >{err}</Text>
                <Button onPress={handleLogin} style={{backgroundColor:"#1a73e8", marginTop: '50%'}} mode="contained" uppercase={false}>Login</Button>
                <Text 
                    onPress={()=>props.navigation.navigate("Register")}
                    style={{
                        color: "#1a73e8",
                        alignSelf: 'center',
                        fontSize: 15,
                        fontWeight: 'bold',
                        marginTop: 20
                    }}
                >Create a new account</Text>
            </View>
        </>
    )
}

export default LoginPage

const styles = StyleSheet.create({

    body: {
        paddingTop: '25%',
        height: '100%',
        padding: 20,
        backgroundColor: "#ffffff"
    },
    inputWrap:{
        flexDirection: 'row',
        justifyContent:'space-around',
        marginBottom: '25%'
    },
    title: {
        alignSelf: 'center',
        fontWeight:'bold',
        fontSize: 22,
        marginBottom: 10
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