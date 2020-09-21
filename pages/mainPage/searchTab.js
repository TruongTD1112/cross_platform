import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler';
import Animated from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
const SearchTab = props => {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: '#ffffff', paddingVertical: 6, position: 'relative' }}>
            <Text style={{ color: "#3360FF", fontSize: 25, paddingStart: 15, fontWeight: 'bold' }}>
                facebook
            </Text>
            <View style={{flexDirection:'row', justifyContent:'flex-end', alignContent: 'flex-end', position: 'absolute', right: 5, top:5, height: 38}}>
                <View style={{ backgroundColor: '#eeeeee', alignItems: 'baseline', justifyContent: 'center', borderRadius: 25, paddingHorizontal: 9, marginEnd: 5 }}>
                    <Icon name="search" color="black" size={20} />
                </View>
                <View style={{ backgroundColor: '#eeeeee', alignItems: 'baseline', justifyContent: 'center', borderRadius: 25, paddingHorizontal: 9, marginEnd: 5 }}>
                    <Icon1 name="facebook-messenger" color="black" size={20} />
                </View>
            </View>
        </View>
    )
}
export default SearchTab