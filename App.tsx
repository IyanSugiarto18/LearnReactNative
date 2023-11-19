import React from "react";
import { ScrollView, View} from "react-native";
import TextComponent from "./src/Components/Text/CompponentText";
import ImageComponent from "./src/Components/Image/ComponentImage";
import TOComponent from "./src/Components/TouchableOpacity/TouchableState";
import ButtonComponent from "./src/Components/Button/ButtonComponent";
import FLComponent from "./src/Components/Flatlist/FlatlistComponent";

const App = () => {
  return (
    <ScrollView style={{flex: 1}}>
        {/* <View style={{ backgroundColor: '#F2F4FF'}}> */}
          <ImageComponent />
          <TextComponent />
          <TOComponent />
          <ButtonComponent />
          <FLComponent/>
        {/* </View> */}

      </ScrollView>
  );
};

export default App;