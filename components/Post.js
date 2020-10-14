import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Divider } from 'react-native-paper'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'

const Post = (props) => {
    return (
        <View style={styles.container}>
            {/* title */}
            <View style={{ flexDirection: 'row', paddingTop: 5, paddingLeft: 10 }} >
                <Image source={require('../pages/Profile/girl.jpg')} style={{ width: 40, height: 40, borderRadius: 20 }} />
                <View style={{ marginLeft: 10 }} >
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>I am Kiên :D</Text>
                    <Text style={{ color: "#888", fontSize: 12 }} >12h</Text>
                </View>
            </View>

            {/* textcontent */}
            <View style={{paddingHorizontal: 10, paddingTop: 10, paddingBottom: 5}}>
                <Text style={{fontSize: 15}}  >ksvhviurehgierhgerhgieru</Text>
            </View>
            {/* image/video */}
            <View>
                <Image source={require('../pages/Profile/girl.jpg')} style={{ width: '100%', height: 500 }} />
            </View>
            <View style={{ height: 30, flexDirection: 'row', padding: 0 }}>
                <View style={{ width: '59%', flexDirection: 'row',height:43, alignItems:'center' }}>
                    <View style={{ width: 20, height: 20, backgroundColor: "#1a73e8", borderRadius: 15, alignItems: 'center', justifyContent: 'center' ,marginLeft: 10 }}>
                        <Icon name="like1" size={12} color="#fff" />
                    </View>
                    <Text style={{fontSize: 13, marginLeft: 5}}>1.1K</Text>
                </View>
                <View style={{ width: '40%', flexDirection: 'row',height:43, alignItems:'center' }}>
                    <Text style={{fontSize: 13}}>15 Comments &#8226; </Text>
                    <Text style={{fontSize: 13}}>1 Share</Text>
                </View>
            </View>
            {/* action */}
            <Divider style={{ marginTop: 15, width: '95%', alignSelf: 'center', height: 0.5, backgroundColor: '#ccc' }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'stretch', height: 40, alignItems: 'center' }}>
                <View flexDirection="row" style={{ alignItems: 'center' }} >
                    <Icon name="like2" size={25} color="black" />
                    <Text style={{ fontSize: 13, marginLeft: 5 }} >Like</Text>
                </View>
                <View flexDirection="row" style={{ alignItems: 'center' }}>
                    <Icon1 name="comment-outline" size={25} color="black" />
                    <Text style={{ fontSize: 13, marginLeft: 5 }}>Comment</Text>
                </View>
                <View flexDirection="row" style={{ alignItems: 'center' }}>
                    <Icon1 name="share-outline" size={25} color="black" />
                    <Text style={{ fontSize: 13, marginLeft: 5 }}>Share</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        marginVertical: 10,
        backgroundColor: "#fff"
    },

})

export default Post

