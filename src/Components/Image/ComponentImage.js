import React from 'react';
import { View, Text, Image } from 'react-native';
import style from '../../assets/style';

const ComponentImage = () => {
    return (
        <View style={{alignItems: 'center', marginTop: 20}}>
            <Image
                source={{
                    uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
                }}
                style={style.image}
            />
            <Text>ComponentImage</Text>
        </View>
    )
}

export default ComponentImage;