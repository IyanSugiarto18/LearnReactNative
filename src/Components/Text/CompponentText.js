import React from "react";
import {Text, View} from "react-native";
import style from "../../assets/style";

const Nama = props => {
    return (
        <View>
            <Text style={style.text}>Hello Wolrd! {props.name}</Text>
        </View>
    );
};

const ComponentText = () => {
    return (
        <View style={style.container}>
            <Nama name="Iyan Sugiarto"></Nama>
            <Nama name="Asyifa Nur Alif"></Nama>

        </View>
    );
};

export default ComponentText;