import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput, Button} from 'react-native-paper'


const InputPhone = props => {

    const [phone, setPhone] = useState('')
    const [warning, setWarning] = useState('')
    const passData = props.route.params
    const onNext = ()=>{

        if (phone.length < 10) {
            setWarning('Invalid phone number')
        }

        props.navigation.navigate("InputPassword", {
            fName: passData.fName,
            lName: passData.lName,
            date: passData.date,
            checked: passData.checked,
            phone: phone
        })
         
    }

    return(
        <View style={styles.body}>
                
                
                <Text style={styles.title}>Input your phone number</Text>
                <View style={styles.inputWrap} >
                    <TextInput  value={phone} keyboardType={"number-pad"} label="Phone number" style={{backgroundColor:'#fff'}} onChangeText={text=>setPhone(text)} />
                    
                </View>
                <Text style={{color:'red', alignSelf:'center'}} >{warning}</Text>
                <Button style={{backgroundColor:"#1a73e8", marginTop: '50%'}} uppercase={false} mode="contained" onPress={onNext}>Next</Button>
        </View>
    )
}
export default InputPhone

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
