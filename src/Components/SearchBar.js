import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar =({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={style.backgroundStyle}>
            <Feather style={style.iconStyle} name="search"/>
            <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            style={style.inputStyle} 
            placeholder="Search"
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            />

        </View>
    )
};

const style = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 10,
        flexDirection :"row",
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15

    }
});

export default SearchBar;