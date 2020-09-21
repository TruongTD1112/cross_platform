import React, {useState} from 'react'
import {View,Text, TouchableOpacity} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler';
import Animated from 'react-native-reanimated'

const notifyPage = props => {
    return (
        <View>
            <Text>
                notify 1
            </Text>
        </View>
    )
}
export default notifyPage