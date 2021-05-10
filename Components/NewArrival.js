import React from 'react';
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Button, Dimensions} from 'react-native';
import {GlobalStyles} from "../styles/Global";
import {ScaledSheet} from 'react-native-size-matters'
import {Ionicons, AntDesign, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';


const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

export default function NewArrival() {

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
            <View>
                <ImageBackground source={{uri}} style={[GlobalStyles.image, {marginBottom: 0}]}/>
                <View style={styles.newArrivalDetails}>
                    <TouchableOpacity><Text style={styles.newArrivalText}>Knitted Jumper</Text></TouchableOpacity>
                    <View style={styles.stars}>
                        <AntDesign name="star" style={styles.star}/>
                        <AntDesign name="star" style={styles.star}/>
                        <AntDesign name="star" style={styles.star}/>
                        <AntDesign name="star" style={styles.star}/>
                        <AntDesign name="star" style={styles.star}/>
                    </View>
                    <Text style={styles.newArrivalPrice}>$ 30.00</Text>
                </View>
            </View>
        )
    })
    return (
        <View>
            {images}
        </View>
    )
}
const styles = ScaledSheet.create(
    {
        star: {
            fontSize: '22@s',
            color: '#FBBA43'
        },
        stars: {
            flexDirection: 'row',
            paddingVertical: '10@s',
        },
        newArrivalDetails: {
            alignItems: 'center',
            borderColor: '#F6F8FE',
            borderWidth: 1,
            paddingVertical: '25@s',
            marginBottom: '50@s'
        },
        newArrivalText: {
            fontSize: '18@s',
            color: '#140C40',
        },
        newArrivalPrice: {
            fontSize: '15@s',
            color: '#444444'
        }
    }
)
