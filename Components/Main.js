import React from 'react';
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Button} from 'react-native';
import {GlobalStyles} from "../styles/Global";
import {ScaledSheet} from 'react-native-size-matters'
import {Ionicons, AntDesign, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import FeatureProducts from "./FeatureProducts";
import Footer from "./Footer";
import NewArrival from "./NewArrival";

const image = {uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular4.png"}


export default function Main() {
    return (
        <View style={GlobalStyles.container}>


            <ScrollView>
                <View style={styles.logoContainer}>
                    <Text style={GlobalStyles.logoText}><Text style={GlobalStyles.s}>S</Text>HION HOUSE</Text>
                    <Ionicons style={styles.hamburger} name="ios-menu-sharp"/>
                </View>


                <View style={GlobalStyles.mainSection}>
                    <ImageBackground source={image} style={GlobalStyles.image}>
                        <View style={GlobalStyles.socialContainer}>
                            <TouchableOpacity style={GlobalStyles.iconBorder}>
                                <AntDesign style={GlobalStyles.socialIcon} name="twitter"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={GlobalStyles.iconBorder}>
                                <FontAwesome name="facebook" style={GlobalStyles.socialIcon}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={GlobalStyles.iconBorder}>
                                <FontAwesome name="pinterest-p" size={22} color="white"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.searchIconBorder, GlobalStyles.iconBorder]}>
                                <Ionicons name="ios-search-outline" size={22} color="black"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={GlobalStyles.addToCardBorder}>
                                <MaterialCommunityIcons name="shopping-outline" style={GlobalStyles.socialIcon}/>
                                <Text style={{color: 'white', paddingHorizontal: 2}}>0</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.inImgText}>FASHION</Text>
                        <Text style={styles.inImgText}>ALWAYS</Text>
                        <Text style={styles.inImgText}>CHANGING</Text>
                        <TouchableOpacity style={GlobalStyles.shopButton}>
                            <Text style={GlobalStyles.shopButtonText}>Shop Now</Text>
                        </TouchableOpacity>
                    </ImageBackground>


                    <FeatureProducts/>
                    <View style={styles.topArrivalHeadSection}>
                        <Text style={styles.topArrivalHeader}>NEW</Text>
                        <Text style={styles.topArrivalHeader}>ARRIVAL</Text>
                    </View>
                    <NewArrival/>
                </View>
                <Footer/>
            </ScrollView>
        </View>
    )
}

const styles = ScaledSheet.create({
    logoContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '25@s',
        marginTop: '50@s',
        flexDirection: 'row',
    },

    hamburger: {
        flex: 1,
        fontSize: '44@s',
        color: '#9F79FF',
        textAlign: 'right',
    },

    inImgText: {
        flex: 1,
        color: "white",
        fontSize: '45@s',
        textAlign: "center",
        fontFamily: 'Ramaraja',
        lineHeight: '80@s',
    },
    searchIconBorder: {
        backgroundColor: 'white'
    },
    topArrivalHeader: {
        fontFamily: 'Ramaraja',
        fontSize: '34@s',
        color: '#1D2547',
        lineHeight: '45@s'
    },
    topArrivalHeadSection: {
        alignItems: 'center',
        paddingVertical: '20@s',
    }
})
