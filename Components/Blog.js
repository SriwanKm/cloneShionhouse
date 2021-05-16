import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet, Picker, Text, View, ImageBackground, TouchableOpacity, ScrollView, Button} from 'react-native';
import {GlobalStyles} from "../styles/Global";
import {ScaledSheet} from 'react-native-size-matters'
import {Ionicons, AntDesign, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import FeatureProducts from "./FeatureProducts";
import Footer from "./Footer";
import NewArrival from "./NewArrival";
import ShopPicker from "./ShopPicker"

const Drawer = createDrawerNavigator();


export default function Blog({navigation}) {

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
                        onPress={() => navigation.navigate('Home')}>

                        <Text style={GlobalStyles.navBandText}>Home</Text>
                    </TouchableOpacity>
                    <Text style={GlobalStyles.navBandText}>&#x3e;</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Blog')}>
                        <Text style={GlobalStyles.navBandText}>Blog</Text>
                    </TouchableOpacity>
                </View>

                <View style={GlobalStyles.mainSection}>






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
        },
    }
)

