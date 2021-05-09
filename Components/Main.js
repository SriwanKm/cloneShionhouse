import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from "../styles/Global";
import {ScaledSheet} from 'react-native-size-matters'
import {Ionicons} from '@expo/vector-icons';

export default function Main() {
    return (
        <View style={GlobalStyles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>SHION HOUSE</Text>
                <Ionicons style={styles.hamburger} name="ios-menu-sharp"/>
            </View>
        </View>
    );
}

const styles = ScaledSheet.create({
    logoContainer: {
        flex: 0.15,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        // justifyContent: 'center',
        paddingHorizontal: '20@s',
        paddingTop: 0,
        flexDirection: 'row',
    },
    logoText: {
        fontFamily: 'AbrilFatface',
        fontSize: '30@s',
        color: '#1D2547',
    },
    hamburger: {
        flex: 1,
        fontSize: '44@s',
        color: '#9F79FF',
        textAlign: 'right',
    }
})
