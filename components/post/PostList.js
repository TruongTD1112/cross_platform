import React, {useRef} from 'react';
import {View, Text, ScrollView, Image} from 'react-native'

import {API_URL} from '../../apis/Constance'

const PostList = (props) => {
    const {images} = props
    return (
        <View style={{zIndex:999}} >
        <ScrollView>
            {images.map((img, index) => (
                <View style={{marginTop: 50}} >
                    <Image key={index} source={{uri : `${API_URL}/${img}`}} style={{width: '100%', height:700}} />

                </View>
            ))}
        </ScrollView>
        </View>
    );
}

export default PostList;
