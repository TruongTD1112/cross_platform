import React, {useState} from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'
// import {  } from 'react-native-gesture-handler'

const Button = ({children, style, icon, onPress}) => {
    return (
        <TouchableOpacity style={{...styles.appButtonContainer, ...style }} onPress={onPress} >
            {icon}
            <Text  style={styles.appButtonText} >{children}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#1a73e8",
        borderRadius: 5,
        shadowColor: '#fff',
        paddingHorizontal: 15  ,
        paddingVertical: 4,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    appButtonText: {

        fontSize: 15,
        color: "#fff",        
        alignSelf: "center",
        textTransform: "capitalize",
        fontWeight:"700",
        marginLeft: 5
    }
});