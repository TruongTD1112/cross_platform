import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const IndexPage = (props) => {
    console.log(props)
    return (
        <>
            <View style={{flex:2, flexDirection:'column', alignItems:'center', justifyContent: 'flex-end', backgroundColor:"#ffffff"}}>
                <Icon name='facebook' size={60} color={"#3360ff"} />
            </View>
            <View style={{flex:3, flexDirection:'column', alignItems:'center', justifyContent: 'flex-end',  backgroundColor:"#ffffff"}}>
                
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Login')}
                    style={styles.appButtonContainer}
                >
                    <Text style={styles.appButtonText}>login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Register')}
                    style={styles.appButtonContainer}
                >   
                    <Icon name="plus" color="#3360ff" size={25}/>
                    <Text style={styles.appButtonText} >create new facebook account</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('mainPage')}
                    style={styles.appButtonContainer}
                >
                    <Text style={styles.appButtonText}>Main Page</Text>
                </TouchableOpacity>

            </View>
        </>
    )
}
export default IndexPage

const styles = StyleSheet.create({
    body:{
        backgroundColor: '#ffffff'
    },
    appButtonContainer: {
        backgroundColor: "#ccdeff",
        borderRadius: 3,
        paddingVertical: 5,
        paddingHorizontal: 12,
        width: '90%',
        alignSelf: 'center',
        marginBottom: 20,
        flexDirection: 'row'
    },
    appButtonText: {
        fontSize: 14,
        color: "#3360ff",
        alignSelf: "center",
        fontWeight: 'bold',
        textTransform: "capitalize"
    }
});