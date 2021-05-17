import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    Button,
    Dimensions,
    FlatList
} from 'react-native';
import {GlobalStyles} from "../styles/Global";
import {ScaledSheet} from 'react-native-size-matters'
import {Ionicons, AntDesign, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import FeatureProducts from "./FeatureProducts";
import Footer from "./Footer";
import Stacks from "./Stacks";
import {useEffect, useState} from "react";


const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

export default function NewArrival({navigation}) {

    const images = [
        {uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/arrival1.png", key: 1},
        {uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/arrival2.png", key: 2},
        {uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/arrival3.png", key: 3},
        {uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/arrival4.png", key: 4},
        {uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/arrival5.png", key: 5},
        {uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/arrival6.png", key: 6},
        {uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/arrival7.png", key: 7},
        {uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/arrival8.png", key: 8},

    ];

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

    // const images = image.map(({uri}) => {
    // return (
    //     <View key={Math.random()} style={{zIndex: 100, width: '50%'}}>
    //         <ImageBackground source={{uri}} style={isPortrait() ? [GlobalStyles.image, {marginBottom: 0}] : GlobalStyles.imageL}>
    //             <TouchableOpacity style={GlobalStyles.addToCardBorderArr}>
    //                 <MaterialCommunityIcons name="shopping-outline"
    //                                         style={[GlobalStyles.socialIcon, {color: '#9F79FF'}]}/>
    //             </TouchableOpacity>
    //         </ImageBackground>
    //         <View style={GlobalStyles.newArrivalDetails}>
    //             <TouchableOpacity><Text style={GlobalStyles.newArrivalText}>Knitted Jumper</Text></TouchableOpacity>
    //             <View style={GlobalStyles.stars}>
    //                 <AntDesign name="star" style={GlobalStyles.star}/>
    //                 <AntDesign name="star" style={GlobalStyles.star}/>
    //                 <AntDesign name="star" style={GlobalStyles.star}/>
    //                 <AntDesign name="star" style={GlobalStyles.star}/>
    //                 <AntDesign name="star" style={GlobalStyles.star}/>
    //             </View>
    //             <Text style={GlobalStyles.newArrivalPrice}>$ 30.00</Text>
    //         </View>
    //
    //     </View>
    // )
    // const images = () => {
    //
    //     return (
    //
    //
    //     )
    // }

    return (
        <View>
            <View style={{flexDirection: 'row'}}>
                <FlatList
                    // numColumns={1}
                    data={images}
                    renderItem={({item}) => {
                        const uriObject = {uri: item.uri}
                        return (<View style={{zIndex: 100, width: isPortrait()? null : '50%'}}>
                                <ImageBackground source={uriObject} style={[GlobalStyles.imageRender, {marginBottom: 0}]}>
                                    <TouchableOpacity style={GlobalStyles.addToCardBorderArr}>
                                        <MaterialCommunityIcons name="shopping-outline"
                                                                style={[GlobalStyles.socialIcon, {color: '#9F79FF'}]}/>
                                    </TouchableOpacity>
                                </ImageBackground>
                                <View style={GlobalStyles.newArrivalDetails}>
                                    <TouchableOpacity><Text style={GlobalStyles.newArrivalText}>Knitted
                                        Jumper</Text></TouchableOpacity>
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
                    }
                    }
                />
            </View>
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                    style={GlobalStyles.browseMoreButton}>
                    <Text style={GlobalStyles.browseMoreButtonText}>Browse More</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

