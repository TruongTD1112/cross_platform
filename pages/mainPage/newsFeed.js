import React, { useState, useEffect } from 'react'
import { ScrollView, Animated, View, Image, TouchableOpacity, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SearchTab from '../../components/searchTab'
import AsyncStorage from '@react-native-community/async-storage';
import 'react-native-gesture-handler';
import { API_URL } from '../../apis/Constance'
import Post from '../../components/Post'
import { getPostInHome } from '../../apis/getPost'

const newsFeed = (props) => {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState('no')
    useEffect(() => {
        async function setAva() {
            let ID = await AsyncStorage.getItem('id')  
            setId(API_URL + '/avatar/' + ID + '.jpg?date=' + Date.now().toString())
        }
        setAva()
        getPost()
    }, [])
    const getPost = async () => {
        const token = await AsyncStorage.getItem('token')
        const res = await getPostInHome(token)
        setPosts(res.data.posts)
    }
    useEffect(()=>{
        getPost().then(()=>console.log("XXX"))
    },[props.time])
    return (
        <View style={{}}>

            <ScrollView

            >
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#fff", height: 60 }} >
                    <Image source={{ uri: id }} style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 10 }} />
                    <TouchableOpacity onPress={props.createPost} style={{ flexGrow: 1, borderColor: "#ccc", borderWidth: 1, marginHorizontal: 10, padding: 8, paddingHorizontal: 15, borderRadius: 20 }}>
                        <Text style={{ fontSize: 16 }}>What's on your mind?</Text>
                    </TouchableOpacity>
                </View>

                {posts.map((post, index)=> (
                    <Post post={post} key={index} />
                ))}
            </ScrollView>


        </View>
    )
}
export default newsFeed