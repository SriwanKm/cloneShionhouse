import React, {useState, useEffect} from 'react';
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
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Ionicons, AntDesign, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import Stacks from "./Stacks";
import Footer from "./Footer";
import NewArrival from "./NewArrival";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

export default function FeatureProducts({navigation}) {
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

    const images = [
        {
            uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular1.png",
            name: "GLASSES",
            key: 1
        },
        {
            uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular2.png",
            name: "WATCHES",
            key: 2
        },
        {
            uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular3.png",
            name: "JACKETS",
            key: 3
        },
        {
            uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular4.png",
            name: "CLOTHES",
            key: 4
        },

    ];

    return (
        <View>
            <FlatList
                numColumns={orientation}
                key={orientation}
                data={images}
                renderItem={({item}) => {
                    const uriObject = {uri: item.uri}
                    return (
                        <ImageBackground source={uriObject} style={[GlobalStyles.imageRender, {width: isPortrait()? null : '50%'}]}>
                            <TouchableOpacity
                                style={GlobalStyles.shopButton}>
                                <Text style={GlobalStyles.shopButtonText}>Shop Now</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.featureProductButt}>
                                <Text style={styles.featureProductText}>{item.name}</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    )
                }
                }
            />
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
