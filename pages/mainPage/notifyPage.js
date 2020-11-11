import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Animated } from 'react-native'
import 'react-native-gesture-handler';
import { logout } from '../../apis/Auth'
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import { API_URL } from '../../apis/Constance'
import Notification from '../../components/Notifycation'

const notifyPage = (props) => {



    const scrollY = new Animated.Value(0)
    const diffClamp = Animated.diffClamp(scrollY, 0, 50)
    const translateY = diffClamp.interpolate({
        inputRange: [0, 50],
        outputRange: [0, -50]
    })

    return (
        <View style={{height: '100%', backgroundColor: '#ffffff' }}>
            <Animated.View
                style={{
                    transform: [
                        {translateY : translateY}
                    ],
                    elevation: 4,
                    zIndex: 100
                }}
            >
            <View style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: 50,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: "space-between",
                paddingHorizontal: 9,
                marginEnd: 5,
                paddingVertical: 10,
                backgroundColor: "#fff"
            }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Notification</Text>

                <TouchableOpacity
                    style={{
                        backgroundColor: "#fff",
                        padding: 7,
                        paddingHorizontal: 8,
                        borderRadius: 20
                    }}
                    onPress={global.gotoSearch}
                >
                    <Icon name="search" color="black" size={25} />
                </TouchableOpacity>

            </View>
            </Animated.View>
            <ScrollView
                style={{width:'100%'}}
                onScroll={e=>{
                    scrollY.setValue(e.nativeEvent.contentOffset.y)
                }}
            >
                <View style={{height:50}}></View>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
            </ScrollView>

        </View>
    )
}
export default notifyPage