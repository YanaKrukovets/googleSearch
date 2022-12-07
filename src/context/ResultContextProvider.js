import React, { useContext, useState } from "react";

const ResultContext = React.createContext();
const baseUrl = 'https://google-search-2.p.rapidapi.com';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('JavaScript');

    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '45b5a0654bmsh6333c37acd6090ep167f55jsn1bc0d7f79b49',
                'X-RapidAPI-Host': 'google-search-2.p.rapidapi.com'
            }
        });

        const data = await response.json();

        setResults(data);
        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    );

}

export const useResultContext = () => useContext(ResultContext);