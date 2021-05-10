<script src="http://localhost:8097"></script>
import React from 'react';
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Button} from 'react-native';
import {GlobalStyles} from "../styles/Global";
import {ScaledSheet} from 'react-native-size-matters'
import {Ionicons, AntDesign, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';


export default function FeatureProducts() {
    const image = [
        {
            uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular1.png",
            name: "GLASSES"
        },
        {
            uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular2.png",
            name: "WATCHES"
        },
        {
            uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular3.png",
            name: "JACKETS"
        },
        {
            uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular4.png",
            name: "CLOTHES"
        },

    ];
    const images = image.map(({uri,name}) => {
        return (<ImageBackground key={Math.random()} source={{uri}} style={GlobalStyles.image}>
            <TouchableOpacity style={GlobalStyles.shopButton}>
                <Text style={GlobalStyles.shopButtonText}>Shop Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.featureProductButt}>
                <Text style={styles.featureProductText}>{name}</Text>
            </TouchableOpacity>
        </ImageBackground>)
    })
    return (
        <View>
            {images}
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
    }
}
)
