import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet, Picker, Text, View, ImageBackground, TouchableOpacity, ScrollView, Button, Dimensions} from 'react-native';
import {GlobalStyles} from "../styles/Global";
import {ScaledSheet} from 'react-native-size-matters'
import {Ionicons, AntDesign, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import FeatureProducts from "./FeatureProducts";
import Footer from "./Footer";
import NewArrival from "./NewArrival";
import ShopPicker from "./ShopPicker"
import {useEffect, useState} from "react";


const window = Dimensions.get('window');
const screen = Dimensions.get('screen');



const images = [
    {uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/blog/single_blog_1.png"},
    {uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/blog/single_blog_2.png"},
    {uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/blog/single_blog_3.png"},
    {uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/blog/single_blog_4.png"},
    {uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/blog/single_blog_5.png"},
]


export default function Blog({navigation}) {
    const [dimensions, setDimensions] = useState({window, screen});
    const onChange = ({window, screen}) => {
        setDimensions({window, screen});
    };

    useEffect(() => {
        Dimensions.addEventListener('change', onChange);
        return () => {
            Dimensions.removeEventListener('change', onChange);
        };
    });

    const isPortrait = () => {
        return dimensions.screen.height > dimensions.screen.width
    }

    const image = images.map(({uri}, navigation) => {


        return (
            <View key={Math.random()} style={GlobalStyles.blogShadow}>
                <ImageBackground source={{uri}} style={isPortrait() ? GlobalStyles.blogImage : GlobalStyles.blogImageL}>
                    <TouchableOpacity
                        // onPress={() => navigation.navigate('Shop')}
                        style={GlobalStyles.dateButton}>
                        <Text style={[GlobalStyles.dateBlogText, {fontFamily: 'AbrilFatface'}]}>15</Text>
                        <Text style={GlobalStyles.dateBlogText}>Jan</Text>
                    </TouchableOpacity>
                </ImageBackground>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Blog')}>
                        <Text style={GlobalStyles.blogHeaderText}>GOOGLE INKS PACT FOR NEW 35-STORY OFFICE</Text>
                    </TouchableOpacity>
                    <Text style={GlobalStyles.blogDetailText}>That dominion stars lights dominion divide years for
                        fourth have don't stars is that he earth it first without heaven in place seed it second morning
                        saying.</Text>
                    <View style={GlobalStyles.blogIconContainer}>
                        <MaterialCommunityIcons style={GlobalStyles.blogIcon1} name="account"/>
                        <Text style={GlobalStyles.blogIconText}>Travel, Lifestyle</Text>
                        <Text> | </Text>
                        <FontAwesome style={GlobalStyles.blogIcon2} name="comments"/>
                        <Text style={GlobalStyles.blogIconText}>T03 Comments</Text>
                    </View>
                </View>
            </View>
        )
    })

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


                    {image}


                </View>
                <Footer/>
            </ScrollView>
        </View>
    )
}


