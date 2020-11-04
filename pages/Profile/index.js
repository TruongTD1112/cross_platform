import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageEditor } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { upload } from '../../apis/Upload'
import AsyncStorage from '@react-native-community/async-storage'
import Overlay from 'react-native-modal-overlay/index'
import Button from '../../components/Button'
import { Divider } from 'react-native-paper'
import {API_URL} from '../../apis/Constance'
import Post from '../../components/Post'

const Profile = (props) => {

    const [avatar, setAvatar] = useState('')
    const [wall, setWall] = useState('')
    const [whichImage, setWhichImage] = useState('')
    const [path, setPath] = useState('a')
    const [wallPath, setWallPath] = useState('a')
    const [modalVisible, setModalVisible] = useState(false)
    const [userName, setUserName] = useState('')
    const [confirm, setConfirm] = useState(false)
    const x = 'aaaaa'
    const setName = () =>{
        AsyncStorage.getItem('Name').then(value => setUserName(value))
        AsyncStorage.getItem('id').then(id => {
            setPath(`${API_URL}/avatar/${id}.jpg?date=${Date.now().toString()}`)
            setWallPath(`${API_URL}/wallpaper/${id}.jpg?date=${Date.now().toString()}`)
        })
    }
    useEffect(() => {        
        let mounted = true
        if (mounted)  setName()
        return ()=> mounted = false
    }, [x])

    const openGallery = (which) => {
        ImagePicker.openPicker({
            width: 800,
            height: 800,
            cropping: true,
        })
            .then(image => {
                if (which === 'wall') {
                    // setWallPath(image.path)
                    setWall(image)
                    setModalVisible(false)
                    setConfirm(true)
                } else {
                    // setPath(image.path)
                    setAvatar(image)
                    setModalVisible(false)
                    setConfirm(true)
                }
            })
            .catch(err => console.log("err", err))
    }
    const openCamera = (which) => {
        ImagePicker.openCamera({
            width: 800,
            height: 800,
            cropping: true,
        })
            .then(image => {
                if (which === 'wall') {
                    // setWallPath(image.path)
                    setWall(image)
                    setModalVisible(false)
                    setConfirm(true)
                } else {
                    // setPath(image.path)
                    setAvatar(image)
                    setModalVisible(false)
                    setConfirm(true)
                }
            })
            .catch(err => console.log("err", err))
    }

    const updateAvatar = async () => {
        let tk = await AsyncStorage.getItem('token')
        try {
            let id = await AsyncStorage.getItem("id")
            const response = await upload('POST', API_URL + '/upload-avatar', tk, avatar)
            // console.log(response.data.msg)
            let newPath = `${API_URL}/avatar/${id}.jpg?date=${Date.now().toString()}`
            if (response.data.msg != '') {
                console.log("Bew Path: ", newPath)
                setPath(newPath)
            }
        } catch {
            err => console.log("err upload", err)
        }
        setConfirm(false)
    }

    const updateWall = async () => {
        let tk = await AsyncStorage.getItem('token')
        try {
            let id = await AsyncStorage.getItem("id")
            const response = await upload('POST', API_URL +  '/upload-wall-paper', tk, wall)
            if (response.data.msg != '') setWallPath(`${API_URL}/wallpaper/${id}.jpg?date=${Date.now().toString()}`)

            else console.log(response.status)
        } catch {
            err => console.log("err upload", err)
        }
        setConfirm(false)
    }

    return (
        <View style={{ height: '100%', width: '100%', position: 'relative', backgroundColor: '#fff' }} >
            <View style={{ height: '30%', backgroundColor: 'gray', borderTopRightRadius: 5, borderTopLeftRadius: 5, margin: 12, position: 'relative' }}>
                <Image source={{ uri: wallPath }} style={{ height: '100%', width: '100%', borderTopRightRadius: 5, borderTopLeftRadius: 5 }} />
                <TouchableOpacity
                    style={{ position: 'absolute', right: 10, bottom: 10, borderRadius: 100, backgroundColor: '#dddddd', padding: 5 }}
                    onPress={() => { setModalVisible(true); setWhichImage('wall') }}
                >
                    <Icon name="camera" color="black" size={20} />
                </TouchableOpacity>

            </View>

            <View
                style={{
                    width: 200,
                    backgroundColor: '#fff',
                    height: 200,
                    marginLeft: '25%',
                    marginTop: '-27%',
                    borderRadius: 100,
                    padding: 5
                }}
            >

                <Image source={{ uri: path }} style={{ height: '100%', width: '100%', borderRadius: 100 }} />
                <TouchableOpacity
                    style={{ position: 'absolute', right: 15, bottom: 15, borderRadius: 100, backgroundColor: '#dddddd', padding: 5 }}
                    onPress={() => { setModalVisible(true); setWhichImage('avatar') }}
                >
                    <Icon name="camera" color="#1a73e8" size={25} />
                </TouchableOpacity>

            </View>
            <View style={{ alignSelf: 'center', padding: 10, marginTop: 5 }}>
                <Text style={{ fontSize: 26, fontWeight: 'bold' }}>{userName}</Text>

            </View>

            <Overlay

                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                closeOnTouchOutside
                animationType="fadeInUpBig"
                duration={100}
                delay={0}
                containerStyle={{ backgroundColor: 'rgba(37,37, 37, 0.78)', position: 'relative', padding: 0 }}
                childrenWrapperStyle={{ backgroundColor: '#eee', padding: 0, position: 'absolute', bottom: 0, width: '100%', borderTopLeftRadius: 25, borderTopRightRadius: 25, }}
                animationDuration={500}
            >
                <View style={styles.modalView} >
                    <TouchableOpacity
                        style={{ ...styles.openButton }}
                        onPress={() => {
                            openCamera(whichImage)
                        }}

                    >
                        <View
                            style={{ borderRadius: 100, backgroundColor: '#dddddd', padding: 5, width: 30 }}

                        >
                            <Icon name="camera" color="black" size={20} />
                        </View>
                        <Text style={styles.textStyle}>Open Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ ...styles.openButton }}
                        onPress={() => {
                            openGallery(whichImage)
                        }}
                    >
                        <View
                            style={{ borderRadius: 100, backgroundColor: '#dddddd', padding: 5, width: 30 }}

                        >
                            <Icon name="image" color="black" size={20} />
                        </View>
                        <Text style={styles.textStyle}>Choose from Gallery</Text>
                    </TouchableOpacity>


                </View>
            </Overlay>


            <View flexDirection="row" style={{ alignSelf: 'center' }}>
                <Button style={{ width: 330 }} icon={<Icon name="plus-circle" color="white" size={20} style={{ paddingTop: 2 }} />} >Add new</Button>
                <Button style={{ width: 50, backgroundColor: "#cfcfcf", marginLeft: 10 }} icon={<Icon name="dots-horizontal" color="black" size={20} style={{ paddingTop: 2 }} />}  ></Button>
            </View>
            <Divider style={{ marginTop: 15, width: '95%', alignSelf: 'center', height: 1, backgroundColor: '#ccc' }} />

            <Overlay
                visible={confirm}
                onClose={() => setConfirm(false)}
                closeOnTouchOutside
                animationType="fadeInUpBig"
                duration={100}
                delay={0}
                containerStyle={{ backgroundColor: 'rgba(37,37, 37, 0.78)', position: 'relative', width: '100%', padding: 0, alignItems: 'center', height: 200 }}
                childrenWrapperStyle={{ backgroundColor: '#eee', padding: 0, height: 200, width: '65%', borderRadius: 5 }}
                animationDuration={500}
            >
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 30, alignSelf: 'center' }} >Save this change?</Text>
                    <View style={{ flexDirection: 'row', marginTop: 70 }}>
                        <Button
                            style={{ marginRight: 15, width: 100 }}
                            onPress={() => {
                                if (whichImage === 'wall') updateWall()
                                else updateAvatar()
                            }}>OK</Button>
                        <Button
                            style={{ width: 100 }}
                            onPress={() => setConfirm(false)}
                        >Cancel</Button>
                    </View>
                </View>
            </Overlay>
            <Description/>
            <Biography/>
        </View>

    )
}
export default Profile


const Description = () => {
    const [description, setDescription] = useState('');
    const setDes = () =>{
        AsyncStorage.getItem('Description').then(value => setDescription(value))
    }

    return(
        <View style = {{marginTop : 20, justifyContent: 'center', padding: 20, color : 'black'}}>
            <Text>{description}</Text>
        </View>        
    )
}

const Biography = () => {
    const [biography, setBiography] = useState('');
    const [homeTown, setHometown] = useState('');
    const [education, setEducation] = useState('');

    const setDes = () =>{
        AsyncStorage.getItem('biography').then(value => setBiography(value));
        setHometown(biography.homeTown);
        setEducation(biography.setEducation);
    }
    return (
        <View>
            <View styles = {{flexDirection :' row'}}>
                <Image source = {{uri : "hgfhgfg"}}/>
                <Image style = {{padding : 10}}/>
            </View>

            <View styles = {{flexDirection : 'row'}}>
                <Image source = {{uri : "hgfhgfg"}}/>
                <Text style = {{padding : 10}}>kkkk</Text>
            </View>
        </View>
        
    )
}

const TimeLine = () => {
    for(var i= 1; i<= 5; i++){
        Post();
    }
}

const styles = StyleSheet.create({

    modalView: {
        width: '100%',
        backgroundColor: "white",
        padding: 15,
        alignItems: "center",
        shadowColor: "#222",

        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        // position: 'absolute',
        // bottom: 0,

    },
    openButton: {
        color: 'black',
        width: '100%',
        padding: 10,
        flexDirection: 'row',

    },
    textStyle: {
        color: 'black',
        fontWeight: "bold",
        paddingLeft: 10,
        paddingTop: 3,
        fontSize: 16
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
