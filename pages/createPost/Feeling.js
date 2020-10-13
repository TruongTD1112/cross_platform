import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator()

const list = [
    "🙂  happy",
    "😇  blessed",
    "🥰  loved",
    "😧  sad",
    "🥰  lovely",
    "😃  thankful",
    "🤩  excited",
    "🥰  inlove",
    "😜  crazy",
    "😬  grateful",
    "☺️  blissful",
    "🤩  fantastic"
]

const Feeling_Activity = props => {
    const [feeling, setFeeling] = useState('')
    const [activity, setActivity] = useState('')
    
    return (
        <Tab.Navigator
            initialLayout="FEELINGS"
            screenOptions={{}}
        >
            <Tab.Screen name="FEELINGS" children={prop => <Feeling   {...props} />} />
            <Tab.Screen name="ACTIVITIES" children={prop => <Activity  {...props}/>}  />
        </Tab.Navigator>
    )
}

const Feeling = props => {
    const setFeeling = (feeling) => {
        props.navigation.navigate('Create Post', {
            feeling : feeling
        })
    }
    return (
        <View style={{flexWrap:'wrap', flexDirection:'row'}} >
            {list.map((value, key)=>(
                <View key={key}
                    style={{
                        width: '50%', 
                        borderWidth: 0.5, 
                        borderColor: '#ccc', 
                        height: 50}}
                >
                    <TouchableOpacity
                        onPress={()=>setFeeling(value)} 
                        style={{
                            height:'100%', 
                            width: '100%', 
                            justifyContent:'center'}}
                    >
                        <Text style={{fontSize: 18, marginStart: 10}}>{value}</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    )
}
const listActivities = [
    "Celebrating...",
    "Eating...",
    "Drinking...",
    "Attending...",
    "Traveling to",
    "Looking for",
    "Thinking about",
    "Supporting"
]
const Activity = props => {
    const setActivity = (activity)=>{
        props.navigation.navigate('Create Post',{
            activity: activity
        })
    }
    return (
        <View style={{flexWrap:'wrap', flexDirection:'row'}} >
            {listActivities.map((value, key)=>(
                <View key={key} style={{width: '50%', borderWidth: 0.5, borderColor: '#ccc', height: 50}}>
                    <TouchableOpacity onPress={()=>setActivity(value)} style={{height:'100%', width: '100%', justifyContent:'center'}}>
                        <Text style={{fontSize: 18, marginStart: 10}}>{value}</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    )
}
export default Feeling_Activity