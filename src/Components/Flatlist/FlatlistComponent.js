import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';

const data = [
    {
        "id" : 1,
        "title" : "CCC 2023 Sukses Terselenggara",
        "content" : "",
        "image" : "https://picsum.photos/640/360",
        "createdAt" : "02 Mei 2023",
        "updatedAt" : "02 Mei 2023"
    },{
        "id" : 2,
        "title" : "CCC 2022 Sukses Terselenggara",
        "content" : "",
        "image" : "https://picsum.photos/240/360",
        "createdAt" : "02 Mei 2022",
        "updatedAt" : "02 Mei 2022"
    },{
        "id" : 3,
        "title" : "CCC 2021 Sukses Terselenggara",
        "content" : "",
        "image" : "https://picsum.photos/340/360",
        "createdAt" : "02 Mei 2021",
        "updatedAt" : "02 Mei 2021"
    },{
        "id" : 4,
        "title" : "CCC 2020 Sukses Terselenggara",
        "content" : "",
        "image" : "https://picsum.photos/640/360",
        "createdAt" : "02 Mei 2020",
        "updatedAt" : "02 Mei 2020"
    },{
        "id" : 5,
        "title" : "CCC 2019 Sukses Terselenggara",
        "content" : "",
        "image" : "https://picsum.photos/640/360",
        "createdAt" : "02 Mei 2019",
        "updatedAt" : "02 Mei 2019"
    }
]


const App = () => {
    return (
        <View style={{alignItems: 'center', marginTop: 20}}>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                    return (
                        <View style={{ marginTop: 20, backgroundColor: '#FFFNF',borderRadius: 10, padding: 10}}>
                            <Image source={{uri: item.image}} style={{width: 200, height: 200}}/>
                            <Text>{item.title}</Text>
                        </View>
                    )
                }}
            />
        </View>
    );
};


export default App;