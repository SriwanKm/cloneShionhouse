import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Main from './Components/Main'
import {GlobalStyles} from "./styles/Global";
import {useFonts} from 'expo-font'

export default function App() {
    const [loaded] = useFonts({
        AbrilFatface: require('./assets/fonts/AbrilFatface-Regular.ttf'),
        ShipporMinchoB1: require('./assets/fonts/ShipporiMinchoB1-Regular.ttf'),
        Ramaraja: require('./assets/fonts/Ramaraja-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }
    return (
        <View style={GlobalStyles.container}>
            <Main/>
        </View>
    );
}
