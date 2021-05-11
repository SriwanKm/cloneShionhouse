import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {LogBox, StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from "./styles/Global";
import {useFonts} from 'expo-font'
import * as ScreenOrientation from 'expo-screen-orientation'
import Stacks from "./Components/Stacks";


export default function App() {
    LogBox.ignoreLogs(['Remote debugger']);
    const [loaded] = useFonts({
        AbrilFatface: require('./assets/fonts/AbrilFatface-Regular.ttf'),
        ShipporMinchoB1: require('./assets/fonts/ShipporiMinchoB1-Regular.ttf'),
        Ramaraja: require('./assets/fonts/Ramaraja-Regular.ttf'),
    });

    const Stack = createStackNavigator();

    if (!loaded) {
        return null;
    }
    return (
        <Stacks/>
    );
}
