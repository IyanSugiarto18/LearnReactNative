import React from "react";
import { Text, View} from "react-native";
import TextComponent from "./src/Components/Text/CompponentText";

const App = () => {
  return (
    <View style={{ backgroundColor: '#F2F4FF', flex: 1}}>
      <TextComponent />
    </View>
  );
};

export default App;