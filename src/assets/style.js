import React from "react";
import {StyleSheet} from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontWeight: 'normal',
        fontSize: 20,
    },
    image: {
        width: 200,
        height: 200,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 200,
        margin: 10
    }
});

export default style;