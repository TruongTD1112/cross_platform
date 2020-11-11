import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler';
import Animated from 'react-native-reanimated'
import { ScrollView } from 'react-native'
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import { API_URL } from '../../apis/Constance'
import MakeFriend from '../../components/MakeFriend'
import { Divider } from 'react-native-paper'


const DatingPage = props => {
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                <Text style={{ fontWeight: 'bold', fontSize: 24, paddingLeft: 10 }}>Friend</Text>
                <TouchableOpacity
                    style={{
                        //backgroundColor: "#fff",
                        padding: 15,
                        marginRight: 10,
                        paddingHorizontal: 8,
                        borderRadius: 20
                    }}
                    onPress={global.gotoSearch}
                >
                    <Icon name="search" color="black" size={25} />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, backgroundColor: "#ddd", borderRadius: 30, padding: 10 }}>Suggestions</Text>
                </View>
                <View style  = {{paddingLeft : 10}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, backgroundColor: "#ddd", borderRadius: 30, padding: 10, paddingLeft : 10 }}>All Friends</Text>
                </View>
            </View>
            <View>
                <Divider style={{ marginTop: 15, width: '95%', alignSelf: 'center', height: 1, backgroundColor: '#ccc' }} />

            </View>
 
            <View style={{ flexDirection: 'row', padding: 10, justifyContent: "space-between" }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Requests</Text>
                <Text style={{ color : 'red',fontSize: 20, fontWeight: 'bold', paddingLeft : 50 }}>200</Text>
                <Text style={{  color : '#1a73e8', fontSize: 20 }}>See All</Text>
            </View> 
            
            <View>
            <MakeFriend/>
            <MakeFriend/>
            <MakeFriend/>
            <MakeFriend/>
            <MakeFriend/>
            <MakeFriend/>
            <MakeFriend/>

            </View>
        </View>
    )
}

export default DatingPage