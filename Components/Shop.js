import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {GlobalStyles} from "../styles/Global";
import {ScaledSheet} from 'react-native-size-matters'
import {Ionicons} from '@expo/vector-icons';
import FeatureProducts from "./FeatureProducts";
import Footer from "./Footer";
import NewArrival from "./NewArrival";
import ShopPicker from "./ShopPicker"


export default function Shop({navigation}) {

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
                        onPress={() => navigation.navigate('Shop')}>
                        <Text style={GlobalStyles.navBandText}>Shop</Text>
                    </TouchableOpacity>
                </View>

                <View style={GlobalStyles.mainSection}>
                    <View>
                        <Text style={GlobalStyles.logoText}><Text style={GlobalStyles.s}>S</Text>HOP WITH US </Text>
                    </View>
                    <Text style={[styles.aboutDetails, {textAlign: 'left'}]}>
                        Browse from 230 latest items
                    </Text>

                    <ShopPicker/>
                    <NewArrival/>
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
        },
    }
)

