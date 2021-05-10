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
            <View>
                <Text style={styles.subHeadFooter}>Quick links</Text>
                <TouchableOpacity><Text style={styles.subFooterText}>Image Licensin</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.subFooterText}>Style Guide</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.subFooterText}>Privacy Policy</Text></TouchableOpacity>

                <Text style={styles.subHeadFooter}>Shop Category</Text>
                <TouchableOpacity><Text style={styles.subFooterText}>Image Licensin</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.subFooterText}>Style Guide</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.subFooterText}>Privacy Policy</Text></TouchableOpacity>

                <Text style={styles.subHeadFooter}>Partners</Text>
                <TouchableOpacity><Text style={styles.subFooterText}>(89) 982-278 356</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.subFooterText}>demo@colorlib.com</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.subFooterText}>67/A, Colorlib, Green road,
                    NYC</Text></TouchableOpacity>

                <Text style={styles.subHeadFooter}>Get in touch</Text>
                <TouchableOpacity><Text style={styles.subFooterText}>Image Licensin</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.subFooterText}>Style Guide</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.subFooterText}>Privacy Policy</Text></TouchableOpacity>
            </View>
            <View style={{alignItems: 'center', marginTop: 50}}>
                <Text style={[styles.footerText, {textAlign: 'center'}]}>
                    Copyright ©2021 All rights reserved | This template is made with by <Text style={{color:'#9F79FF'}}>Colorlib</Text>
                </Text>
            </View>
        </View>
    )
}
const styles = ScaledSheet.create(
    {
        footer: {
            backgroundColor: '#1D2547',
            padding: '20@s'
        },
        footerTextHead: {
            color: 'white',
        },
        footerText: {
            color: '#C2C5DB',
            lineHeight: '25@s',
            marginBottom: '25@s',
        },
        subHeadFooter: {
            fontSize: '16@s',
            color: 'white',
            letterSpacing: 0.5,
            fontWeight: 'bold',
            marginTop: '20@s',
            marginBottom: '10@s',
        },
        subFooterText: {
            lineHeight: '28@s',
            color: '#C2C5DB',
        }
    }
)
