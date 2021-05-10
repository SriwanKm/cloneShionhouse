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
                <ImageBackground source={{uri}} style={GlobalStyles.image}/>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity><Text>Knitted Jumper</Text></TouchableOpacity>
                    <View style={{flexDirection: 'row'}}>
                        <AntDesign name="star" style={styles.star}/>
                        <AntDesign name="star" style={styles.star}/>
                        <AntDesign name="star" style={styles.star}/>
                        <AntDesign name="star" style={styles.star}/>
                        <AntDesign name="star" style={styles.star}/>
                    </View>
                    <Text>$ 30.00</Text>
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
        }
    }
)
