import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMEssage] =useState("");

    const searchApi= async (searchTerm) => {
        try{
            const res = await yelp.get('/search', {
                params: {
                    limit:50,
                    term : searchTerm,
                    location: 'new york'
                }
            });
            setResults(res.data.businesses)
        }catch(e) {
            setErrorMEssage("Something went wrong")
        }
        
    }

    useEffect(() => {
        searchApi('pasta')
    },[]);
    
    return [searchApi, results, errorMessage]
};