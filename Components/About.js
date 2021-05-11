import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Button} from 'react-native';
import {GlobalStyles} from "../styles/Global";
import {ScaledSheet} from 'react-native-size-matters'
import {Ionicons, AntDesign, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import FeatureProducts from "./FeatureProducts";
import Footer from "./Footer";
import NewArrival from "./NewArrival";

const Drawer = createDrawerNavigator();


const image = [
    {uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/about1.png"},
    {uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/about2.png"},
]


export default function About({navigation}) {

    return (
        <View style={GlobalStyles.container}>


            <ScrollView>
                <View style={GlobalStyles.logoContainer}>
                    <Text style={GlobalStyles.logoText}><Text style={GlobalStyles.s}>S</Text>HION HOUSE</Text>
                    <Ionicons
                        style={GlobalStyles.hamburger}
                        onPress={() => navigation.toggleDrawer()}
                        name="ios-menu-sharp"/>
                </View>

                <View style={GlobalStyles.navBand}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Main')}>
                        <Text style={GlobalStyles.navBandText}>Home</Text>
                    </TouchableOpacity>
                    <Text style={GlobalStyles.navBandText}>&#x3e;</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('About')}>
                        <Text style={GlobalStyles.navBandText}>About</Text>
                    </TouchableOpacity>
                </View>

                <View style={GlobalStyles.mainSection}>
                    <View style={{alignItems: 'center'}}>
                    <Text style={GlobalStyles.logoText}><Text style={GlobalStyles.s}>O</Text>UR <Text style={GlobalStyles.s}>S</Text>TORY</Text>
                    </View>
                    <Text style={styles.aboutDetails}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </Text>
                    <ImageBackground source={image[0]} style={[GlobalStyles.image, {height: 250}]}/>

                    <View style={{alignItems: 'center'}}>
                        <Text style={GlobalStyles.logoText}><Text style={GlobalStyles.s}>J</Text>OURNEY START FROM</Text>
                    </View>
                    <Text style={styles.aboutDetails}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </Text>
                    <ImageBackground source={image[1]} style={[GlobalStyles.image, {height: 250}]}/>

                    <View style={{alignItems: 'center'}}>
                        <Text style={GlobalStyles.logoText}>2020</Text>
                    </View>
                    <Text style={styles.aboutDetails}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </Text>
                    <FeatureProducts/>

                </View>
                <Footer/>
            </ScrollView>
        </View>
    )
}

const styles = ScaledSheet.create(
    {
        aboutDetails: {
            textAlign: 'center',
            color: '#646D77',
            fontSize: '16@s',
            lineHeight: '25@s',
            paddingBottom: '28@s',
        }
    }
)

