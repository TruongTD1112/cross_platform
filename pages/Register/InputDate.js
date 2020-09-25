import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-paper'
import DatePicker from 'react-native-date-picker'

const InputDate = props => {
    const [date, setDate] = useState(new Date())
    const [warning, setWarning] = useState('')
    const onNext = ()=>{
        const passData = props.route.params
        console.log(typeof(props.route.params))
        props.navigation.navigate("InputGender", {
            fName: passData.fName,
            lName: passData.lName,
            date: date.toString()
        })
         
    }
    return (
        
        <View style={styles.body}>  
                <Text style={styles.title}>What is your birthday?</Text>              
                <View style={{alignSelf:'center'}}>
                    <DatePicker mode="date" date={date} onDateChange={setDate} />
                </View>
                <Text style={{alignSelf:'center', color:'red'}} >{warning}</Text>

                <Button style={{backgroundColor:"#1a73e8", marginTop:30}} uppercase={false} mode="contained" onPress={onNext}>Next</Button>

            </View>
    )
}
export default InputDate

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