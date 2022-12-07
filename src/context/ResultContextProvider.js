import React, { CreateContext, useContext, useState } from "React";

const ResultContext = CreateContext();
const baseUrl = 'https://google-search72.p.rapidapi.com/search';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState();
    const [isLoading, setIsLoading] = useState();
    const [searchTerm, setSearchTerm] = useState();

}