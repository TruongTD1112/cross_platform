import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { register } from '../../apis/Register'
import { login } from '../../apis/Register'
import AsyncStorage from '@react-native-community/async-storage';

const Register = (props) => {

    const [phone, setPhone] = useState('')
    const [pass, setPass] = useState('')

    const [token, setToken] = useState('')
    const handleRegister = async () => {
        let response = await register({ phone: phone, password: pass })
        setPhone('')
        setPass('')
        setToken(response.data.accessToken)
        console.log(response)
        AsyncStorage.setItem('access-token', response.data.accessToken, err=>{console.log("Err when saving token")})
        AsyncStorage.setItem('phone', phone, err => console.log('Err when saving phone'))
        AsyncStorage.setItem('pass', pass, err => console.log('Err when saving password'))        
    }

    const sendToken = async () => {
        let response = await login(token)
        console.log(response.status)
    }

    return (
        <>
            <View style={styles.body}>
                <Text style={styles.header}>Create An Account</Text>

                <Text>Phone</Text>
                <Input value={phone} onChangeText={text => setPhone(text)} />

                <Text>Password</Text>
                <Input secureTextEntry={true} value={pass} onChangeText={pass => setPass(pass)} />
                
                <TouchableOpacity
                    onPress={handleRegister}
                    style={styles.appButtonContainer}
                >
                    <Text style={styles.appButtonText}>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Login')}
                    style={styles.appButtonContainer}
                >
                    <Text style={styles.appButtonText}>Login</Text>
                </TouchableOpacity>
 

            </View>
        </>
    )
}
export default Register

const styles = StyleSheet.create({

    body: {
        marginTop: 40,
        padding: 20
    },
    // ...
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
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 200,
        alignSelf: 'center',
        marginBottom: 20
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});