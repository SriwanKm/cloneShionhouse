import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {LogBox, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Main from './Main'
import {GlobalStyles} from "../styles/Global";
import {useFonts} from 'expo-font'
import * as ScreenOrientation from 'expo-screen-orientation'
import About from './About'
import Shop from './Shop';
import CustomSidebarMenu from "./CustomSideMenu";
import {Ionicons} from "@expo/vector-icons";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// const NavigationDrawerStructure = (props) => {
    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
        //Props to open/close the drawer
        props.navigationProps.toggleDrawer();
    };

    // return (
    //     <Ionicons
    //         style={GlobalStyles.hamburger}
    //         onPress={toggleDrawer}
    //         name="ios-menu-sharp"/>
    // );
// };

function mainScreenStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen
                name="Main"
                component={Main}
                options={{
                    title: 'Main', //Set Header Title
                    // headerLeft: () => (
                    //     <NavigationDrawerStructure navigationProps={navigation} />
                    // ),
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
        </Stack.Navigator>
    );
}

function aboutScreenStack({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="About"
            screenOptions={{
                // headerLeft: () => (
                //     <NavigationDrawerStructure navigationProps={navigation} />
                // ),
                headerStyle: {
                    backgroundColor: '#f4511e', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                },
            }}>
            <Stack.Screen
                name="Main"
                component={Main}
                options={{
                    title: 'Main', //Set Header Title
                }}
            />
            <Stack.Screen
                name="Shop"
                component={Shop}
                options={{
                    title: 'Shop', //Set Header Title
                }}
            />
            <Stack.Screen
                name="About"
                component={About}
                options={{
                    title: 'About', //Set Header Title
                }}
            />
        </Stack.Navigator>
    );
}


function shopScreenStack({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="Shop"
            screenOptions={{
                // headerLeft: () => (
                //     <NavigationDrawerStructure navigationProps={navigation} />
                // ),
                headerStyle: {
                    backgroundColor: '#f4511e', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                },
            }}>
            <Stack.Screen
                name="Main"
                component={Main}
                options={{
                    title: 'Main', //Set Header Title
                }}
            />
            <Stack.Screen
                name="Shop"
                component={Shop}
                options={{
                    title: 'Shop',
                }}
            />
            <Stack.Screen
                name="About"
                component={About}
                options={{
                    title: 'About',
                }}
            />
        </Stack.Navigator>
    );
}





function Stacks() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContentOptions={{
                    activeTintColor: '#e91e63',
                    itemStyle: { marginVertical: 5 },
                }}
                drawerContent={(props) => <CustomSidebarMenu {...props} />}>
                <Drawer.Screen
                    name="Main"
                    options={{ drawerLabel: 'Main page Option' }}
                    component={mainScreenStack}
                />
                <Drawer.Screen
                    name="Shop"
                    options={{ drawerLabel: 'Shop page Option' }}
                    component={shopScreenStack}
                />
                <Drawer.Screen
                    name="About"
                    options={{ drawerLabel: 'About page Option' }}
                    component={aboutScreenStack}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Stacks;
