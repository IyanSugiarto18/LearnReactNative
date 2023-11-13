import React from "react";
import { Text, View} from "react-native";
import TextComponent from "./src/Components/Text/CompponentText";
import ImageComponent from "./src/Components/Image/ComponentImage";
import TOComponent from "./src/Components/TouchableOpacity/TouchableState";

const App = () => {
  return (
    <View style={{ backgroundColor: '#F2F4FF', flex: 1}}>
      <ImageComponent />
      <TextComponent />
      <TOComponent />
    </View>
  );
};

export default App;