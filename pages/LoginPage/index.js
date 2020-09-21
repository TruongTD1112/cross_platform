import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';

const LoginPage = (props) => {
    const [phone, setPhone] = useState('')
    const [pass, setPass] = useState('')
    const handleLogin = async()=>{
        
    }
    return (
        <>
            <View style={styles.body}>
                <Text style={styles.header}>Login</Text>
                <Text>Phone</Text>

                <Input value={phone} onChangeText={text => setPhone(text)} />
                <Text>Password</Text>
                <Input secureTextEntry={true} value={pass} onChangeText={pass => setPass(pass)}/>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.appButtonContainer}
                >
                    <Text style={styles.appButtonText}>Login</Text>
                </TouchableOpacity>                    
            </View>
        </>
    )
}

export default LoginPage

const styles = StyleSheet.create({

    body:{
        marginTop: 40,
        padding: 20
    },
    // ...
    header:{
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