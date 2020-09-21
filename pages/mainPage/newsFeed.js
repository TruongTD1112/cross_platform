import React, {useState} from 'react'
import {View,Text, TouchableOpacity} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler';
import Animated from 'react-native-reanimated'

const newsFeed = props => {
    return (
        <View>
            <Text>
                new feed
            </Text>
        </View>
    )
}
export default newsFeed