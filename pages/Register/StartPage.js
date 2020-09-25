import React, { useState } from 'react'
import { View, Text, StyleSheet} from 'react-native'
;
import {Button} from 'react-native-paper'



const StartPage = (props) => {   

    return (
        <>
            <View style={styles.body}>
                <View>
                    <Text style={{alignSelf:'center', fontSize: 18}}>Join Facebook</Text>
                    <Text style={{textAlign:'center'}}>We will help you to create a new account with some simple steps</Text>
                </View>
                <Button style={{backgroundColor:"#1a73e8", marginTop: '70%'}} uppercase={false} mode="contained" onPress={()=>props.navigation.navigate("InputName")}>Next</Button>

            </View>
        </>
    )
}
export default StartPage

const styles = StyleSheet.create({

    body: {
        paddingTop: '25%',
        height: '100%',
        padding: 20,
        backgroundColor: "#ffffff"
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