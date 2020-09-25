import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput, Button} from 'react-native-paper'

const InputName = props => {
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [invalidText, setInvalidText] = useState('')
    const onNext = ()=>{
        if (fName ==='' || lName==='') {
            setInvalidText('Input valid name')
            return
        }
        props.navigation.navigate("InputDate", {
            fName: fName,
            lName: lName
        })
    }
    return (
            <View style={styles.body}>
                
                
                <Text style={styles.title}>What is your name?</Text>
                <View style={styles.inputWrap} >
                    <TextInput value={fName}  label="First Name" style={{backgroundColor:'#fff', width:'49%'}} selectionColor="#1a73e8" onChangeText={text=>setFName(text)} />
                    <TextInput value={lName} label="Last Name" style={{backgroundColor:'#fff', width:'49%'}} selectionColor="#1a73e8" onChangeText={text=>setLName(text)} />
                </View>
                <Text style={{color:'red', alignSelf:'center'}} >{invalidText}</Text>
                <Button 
                    style={{backgroundColor:"#1a73e8"}} 
                    uppercase={false} mode="contained" 
                    onPress={onNext}>
                Next</Button>
            </View>
    )
}
export default InputName

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