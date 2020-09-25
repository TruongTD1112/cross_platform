import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, RadioButton } from 'react-native-paper'

const InputGender = props => {
    const [checked, setChecked] = useState('male')
    const passData = props.route.params
    const onNext = ()=>{
        
        props.navigation.navigate("InputPhone", {
            fName: passData.fName,
            lName: passData.lName,
            date: passData.date,
            checked: checked
        })
         
    }
    return (

        <View style={styles.body}>
            <Text style={styles.title}>What is your gender?</Text>
            <View>
                <Text>Female</Text>
                <RadioButton
                    value="female"
                    status={checked === 'female' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('female')}
                    color="#1a73e8"
                />
                <Text>Male</Text>
                <RadioButton
                    value="male"
                    status={checked === 'male' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('male')}
                    color="#1a73e8"
                />
                <Text>Other</Text>
                <RadioButton
                    value="other"
                    status={checked === 'other' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('other')}
                    color="#1a73e8"
                />
            </View>
            <Button style={{ backgroundColor: "#1a73e8" }} uppercase={false} mode="contained" onPress={onNext}>Next</Button>

        </View>
    )
}
export default InputGender


const styles = StyleSheet.create({

    body: {
        paddingTop: '25%',
        height: '100%',
        padding: 20,
        backgroundColor: "#ffffff"
    },
    inputWrap: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: '25%'
    },
    title: {
        alignSelf: 'center',
        fontWeight: 'bold',
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