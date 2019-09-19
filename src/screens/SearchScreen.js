import React, { useState } from 'react';
import { Text, View, StyleSheet,ScrollView } from 'react-native';
import SearchBar from '../Components/SearchBar';
import ResultsList from '../Components/ResultsList';
import useResults from '../hooks/useResults';


const SearchScreen = () => {
    
    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    const filterResByPrice =(price) => {
        return results.filter((res) => {
            return res.price === price;
        })
    }

    return (
        <>
            <SearchBar
           
                term={term}
                onTermChange={(term) => setTerm(term)}
                onTermSubmit={() => searchApi(term)}
            ></SearchBar>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
         <ScrollView>
         <ResultsList results = {filterResByPrice("$")} title="Cost Efective"/>
            <ResultsList results = {filterResByPrice("$$")} title="Bit Pricier"/>
            <ResultsList results = {filterResByPrice("$$$")} title="Big Spender"/>
         </ScrollView>
        </>
    )
};

const style = StyleSheet.create({
  
});

export default SearchScreen;