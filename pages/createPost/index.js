import React, {useState} from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { TouchableOpacity, Text, View } from 'react-native'
import CreatePost from './main'
import Feeling from './Feeling'

const Stack = createStackNavigator()

const NewPost = (props) => {
    const [valid, setValid] = useState(false)
    
    const validToPost = (value) => {
        setValid(value)
    }
    const handlePost = async()=>{
        console.log("PSSSSSSSSSSSSOSOSOS")
        await global.post()
    }
    return (
        <>
            <Stack.Navigator initialRouteName="Create Post">
                <Stack.Screen name="Create Post"
                    options={{
                        headerRight: () => <TouchableOpacity onPress={handlePost}  style={{ marginRight: 10 }}><Text style={{ fontSize: 14, color: valid ? "#1a73e8" : '#bbb' }} >POST</Text></TouchableOpacity>,
                        headerTitleStyle: { fontSize: 16 },
                        headerStyle: { shadowOffset: 0 }
                    }}
                    children={(props) => <CreatePost {...props} validToPost={validToPost} />} />
                <Stack.Screen options={{ headerTitle: "Your feeling - Acitvities", headerTitleStyle: { fontSize: 16 } }} name="Feeling" children={(props) => <Feeling {...props} />} />

            </Stack.Navigator>
        </>
    )
}
export default NewPost
