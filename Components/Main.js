import React from 'react';
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import {GlobalStyles} from "../styles/Global";
import {ScaledSheet} from 'react-native-size-matters'
import {Ionicons, AntDesign, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';

const image = {uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular4.png"};

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
                        <View style={styles.socialContainer}>
                            <TouchableOpacity style={styles.iconBorder}>
                                <AntDesign style={styles.socialIcon} name="twitter"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconBorder}>
                                <FontAwesome name="facebook" style={styles.socialIcon}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconBorder}>
                                <FontAwesome name="pinterest-p" size={22} color="white"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.searchIconBorder, styles.iconBorder]}>
                                <Ionicons name="ios-search-outline" size={22} color="black"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.addToCardBorder}>
                                <MaterialCommunityIcons name="shopping-outline" style={styles.socialIcon}/>
                                <Text style={{color: 'white', paddingHorizontal: 2}}>0</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.inImgText}>FASHION</Text>
                        <Text style={styles.inImgText}>ALWAYS</Text>
                        <Text style={styles.inImgText}>CHANGING</Text>

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
        flex: '0.2@s',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '15@s',
        marginTop: '50@s',
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
        marginTop: '10@s',
    },
    mainSection: {
        margin: '15@s',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        height: '390@s',
        justifyContent: "center",
        alignItems: 'center',

    },
    inImgText: {
        flex: 1,
        color: "white",
        fontSize: '45@s',
        textAlign: "center",
        fontFamily: 'Ramaraja',
        lineHeight: '80@s',
    },
    s: {
        fontSize: '45@s'
    },
    shopButton: {
        backgroundColor: '#9F79FF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '15@s',
        paddingHorizontal: '28@s',
        borderRadius: 5,
        marginVertical: '45@s',
    },
    shopButtonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: '18@s',
        letterSpacing: 1,
    },
    socialIcon: {
        fontSize: '20@s',
        color: "white",
    },
    iconBorder: {
        borderColor: 'white',
        borderWidth: 1,
        width: '42@s',
        height: '42@s',
        borderRadius: 100,
        padding: 12,
        marginHorizontal: '5@s',
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialContainer: {
        flexDirection: 'row',
        marginTop: '15@s',
        marginBottom: '50@s',

    },
    searchIconBorder: {
        backgroundColor: 'white'
    },
    addToCardBorder: {
        backgroundColor: '#9F79FF',
        height: '42@s',
        borderRadius: 100,
        padding: 12,
        marginHorizontal: '5@s',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
})
