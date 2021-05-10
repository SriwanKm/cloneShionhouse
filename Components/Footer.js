import React from 'react';
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Button} from 'react-native';
import {GlobalStyles} from "../styles/Global";
import {ScaledSheet} from 'react-native-size-matters'
import {Ionicons, AntDesign, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';


export default function Footer() {

    return (
        <View style={styles.footer}>
            <Text style={[GlobalStyles.logoText, styles.footerTextHead]}><Text style={GlobalStyles.s}>S</Text>HION HOUSE</Text>
            <Text style={styles.footerText}>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis
                viverra ornare, eros dolor interdum nulla.</Text>
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
            </View>
        </View>
    )
}
const styles = ScaledSheet.create(
    {
        featureProductButt: {
            backgroundColor: 'rgba(63,77,97,0.6)',
            width:
                '100%',
            height:
                '70@s',
            position:
                'absolute',
            bottom:
                0,
            alignItems:
                'center',
            justifyContent:
                'center',
        }
        ,
        featureProductText: {
            color: 'white',
            fontFamily:
                'ShipporMinchoB1',
            fontSize:
                '22@s',
        },
        footer: {
            backgroundColor: '#1D2547',
            padding: '20@s'
        },
        footerTextHead: {
            color: 'white',
        },
        footerText: {
            color: '#C2C5DB',
            fontSize: '14@s'
        },
    }
)
