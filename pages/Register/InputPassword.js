import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput, Button} from 'react-native-paper'


const InputPassword = props => {

    const [password, setPassword] = useState('')
    const [warning, setWarning] = useState('')
    const passData = props.route.params
    const onNext = ()=>{

        if (password.length <6) {
            setWarning('Password should be more than 5')
            return
        }
        if (password === passData.phone){
            setWarning('Password must be not the same phone number')
        }

        props.navigation.navigate("EmailAddress", {
            fName: passData.fName,
            lName: passData.lName,
            date: passData.date,
            checked: passData.checked,
            phone: passData.phone,
            password: password
        })
         
    }

    return(
        <View style={styles.body}>
                
                
                <Text style={styles.title}>Input your password</Text>
                <View style={styles.inputWrap} >
                    <TextInput secureTextEntry value={password} onChangeText={text=>setPassword(text)} label="Password" style={{backgroundColor:'#fff'}}/>
                    
                </View>
                <Text style={{color:'red', alignSelf:'center'}} >{warning}</Text>

                <Button style={{backgroundColor:"#1a73e8", marginTop: '50%'}} uppercase={false} mode="contained" onPress={onNext}>Next</Button>
        </View>
    )
}
export default InputPassword

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
