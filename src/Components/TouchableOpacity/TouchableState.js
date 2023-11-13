import React, {useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import style from "../../assets/style";

const TouchableState = () => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

    return(
        <View style={{alignItems: 'center', marginTop: 20}}>
            <View>
                <Text>Jumlah : {count}</Text>
            </View>
            <TouchableOpacity style={style.button} onPress={onPress}>
                <Text>Click Me</Text>
            </TouchableOpacity>
        </View>
    )
}
export default TouchableState;
