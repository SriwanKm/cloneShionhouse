import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Button, Dimensions} from 'react-native';
import {GlobalStyles} from "../styles/Global";
import {ScaledSheet} from 'react-native-size-matters'
import {Ionicons, AntDesign, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import FeatureProducts from "./FeatureProducts";
import Footer from "./Footer";
import Stacks from "./Stacks";


const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

export default function NewArrival({ navigation }) {

    const image = [
        {uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/arrival1.png"},
        {uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/arrival2.png"},
        {uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/arrival3.png"},
        {uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/arrival4.png"},
        {uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/arrival5.png"},
        {uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/arrival6.png"},
        {uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/arrival7.png"},
        {uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/arrival8.png"},

    ];

    const images = image.map(({uri}) => {
        return (
            <View style={{zIndex: 100}}>
                <ImageBackground source={{uri}} style={[GlobalStyles.image, {marginBottom: 0}]}>
                    <TouchableOpacity style={GlobalStyles.addToCardBorderArr}>
                        <MaterialCommunityIcons name="shopping-outline" style={[GlobalStyles.socialIcon, {color: '#9F79FF'}]}/>
                    </TouchableOpacity>
                </ImageBackground>
                <View style={GlobalStyles.newArrivalDetails}>
                    <TouchableOpacity><Text style={GlobalStyles.newArrivalText}>Knitted Jumper</Text></TouchableOpacity>
                    <View style={GlobalStyles.stars}>
                        <AntDesign name="star" style={GlobalStyles.star}/>
                        <AntDesign name="star" style={GlobalStyles.star}/>
                        <AntDesign name="star" style={GlobalStyles.star}/>
                        <AntDesign name="star" style={GlobalStyles.star}/>
                        <AntDesign name="star" style={GlobalStyles.star}/>
                    </View>
                    <Text style={GlobalStyles.newArrivalPrice}>$ 30.00</Text>
                </View>

            </View>
        )
    })
    return (
        <View>
            {images}
            <TouchableOpacity
                style={GlobalStyles.browseMoreButton}>
                <Text style={GlobalStyles.browseMoreButtonText}>Browse More</Text>
            </TouchableOpacity>
        </View>
    )
}

