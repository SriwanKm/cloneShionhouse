import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Picker, Text, View, ImageBackground, TouchableOpacity, ScrollView, Button} from 'react-native';
import {GlobalStyles} from "../styles/Global";
import {ScaledSheet} from 'react-native-size-matters'

import {useState} from "react";
import DropDownPicker from 'react-native-dropdown-picker';


export default function ShopPicker() {

    const [openCategory, setOpenCategory] = useState(false);
    const [valueCategory, setValueCategory] = useState(null);
    const [itemCategory, setItemCategory] = useState([
        {label: 'Shirt', value: 'Shirt'},
        {label: 'T-Shirt', value: 'T-Shirt'},
        {label: 'Pants', value: 'Pants'},
        {label: 'Dress', value: 'Dress'},
    ]);
    const [openType, setOpenType] = useState(false);
    const [valueType, setValueType] = useState(null);
    const [itemType, setItemType] = useState([
        {label: 'SM', value: 'SM'},
        {label: 'LG', value: 'LG'},
        {label: 'XL', value: 'XL'},
        {label: 'XXL', value: 'XXL'},
    ]);

    return (
        <View style={styles.container}>
            <DropDownPicker
                placeholder="Category"
                style={styles.shopPicker}
                zIndex={1000}
                open={openCategory}
                value={valueCategory}
                items={itemCategory}
                setOpen={setOpenCategory}
                setValue={setValueCategory}
                setItems={setItemCategory}
                searchable={false}
            />
            <DropDownPicker
                placeholder="Type"
                searchable={false}
                style={styles.shopPicker}
                zIndex={2000}
                open={openType}
                value={valueType}
                items={itemType}
                setOpen={setOpenType}
                setValue={setValueType}
                setItems={setItemType}
            />

        </View>
    );
}


const styles = ScaledSheet.create(
    {

        container: {
            flex: 1,
            paddingTop: '40@s',
            alignItems: "center",
            height: '300@s',
        },
        shopPicker: {
            borderColor: '#EDEDED',
            color: '#616875',
        },

    }
)
