import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import SearchTab from './searchTab'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon1 from 'react-native-vector-icons/Ionicons'

const MyTabBar = ({ state, descriptors, navigation, icons }) => {

    
    // 
    const showAnimation = useRef(new Animated.Value(0)).current


    const show = () => {
        if (state.index != 0) {
            Animated.timing(showAnimation, {
                toValue: -50,
                duration: 200,
                delay: 40,
                easing: Easing.ease,
                useNativeDriver: false
            }).start()
            return
        }
        Animated.timing(showAnimation, {
            toValue: 0,
            duration: 200,
            delay: 40,
            useNativeDriver: false,

        }).start()

    }

    const hAnimation = useRef(new Animated.Value(47)).current
    const slided = () => {
        if (state.index != 0) {
            Animated.timing(hAnimation, {
                toValue: 0,
                duration: 200,
                useNativeDriver: false,
                delay: 50
            }).start()
            return
        }
        Animated.timing(hAnimation, {
            toValue: 47,
            duration: 200,
            useNativeDriver: false,
            delay: 50
        }).start()

    }



    useEffect(() => {
        show()
        slided()
    });


    const aniStyle = {
        transform: [
            { translateY: showAnimation }
        ],
        height: hAnimation
    }

    return (

        <Animated.View>
            
                <Animated.View
                    style={aniStyle}
                >
                    <SearchTab />
                
            </Animated.View>


            <View style={{ flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-around', alignSelf: 'stretch', borderBottomColor: "#ccc", borderBottomWidth:1}}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];

                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityStates={isFocused ? ['selected'] : []}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ paddingVertical: 10, flexGrow: 2, alignItems: 'center', borderBottomColor: isFocused ? "#1a73e8" : "#fff", borderBottomWidth: 2 }}
                            key={index}
                        >
                            { index ===4  && <Icon1 name={"notifications"} size={27} color={isFocused ? "#1a73e8" : "#333"} />}
                            { index !==4 && <Icon name={icons[index]} size={27} color={isFocused ? "#1a73e8" : "#333"} />}
                        </TouchableOpacity>
                    );
                })}
            </View>
        </Animated.View>

    );
}

export default MyTabBar


