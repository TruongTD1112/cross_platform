import React, {useState, useEffect} from 'react'
import { ScrollView, Animated, View, FlatList} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import SearchTab from '../../components/searchTab'
import 'react-native-gesture-handler';

import Post from '../../components/Post'

const newsFeed = (props) => {
    const scrollY = new Animated.Value(0)
    const diffClamp = Animated.diffClamp(scrollY, 0, 50)
    const translateY = diffClamp.interpolate({
        inputRange: [0, 50],
        outputRange: [0, -50]
    })
    return (
        <View style={{}}>
            {/* <Animated.View> */}
                <ScrollView
                   
                >
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/> 
            </ScrollView>
            {/* </Animated.View> */}
            
        </View>
    )
}
export default newsFeed