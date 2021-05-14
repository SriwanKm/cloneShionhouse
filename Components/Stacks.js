import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import {LogBox, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Main from './Main'
import {GlobalStyles} from "../styles/Global";
import {useFonts} from 'expo-font'
import * as ScreenOrientation from 'expo-screen-orientation'
import About from './About'
import Shop from './Shop';
import CustomSidebarMenu from "./CustomSideMenu";
import Contact from "./Contact";
import Blog from "./Blog";
import {Ionicons} from "@expo/vector-icons";



const Stack = createStackNavigator();



function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <Ionicons name="close" size={32} color="#000" style={GlobalStyles.closeIcon} onPress={() => props.navigation.closeDrawer()}/>
            <View>
                <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerPosition="right"
            drawerStyle={{ width: 260 }}
            drawerContentOptions={{
                inactiveTintColor: '#000',
                activeTintColor: '#9F79FF',
                activeBackgroundColor: '#fff',
                itemStyle: { marginTop: 20, marginLeft:30, width: 150 },
                labelStyle:{
                    fontFamily:'ShipporMinchoB1',
                    fontSize: 22,}
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={Main} />
            <Drawer.Screen name="About" component={About} />
            <Drawer.Screen name="Shop" component={Shop} />
            <Drawer.Screen name="Contact" component={Contact} />
            <Drawer.Screen name="Blog" component={Blog} />
        </Drawer.Navigator>
    );
}



export default function Stacks() {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
}

