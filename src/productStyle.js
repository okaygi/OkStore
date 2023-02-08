import React from "react";
import { Dimensions, StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        margin: 5,
        padding: 10,
        backgroundColor: 'lightgray',
        borderRadius: 10,
        flex: 1,
    },
    image: {
        height: Dimensions.get('window').height / 4,
        borderRadius: 20,
        width: '100%',
        resizeMode: 'contain',
    },
    title: {
        padding: 7,
        fontWeight: 'bold',
        fontSize: 15,
    },
    inStock: {
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'right',
    }
})