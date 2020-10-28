import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native'
import {Input} from 'react-native-elements'
import 'react-native-gesture-handler';

import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-crop-picker'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import {API_URL} from '../../apis/Constance'
import {postNew} from '../../apis/Upload'
import ImageView from '../../components/ImageViewWhenPost'

const CreatePost = (props) => {

    const [id, setId] = useState('no')
    const [name, setName] = useState('')
    const [content, setContent] = useState('')
    const [images, setImages] = useState([])
    const [feeling, setFeeling] = useState('')
    const [activity, setActivity] = useState('')

    const selectPhotoes = () => {
        ImagePicker.openPicker({
            multiple: true,
            maxFiles: 4,
            mediaType: 'photo',
            compressImageQuality: 0.2
        }).then(image => {
            setImages(image)
        }).catch(err => console.log(err))
    }

    const selectFeeling = () => {
        props.navigation.navigate("Feeling")
    }
    const callBackSetContent =  useCallback((text)=>{
        setContent(text)
    },[content])
    useEffect(() => {
        if (props.route.params?.feeling) {
            setFeeling(' is ' + props.route.params.feeling)
        }
        if (props.route.params?.activity) {
            setActivity(props.route.params.activity)
        }
    }, [props.route.params])

    useEffect(() => {
        AsyncStorage.getItem('id').then(ID => {
            setId(API_URL+ '/avatar/' + ID + '.jpg?date=' + Date.now().toString())
        })
        AsyncStorage.getItem('Name').then(name => setName(name))       
    }, [])

    useEffect(() => {
        if (content.length === 0 && images.length === 0) props.validToPost(false)
        else props.validToPost(true)
    }, [images, content])

    global.post = async() => {
        try{
            const token = await AsyncStorage.getItem('token')
            const id = await AsyncStorage.getItem('id')
            const response = await postNew(token, {
                content: content,
                photoes: images,
                userId: id,
            })
            setContent('')
            setImages([])
            console.log(response.status)
            console.log(response.newPost)
            props.navigation.navigate('mainPage', {
                time: Date.now().toString()
            })
        }catch{
            err => console.log(err)
        }
    }

    return (
        <View style={{ backgroundColor: '#fff', height: '100%' }} >
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#fff", height: 60, marginTop: 20 }} >
                <Image source={{ uri: id }} style={{ width: 50, height: 50, borderRadius: 25, marginLeft: 10 }} />
                <View style={{ marginLeft: 15 }} >
                    <Text style={{ fontWeight: 'bold', fontSize: 16, width: '100%' }} >{name} {feeling} {activity}</Text>
                    <TouchableOpacity style={{ height: 30, width: 90, borderRadius: 5, borderColor: '#ccc', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }} >
                        <Text>Something</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Input

                    multiline={true}
                    onChangeText={text => {
                        callBackSetContent(text)
                    }
                    }
                    value={content}

                    
                    placeholder="What's on your mind?"
                    style={{
                        width: '100%',
                    
                        padding: 10,
                        fontSize: 21,
                        textAlignVertical:'top',
                        
                    }} />


            </View>
            <ImageView  images={images}/>
            <View>
                <TouchableOpacity
                    onPress={selectPhotoes}
                    style={{ flexDirection: 'row', width: '100%', height: 50, borderColor: '#ccc', borderBottomWidth: 0.5, borderTopWidth: 0.5, alignItems: 'center' }}>
                    <Icon name="image" color="green" size={25} style={{ marginLeft: 10 }} />
                    <Text style={{ fontSize: 18, marginLeft: 18, marginLeft: 10 }}>Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={selectFeeling}
                    style={{ flexDirection: 'row', width: '100%', height: 50, borderColor: '#ccc', borderBottomWidth: 0.5, borderTopWidth: 0.5, alignItems: 'center' }}>
                    <Icon1 name="tag-faces" color="orange" size={25} style={{ marginLeft: 10 }} />
                    <Text style={{ fontSize: 18, marginLeft: 18, marginLeft: 10 }}> Feeling/Activity</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default CreatePost

const styles = StyleSheet.create({
    st1: {
        height: 300,
        width: '100%'
    },
    st2: {
        width: '49%',
        height: 145,
        margin: 2
    },
    st3_1: {
        width: '60%',
        height: 300,
        margin: 2
    },
    st3_2: {
        width: '38%',
        height: 149,
        margin: 2
    },
    st4: {
        width: '49%',
        height: 149,
        margin: 2
    }
})