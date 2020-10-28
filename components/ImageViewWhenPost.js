import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'


const ImageViewWhenPost = (props) => {
    const { images } = props

    return (
        <View style={styles.container}>
            {images.length === 0 && <View></View>}
            {images.length === 1 &&
                <View
                    style={{
                        flex: 1,
                        height: '100%'
                    }}
                >
                    <Image source={{uri: `${images[0].path}` }} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
                </View>
            }
            {images.length === 2 &&
                <View style={styles.container}>
                    <View style={{ flex: 0.5, }}>
                        <Image source={{uri: `${images[0].path}` }} style={{ width: '100%', height: '100%', borderWidth: 2, borderColor: "#fff" }} resizeMode="cover" />

                    </View>
                    <View style={{ flex: 0.5, }}>
                        <Image source={{uri: `${images[1].path}` }} style={{ width: '100%', height: '100%',  borderWidth: 2, borderColor: "#fff" }} resizeMode="cover" />

                    </View>
                </View>

            }
            {images.length === 3 &&
                <View style={styles.container}>
                    <View style={{ flex: 0.5, height: '100%' }}>
                        <Image source={{uri: `${images[0].path}` }} style={{ width: '100%', height: '50%',  borderWidth: 2, borderColor: "#fff" }} resizeMode="cover" />
                        <Image source={{uri: `${images[1].path}` }} style={{ width: '100%', height: '50%',  borderWidth: 2, borderColor: "#fff" }} resizeMode="cover" />

                    </View>
                    <View style={{ flex: 0.5, height: '100%' }}>
                        <Image source={{uri: `${images[2].path}` }} style={{ width: '100%', height: '100%',  borderWidth: 2, borderColor: "#fff" }} resizeMode="cover" />

                    </View>
                </View>
            }
            {images.length === 4 &&
                <View style={styles.container}>
                    <View style={{ flex: 0.5, height: '100%' }}>
                        <Image source={{uri: `${images[0].path}` }} style={{ width: '100%', height: '50%',  borderWidth: 2, borderColor: "#fff" }} resizeMode="cover" />
                        <Image source={{uri: `${images[1].path}` }} style={{ width: '100%', height: '50%',  borderWidth: 2, borderColor: "#fff" }} resizeMode="cover" />

                    </View>
                    <View style={{ flex: 0.5, height: '100%' }}>
                        <Image source={{uri: `${images[2].path}` }} style={{ width: '100%', height: '50%',  borderWidth: 2, borderColor: "#fff" }} resizeMode="cover" />
                        <Image source={{uri: `${images[3].path}` }} style={{ width: '100%', height: '50%',  borderWidth: 2, borderColor: "#fff" }} resizeMode="cover" />

                    </View>
                </View>
            }

            


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        height: 400,
        width: '100%'
    },

})

export default ImageViewWhenPost

