import 'react-native-gesture-handler';
import * as React from 'react';
import {
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    FlatList
} from 'react-native';
import {GlobalStyles} from "../styles/Global";
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
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
    const [orientation, setOrientation] = useState(1)

    useEffect(() => {
        Dimensions.addEventListener('change', onChange);
        return () => {
            Dimensions.removeEventListener('change', onChange);
            setOrientation(dimensions.screen.height > dimensions.screen.width ? 1 : 2)
        };
    });

    const isPortrait = () => {
        return dimensions.screen.height > dimensions.screen.width
    }

    return (
        <View>
            <View style={{flexDirection: 'row'}}>
                <FlatList
                    numColumns={orientation}
                    key={orientation}
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

