import React, {useState, useEffect} from 'react'
import { ScrollView, Animated, View, Image, TouchableOpacity, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import SearchTab from '../../components/searchTab'
import AsyncStorage from '@react-native-community/async-storage';
import 'react-native-gesture-handler';

import Post from '../../components/Post'

const newsFeed = (props) => {
    
    const [id, setId] = useState('no')
    useEffect(()=>{
        async function setAva(){
            let ID = await AsyncStorage.getItem('id')
            console.log(ID)
            setId('http://10.0.2.2:8888/avatar/'+ID +'.jpg?date='+Date.now().toString())
        }
        setAva()
    },[])
    return (
        <View style={{}}>
            
                <ScrollView
                   
                >
                <View style={{flexDirection:'row', alignItems:'center', backgroundColor:"#fff", height: 60}} >
                    <Image source={{uri: id}} style={{width:40, height: 40, borderRadius: 20, marginLeft:10}} />
                    <TouchableOpacity onPress={props.createPost} style={{flexGrow:1,borderColor: "#ccc", borderWidth: 1, marginHorizontal: 10, padding: 8,paddingHorizontal: 15, borderRadius: 20}}>
                        <Text style={{fontSize: 16}}>What's on your mind?</Text>
                    </TouchableOpacity>
                </View>

                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/> 
            </ScrollView>
            
            
        </View>
    )
}
export default newsFeed