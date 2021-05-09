import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Main from './Components/Main'
import {GlobalStyles} from "./styles/Global";
import {useFonts} from 'expo-font'

export default function App() {
    const [loaded] = useFonts({
        CormorantGaramondBold: require('./assets/fonts/CormorantGaramond-Bold.ttf'),

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
