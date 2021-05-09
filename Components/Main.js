import React from 'react';
import {StyleSheet, Text, View, ImageBackground, SafeAreaView, ScrollView} from 'react-native';
import {GlobalStyles} from "../styles/Global";
import {ScaledSheet} from 'react-native-size-matters'
import {Ionicons} from '@expo/vector-icons';

const image = {uri: "https://reactjs.org/logo-og.png"};

export default function Main() {
    return (
            <View style={GlobalStyles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logoText}>SHION HOUSE</Text>
                    <Ionicons style={styles.hamburger} name="ios-menu-sharp"/>
                </View>
                <ScrollView>
                    <View style={styles.mainSection}>
                        <ImageBackground source={image} style={styles.image}>
                            <Text style={styles.text}>FASHION ALWAYS CHANGING</Text>
                        </ImageBackground>
                    </View>
                </ScrollView>
            </View>
    )
        ;
}

const styles = ScaledSheet.create({
    logoContainer: {
        flex: '0.15@s',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        // justifyContent: 'center',
        paddingHorizontal: '15@s',
        paddingTop: '50@s',
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
    },
    mainSection: {
        paddingHorizontal: '15@s',
    },
    image: {
        // flex: 1,
        resizeMode: "cover",
        height: '300@s',
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontSize: 42,
        textAlign: "center",
        fontFamily: 'AbrilFatface',
    },
})
