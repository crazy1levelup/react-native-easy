import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({navigation}) => {
   const id =  navigation.getParam('id');
   const [result, setResult] = useState(null);

   const getResult = async (id) => {
   const res = await yelp.get(`/${id}`);
   setResult(res.data);
   };

   useEffect(() => {
    getResult(id)
   },[])

   if(!result) {
       return null;
   }

    return (
        <View>
            <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item}) => {
                return (
                    <Image
                    style= {style.image}
                    source={{uri:item}}
                    />
                )
            }}
            />
           <Text>{result.name}</Text>
        </View>
    )
};

const style=  StyleSheet.create({
    image: {
        width:300,
        height:200
    }
});


export default ResultShowScreen;