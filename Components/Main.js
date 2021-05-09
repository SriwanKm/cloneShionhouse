import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from "../styles/Global";
import { ScaledSheet } from 'react-native-size-matters'
import { Ionicons } from '@expo/vector-icons';

export default function Main() {
    return (
        <View style={GlobalStyles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>SHION HOUSE</Text>
                <Ionicons name="ios-menu-sharp" size={'44@s'} color={'#9F79FF'}/>
            </View>
        </View>
    );
}

const styles = ScaledSheet.create({
    logoContainer: {
        // flex: 1,
        backgroundColor: '#ffffff',
        // alignItems: 'center',
        // justifyContent: 'center',
        // paddingVertical: 18,
        padding: '25@s',

    },
    logoText: {
        fontFamily: 'AbrilFatface',
        fontSize: 30,
    },
})
