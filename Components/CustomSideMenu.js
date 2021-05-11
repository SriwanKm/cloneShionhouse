//This is an example code for Navigation Drawer with Custom Side bar//
//This Example is for React Navigation 3.+//
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import Main from './Main'
import {GlobalStyles} from "../styles/Global";
import {useFonts} from 'expo-font'
import * as ScreenOrientation from 'expo-screen-orientation'
import About from './About'
import Shop from './Shop';

export default function CustomSidebarMenu({ navigation }) {

        let items = [
            {
                navOptionThumb: 'camera',
                navOptionName: 'First Screen',
                screenToNavigate: 'Main',
            },
            {
                navOptionThumb: 'image',
                navOptionName: 'Second Screen',
                screenToNavigate: 'Shop',
            },
            {
                navOptionThumb: 'build',
                navOptionName: 'Third Screen',
                screenToNavigate: 'About',
            },
        ];


        return (
            <View style={styles.sideMenuContainer}>

                <View
                    style={{
                        width: '100%',
                        height: 1,
                        backgroundColor: '#e2e2e2',
                        marginTop: 15,
                    }}
                />
                {/*Setting up Navigation Options from option array using loop*/}
                <View style={{ width: '100%' }}>
                    {items.map((item, key) => (
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingTop: 10,
                                paddingBottom: 10,
                            }}>
                            <View style={{ marginRight: 10, marginLeft: 20 }}>
                                <Icon name={item.navOptionThumb} size={25} color="#808080" />
                            </View>
                            <Text
                                style={{
                                    fontSize: 15,
                                }}
                                onPress={() => {
                                    global.currentScreenIndex = key;
                                    navigation.navigate(item.screenToNavigate);
                                }}>
                                {item.navOptionName}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    sideMenuContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 20,
    },
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius: 150 / 2,
    },
});
