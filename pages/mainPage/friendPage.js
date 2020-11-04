import React, {useState, useEffect} from 'react'
import {View,Text, TouchableOpacity} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler';
import Animated from 'react-native-reanimated'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { red100 } from 'react-native-paper/lib/typescript/src/styles/colors';

const friendPage = (props) => {
    return (
        <View style={{marginTop:20, borderColor: 'red', borderWidth: 2}} >
            <Text style = {{}}>
                Friend
            </Text>
        </View>
    )
}
const makeFriend = props =>{
    const [numberFriendRequests, setNumberFriendRequests] = useState('0');
    const numberRequest = props => {

    };
const RequestsFriends = () =>{
    AsyncStorage.getItem('amountRequestFriend').then(value => setNumberFriendRequests(value));
    }
    return (
        <view>
            <view style = {{flexDirection: 'row'}}>
                <Text>Friend Requests</Text>
                <Text style = {{color : red, marginLeft: 10}}>{numberFriendRequests}</Text>
                <Image uri = {{}} onPress={()=>props.navigation.navigate("./Search.index")}> </Image>
            </view>

            <view>
                <Text>Requests</Text>
            </view>
            <View>

            </View>

        </view>
    )
}


export default friendPage;