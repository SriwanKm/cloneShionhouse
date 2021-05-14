import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
    StyleSheet,
    Picker,
    Text,
    View,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    Button
} from 'react-native';
import {GlobalStyles} from "../styles/Global";
import {ScaledSheet} from 'react-native-size-matters'
import {Ionicons, AntDesign, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import FeatureProducts from "./FeatureProducts";
import Footer from "./Footer";
import NewArrival from "./NewArrival";
import ShopPicker from "./ShopPicker"

export default function Contact({navigation}) {

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
                        onPress={() => navigation.navigate('Contact')}>
                        <Text style={GlobalStyles.navBandText}>Contact</Text>
                    </TouchableOpacity>
                </View>

                <View style={GlobalStyles.mainSection}>
                    <View>
                        <Text style={GlobalStyles.logoText}><Text style={GlobalStyles.s}>G</Text>ET IN <Text
                            style={GlobalStyles.s}>T</Text>OUCH
                        </Text>
                        <TextInput
                            placeholder='Enter Message'
                            style={[styles.messageInput, styles.messageMessageInput]}
                            maxLength={40}
                            placeholderTextColor='#999999'

                        />
                        <TextInput
                            placeholder='Enter your name'
                            style={styles.messageInput}
                            maxLength={40}
                            placeholderTextColor='#999999'

                        />
                        <TextInput
                            placeholder='Email'
                            style={styles.messageInput}
                            maxLength={40}
                            placeholderTextColor='#999999'

                        />
                        <TextInput
                            placeholder='Enter Subject'
                            style={styles.messageInput}
                            maxLength={40}
                            placeholderTextColor='#999999'
                        />
                    </View>


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
        messageInput: {
            borderColor: '#E5E6E9',
            borderWidth: 1,
            height: '55@s',
            paddingLeft: '20@s',
            marginVertical: '12@s',
            fontSize: '14@s'
        },
        messageMessageInput: {
            height: '150@s',
        },
    }
)


