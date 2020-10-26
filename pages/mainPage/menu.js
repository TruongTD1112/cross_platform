import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import 'react-native-gesture-handler';
import { logout } from '../../apis/Auth'
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import { API_URL } from '../../apis/Constance'
const Menu = props => {
    const [userName, setUserName] = useState('')
    const [id, setId] = useState('no')
    useEffect(() => {
        async function setAva() {
            let ID = await AsyncStorage.getItem('id')
            setId(API_URL + '/avatar/' + ID + '.jpg?date=' + Date.now().toString())
        }
        setAva()

    }, [])
    useEffect(() => {
        AsyncStorage.getItem("Name").then(n => setUserName(n))
    }, [])

    const onLogout = async () => {
        const token = await AsyncStorage.getItem('token')
        const phone = await AsyncStorage.getItem('phone')

        console.log(phone)
        try {
            const response = await logout({ phone: phone }, token)

            if (response.status === 200) {
                console.log("OK")
                await AsyncStorage.removeItem('token')
                await AsyncStorage.removeItem('refreshToken')
                await AsyncStorage.removeItem('phone')
                props.logout()
            }
        } catch { err => console.log(err) }
    }

    const onGoProfile = () => {
        props.goProfile()
    }
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
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Menu</Text>

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


            <TouchableOpacity style={styles.openButton} onPress={onGoProfile} >
                <View style={{ flexDirection: 'row', paddingTop: 5, paddingLeft: 10 }} >
                    <Image source={{ uri: id }} style={{ width: 40, height: 40, borderRadius: 20 }} />
                    <View style={{ marginLeft: 10 }} >
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{userName}</Text>
                        <Text style={{ color: "#888", fontSize: 14 }} >See your profile</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <View
                style={{
                    flexDirection: "row",
                    flexWrap: 'wrap'
                }}
            >
                <TouchableOpacity style={styles.friendButton}>
                    <Icon2 name="user-friends" size={20} color="#008fdb" />
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        Friend
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.friendButton}>
                    <Icon1 name="account-group" size={26} color="#008fdb" />
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        Group
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{ position: 'absolute', width: '100%', bottom: 0, left: 0 }}>

                <TouchableOpacity
                    style={{
                        backgroundColor: '#ababba',
                        padding: 14,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                    onPress={onLogout} >
                    <Icon1 name="logout" size={25} color="black" />
                    <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold', marginLeft: 5, marginTop: 3 }}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Menu

const styles = StyleSheet.create({


    openButton: {
        color: 'black',
        padding: 10,

    },
    friendButton: {
        elevation: 5,
        flexDirection: 'column',
        backgroundColor: "#fff",
        width: '47.5%',
        height: 80,
        paddingVertical: 10,
        borderRadius: 10,
        margin: 5,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

    },


});
