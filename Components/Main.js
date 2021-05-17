import 'react-native-gesture-handler';
import * as React from 'react';
import {Text, View, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import {GlobalStyles} from "../styles/Global";
import {Ionicons, AntDesign, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import FeatureProducts from "./FeatureProducts";
import Footer from "./Footer";
import NewArrival from "./NewArrival";


const image = {uri: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular4.png"}

export default function Main({navigation}) {
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


                <View style={GlobalStyles.mainSection}>
                    <View>
                        <ImageBackground source={image} style={GlobalStyles.image}>
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
                                <TouchableOpacity style={[GlobalStyles.searchIconBorder, GlobalStyles.iconBorder]}>
                                    <Ionicons name="ios-search-outline" size={20} color="black"/>
                                </TouchableOpacity>
                                <TouchableOpacity style={GlobalStyles.addToCardBorder}>
                                    <MaterialCommunityIcons name="shopping-outline" style={GlobalStyles.socialIcon}/>
                                    <Text style={{color: 'white', paddingHorizontal: 2}}>0</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={GlobalStyles.inImgText}>FASHION</Text>
                            <Text style={GlobalStyles.inImgText}>ALWAYS</Text>
                            <Text style={GlobalStyles.inImgText}>CHANGING</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Shop')}
                                style={GlobalStyles.shopButton}>
                                <Text style={GlobalStyles.shopButtonText}>Shop Now</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>

                    <FeatureProducts/>
                    <View style={GlobalStyles.topArrivalHeadSection}>
                        <Text style={GlobalStyles.topArrivalHeader}>NEW</Text>
                        <Text style={GlobalStyles.topArrivalHeader}>ARRIVAL</Text>
                    </View>
                    <NewArrival/>
                </View>
                <Footer/>
            </ScrollView>
        </View>
    )
}
