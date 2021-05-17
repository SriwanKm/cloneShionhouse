
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Main from './Main'
import About from './About'
import Shop from './Shop';
import Contact from "./Contact";


export default function CustomSidebarMenu({ navigation }) {

        let items = [
            {
                navOptionName: 'Home',
                screenToNavigate: 'Main',
            },
            {
                navOptionName: 'Shop',
                screenToNavigate: 'Shop',
            },
            {
                navOptionName: 'About',
                screenToNavigate: 'About',
            },
            {
                navOptionName: 'Contact',
                screenToNavigate: 'Contact',
            },
        ];


        return (
            <View style={styles.sideMenuContainer}>

                <View
                    style={{
                        width: '100%',
                        height: 1,
                        backgroundColor: '#e2e2e2',
                        marginTop: 15,
                    }}
                />
                <View style={{ width: '100%' }}>
                    {items.map((item, key) => (
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingTop: 10,
                                paddingBottom: 10,
                            }}>
                            <View style={{ marginRight: 10, marginLeft: 40 }}>
                            <Text
                                style={{
                                    fontSize: 15,
                                }}
                                onPress={() => {
                                    global.currentScreenIndex = key;
                                    navigation.navigate(item.screenToNavigate);
                                }}>
                                {item.navOptionName}
                            </Text>
                            </View>

                        </View>
                    ))}
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    sideMenuContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 20,
    },
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius: 150 / 2,
    },
});
