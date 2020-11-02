import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler'
import RBSheet from 'react-native-raw-bottom-sheet'
import { Divider } from 'react-native-paper'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-community/async-storage';
import ImageView from '../ImageView'
import { likePost, disLikePost } from '../../apis/getPost'
import { API_URL } from '../../apis/Constance'
import { getTime } from '../../utils/time'
import PostList from './PostList'
import SingleImageView from './SingleImageView'


const Post = (props) => {
    const { post } = props
    const [isLike, setIsLike] = useState(false)
    const [likeList, setLikeList] = useState(post.likeList)
    const [amountLike, setAmountLike] = useState(post.likeList.length)
    const [amountCmt, setAmountCmt] = useState(0)
    const [likeDes, setLikeDes] = useState(post.likeList.length)
    const [hideContent, setHideContent] = useState(true)
    const refRBSheet = useRef()
    const singleImageRef = useRef()
    const postListRef = useRef()
    const limitContent = 100
    const userId = global.userId

    useEffect(() => {
        let L = amountLike
        console.log(likeList)
        if (L === 0) {
            setLikeDes('')
            return
        }
        if (L > 0) {
            setLikeDes(L)
        }
        let setLike = new Set(likeList)
        setLike.forEach((item) => {
            if (item.id === userId) {
                setIsLike(true)
                if (L === 1) setLikeDes('You')
                if (L > 1) setLikeDes(`You and ${L - 1} others`)
                return
            }
        })

    }, [likeList])

    const handleLike = async () => {
        const token = await AsyncStorage.getItem("token")
        if (isLike) {
            let response = await disLikePost(token, post._id, userId)
            if (response.status === 200) {
                setIsLike(false)
                setAmountLike(response.data.likeList.length)
                setLikeList(response.data.likeList)

            }
        }
        else {
            let response = await likePost(token, post._id, userId)
            if (response.status === 200) {
                setIsLike(true)
                setAmountLike(response.data.likeList.length)
                setLikeList(response.data.likeList)
            }
        }
    }

    const goProfile = (id, name)=>{
        if (id === userId) global.goProfile()
        else {
            global.goUserProfile(id, name)
        }
    }

    return (
        <View style={styles.container}>
            {/* title */}
            <View style={{ flexDirection: 'row', paddingTop: 5, paddingLeft: 10, justifyContent: 'space-between' }} >
                <View style={{flexDirection: 'row'}}>
                    <Image source={{ uri: `${API_URL}/avatar/${post.author.id}.jpg` }} style={{ width: 40, height: 40, borderRadius: 20 }} />
                    <View style={{ marginLeft: 10, }} >
                        <Text onPress={()=>goProfile(post.author.id, post.author.name)} style={{ fontWeight: 'bold', fontSize: 16 }}>{post.author.name}</Text>
                        <Text style={{ color: "#888", fontSize: 12 }} >{getTime(post.createdAt)}</Text>

                    </View>
                </View>
                {
                    userId === post.author.id && 
                    <TouchableOpacity style={{marginRight:10}} onPress={()=>refRBSheet.current.open()} >
                        <Icon1 name="dots-horizontal" color="black" size={20} style={{}} />
                    </TouchableOpacity>
                }
            </View>


            {
                hideContent ? 
                <TouchableOpacity onPress={()=>setHideContent(!hideContent)} style={{ paddingLeft:5,paddingRight :0, paddingTop: 10, paddingBottom: 5, width: '100%' }}>
                {post.content.length > limitContent ?
                    (
                        <Text style={{ fontSize: 16,  }}   >
                            {post.content.substring(0, limitContent)}
                            <TouchableHighlight onPress={()=>setHideContent(!hideContent)} ><Text style={{ color: "#444", fontSize: 16 }} >See more...</Text></TouchableHighlight>
                        </Text>
                    )
                    :
                    <Text style={{fontSize: 16 }} >
                        {post.content}
                    </Text>
                }
                </TouchableOpacity>
                : 
                <Text onPress={()=>setHideContent(true)} style={{fontSize: 16, paddingLeft:5,paddingRight :0, paddingTop: 10, paddingBottom: 5, width: '100%'  }} >
                    {post.content}
                </Text>
            }
            {/* image/video */}
            <ImageView images={post.images} openImageList={()=>{
                if (post.images.length===0) return
                if (post.images.length===1) {
                    singleImageRef.current.open()
                    return 
                }
                postListRef.current.open()

            }} />
            <RBSheet
                ref={singleImageRef}
                closeOnDragDown={true}
                closeOnPressMask={true}
                closeOnPressBack={true}
                
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0,0,0,0.5)",
                    
                    },
                    draggableIcon: {
                        display: 'none'
                    },
                    container: {
                        // height: 180,

                    }
                }}
            >
                <SingleImageView images = {post.images} />
            </RBSheet>

            <RBSheet 
                ref={postListRef}
                closeOnDragDown={true}
                closeOnPressMask={true}
                closeOnPressBack={true}
                
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0,0,0,0.5)",
                       
                    },
                    draggableIcon: {
                        display: 'none'
                    },
                    container: {
                        height: '100%',

                    }
                }}
            >
                <PostList images={post.images} />
            </RBSheet>
            <View style={{ height: 30, flexDirection: 'row', padding: 0, justifyContent: 'space-between' }}>
                <View style={{ width: '59%', flexDirection: 'row', height: 43, alignItems: 'center', justifyContent:'flex-start' }}>
                    <View style={{ width: 20, height: 20, backgroundColor: "#1a73e8", borderRadius: 15, alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                        <Icon name="like1" size={12} color="#fff" />
                    </View>
                    <Text style={{ fontSize: 13, marginLeft: 5, color:isLike? "#1a73e8": "#444" }}>{likeDes}</Text>
                </View>
                <View style={{ width: '40%', flexDirection: 'row', height: 43, alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Text style={{ fontSize: 13 }}>{amountCmt} Comments </Text>

                </View>
            </View>
            {/* action */}
            <Divider style={{ marginTop: 15, width: '95%', alignSelf: 'center', height: 0.5, backgroundColor: '#ccc' }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: 40 }}>
                <TouchableOpacity onPress={handleLike} style={{ height: '100%' }}  >
                    <View flexDirection="row" style={{ alignItems: 'center', height: '100%' }}  >
                        <Icon name={isLike ? "like1" : "like2"} size={20} color={isLike ? "#1a73e8" : "black"} />
                        <Text style={{ fontSize: 14, marginLeft: 5, color: "#444", marginTop: 7 }} >Like</Text>
                    </View>
                </TouchableOpacity>
                <View flexDirection="row" style={{ alignItems: 'center', height: '100%' }}>
                    <Icon1 name="comment-outline" size={20} color="black" style={{ marginTop: 6 }} />
                    <Text style={{ fontSize: 14, marginLeft: 5, color: "#444", marginTop: 7 }}>Comment</Text>
                </View>

            </View>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                closeOnPressBack={true}
                height={160}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0,0,0,0.5)",
                       
                    },
                    draggableIcon: {
                        display: 'none'
                    },
                    container: {
                        // height: 180,

                    }
                }}
            >
                <View>
                    <View style={{height: 50 ,flexDirection: 'row', paddingLeft: 15, alignItems: 'center', marginTop: 5}} >
                        <Icon name="edit" color="black" size={25} />
                        <Text style={{fontSize: 16, marginLeft: 15}} >Edit post</Text>
                    </View>
                    <View style={{height: 50 ,flexDirection: 'row', paddingLeft: 15, alignItems: 'center', marginTop: 5}}>
                        <Icon name="delete" color="black" size={25} />
                        <Text style={{fontSize: 16, marginLeft: 15}}>Delete</Text>
                    </View>
                </View>
            </RBSheet>

            {/* for post has only 1 image */}
            <RBSheet>

            </RBSheet>
            {/* for post with more than 1 images */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        marginVertical: 10,
        backgroundColor: "#fff",
        position: 'relative'
    },

})

export default Post

