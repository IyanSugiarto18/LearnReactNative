import React, {useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import style from "../../assets/style";

const TouchableState = () => {
    const [count, setCount] = useState(0);
    const add = () => setCount(prevCount => prevCount + 1);
    const reduce = () => setCount(prevCount => prevCount - 1);

    return(
        <View style={{alignItems: 'center', marginTop: 20}}>
            <View>
                <Text style={style.text}>Jumlah : {count}</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 5}}>
                <TouchableOpacity style={style.button} onPress={add}>
                    <Text style={style.text}>Click add Me</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.button} onPress={reduce}>
                    <Text style={style.text}>Click reduce Me</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default TouchableState;
