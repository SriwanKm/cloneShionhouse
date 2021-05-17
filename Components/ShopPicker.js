import 'react-native-gesture-handler';
import * as React from 'react';
import {View} from 'react-native';
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
    const [openSize, setOpenSize] = useState(false);
    const [valueSize, setValueSize] = useState(null);
    const [itemSize, setItemSize] = useState([
        {label: '1.2ft', value: '1.2ft'},
        {label: '2.5ft', value: '2.5ft'},
        {label: '5.2ft', value: '5.2ft'},
        {label: '3.2ft', value: '3.2ft'},
    ]);
    const [openColor, setOpenColor] = useState(false);
    const [valueColor, setValueColor] = useState(null);
    const [itemColor, setItemColor] = useState([
        {label: 'White', value: 'White'},
        {label: 'Green', value: 'Green'},
        {label: 'Blue', value: 'Blue'},
        {label: 'Gray', value: 'Gray'},
    ]);
    const [openPrice, setOpenPrice] = useState(false);
    const [valuePrice, setValuePrice] = useState(null);
    const [itemPrice, setItemPrice] = useState([
        {label: '$10 to $20', value: '$10 to $20'},
        {label: '$20 to $30', value: '$20 to $30'},
        {label: '$50 to $80', value: '$50 to $80'},
        {label: '$100 to $120', value: '$100 to $120'},
        {label: '$200 to $300', value: '$200 to $300'},
        {label: '$500 to $600', value: '$500 to $600'},

    ]);
    return (
        <View style={styles.container}>
            <DropDownPicker
                placeholder="Category"
                style={styles.shopPicker}
                zIndex={2000}
                open={openCategory}
                value={valueCategory}
                items={itemCategory}
                setOpen={setOpenCategory}
                setValue={setValueCategory}
                setItems={setItemCategory}
                searchable={false}
                arrowColor='pink'
                dropDownStyle={{backgroundColor: '#3c9548'}}

            />
            <DropDownPicker
                placeholder="Type"
                searchable={false}
                style={styles.shopPicker}
                zIndex={1000}
                open={openType}
                value={valueType}
                items={itemType}
                setOpen={setOpenType}
                setValue={setValueType}
                setItems={setItemType}
            />
            <DropDownPicker
                placeholder="Size"
                searchable={false}
                style={styles.shopPicker}
                zIndex={500}
                open={openSize}
                value={valueSize}
                items={itemSize}
                setOpen={setOpenSize}
                setValue={setValueSize}
                setItems={setItemSize}
            />
            <DropDownPicker
                placeholder="Color"
                searchable={false}
                style={styles.shopPicker}
                zIndex={300}
                open={openColor}
                value={valueColor}
                items={itemColor}
                setOpen={setOpenColor}
                setValue={setValueColor}
                setItems={setItemColor}
            />
            <DropDownPicker
                placeholder="Price range"
                searchable={false}
                style={styles.shopPicker}
                zIndex={200}
                open={openPrice}
                value={valuePrice}
                items={itemPrice}
                setOpen={setOpenPrice}
                setValue={setValuePrice}
                setItems={setItemPrice}
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
            height: '355@s',
            zIndex: 2500,
        },
        shopPicker: {
            borderColor: '#EDEDED',
            color: '#3078ff',
            marginVertical: '8@s',
        },

    }
)
