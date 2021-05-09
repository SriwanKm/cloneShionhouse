import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Main() {
    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: 'CormorantGaramondBold', fontSize: 30 }}>Kookai app</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
