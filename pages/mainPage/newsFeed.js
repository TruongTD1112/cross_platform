import React, { useState, useEffect, useCallback } from 'react'
import { ScrollView, Animated, View, Image, TouchableOpacity, Text, RefreshControl } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SearchTab from '../../components/searchTab'
import AsyncStorage from '@react-native-community/async-storage';
import 'react-native-gesture-handler';
import { API_URL } from '../../apis/Constance'
import Post from '../../components/Post'
import { getPostInHome } from '../../apis/getPost'

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

const newsFeed = (props) => {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState('no')
    const [refresh, setRefresh] = useState(false)

    const getPost = async () => {
        const token = await AsyncStorage.getItem('token')
        const res = await getPostInHome(token)
        setPosts(res.data.posts)
    }

    const getMorePost = async () => {
        // const token = await AsyncStorage.getItem('token')
        // const res = await getPostInHome(token)
        console.log("getmore post")
    }

    const onRefresh = useCallback(()=>{
        setRefresh(true)
        getPost().then(()=>{})
        wait(2000).then(setRefresh(false))
    },[])

    const isCloseBottom = ({layoutMeasurement, contentOffset, contentSize})=>{
        const paddingToBottom =50
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom
    }

    useEffect(() => {
        async function setAva() {
            let ID = await AsyncStorage.getItem('id')  
            setId(API_URL + '/avatar/' + ID + '.jpg?date=' + Date.now().toString())
        }
        setAva()
        getPost()
    }, [])
    
    useEffect(()=>{
        getPost().then(()=>console.log("XXX"))
    },[props.time])
    return (
        <View>

            <ScrollView
                refreshControl = {
                    <RefreshControl refreshing={refresh} onRefresh={onRefresh}  />
                }
                scrollEventThrottle={0}
                // onScroll = { async({nativeEvent})=>{
                //     if (isCloseBottom(nativeEvent)){
                //         getMorePost()
                //     }
                // }}
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