import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import 'react-native-gesture-handler';
import { logout } from '../../apis/Auth'
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import { API_URL } from '../../apis/Constance'

const notifyPage = (props) => {
    return (
        <View style={{ height: '100%', backgroundColor: '#f8f8ff' }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: "space-between",
                borderRadius: 25,
                paddingHorizontal: 9,
                marginEnd: 5,
                paddingVertical: 10
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
        </View>
    )
}
export default notifyPage