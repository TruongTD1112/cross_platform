import React, {useState} from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

const Button = props => {
    return (
        <TouchableOpacity>
            <Text>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#1a73e8",
        borderRadius: 5,
        alignSelf: 'center',
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",        
        alignSelf: "center",
        textTransform: "capitalize"
    }
});