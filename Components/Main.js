import React from 'react';
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import {GlobalStyles} from "../styles/Global";
import {ScaledSheet} from 'react-native-size-matters'
import {Ionicons} from '@expo/vector-icons';

const image = {uri: "https://reactjs.org/logo-og.png"};

export default function Main() {
    return (
        <View style={GlobalStyles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}><Text style={styles.s}>S</Text>HION HOUSE</Text>
                <Ionicons style={styles.hamburger} name="ios-menu-sharp"/>
            </View>
            <ScrollView>
                <View style={styles.mainSection}>
                    <ImageBackground source={image} style={styles.image}>
                        <Text style={styles.text}>FASHION ALWAYS CHANGING</Text>
                        <TouchableOpacity style={styles.shopButton}>
                            <Text style={styles.shopButtonText}>Shop Now</Text>
                        </TouchableOpacity>
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
        fontFamily: 'Ramaraja',
        fontSize: '34@s',
        color: '#1D2547',
        letterSpacing: 1.5,
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
        fontSize: '45@s',
        textAlign: "center",
        fontFamily: 'Ramaraja',
        lineHeight: '65@s',
    },
    s: {
        fontSize: '45@s'
    },
    shopButton: {
        flex: 1,
        backgroundColor: '#9F79FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    shopButtonText: {
        color: 'white',
    }
})
