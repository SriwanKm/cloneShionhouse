import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from "../styles/Global";
import { ScaledSheet } from 'react-native-size-matters'

export default function Main() {
    return (
        <View style={GlobalStyles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>SHION HOUSE</Text>
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
        fontFamily: 'CormorantGaramondBold',
        fontSize: 30,
    },
})
