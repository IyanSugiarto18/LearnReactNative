import React from "react";
import {View, Button, Alert} from "react-native";

const ButtonComponent = () => {
    return(
        <View style={{alignItems: 'center', marginTop: 20}}>
            <Button 
                title= "Please Click Me"
                onPress={() => Alert.alert('Yeahh....')}
            />
        </View>
    )
}

export default ButtonComponent;