import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../ApiKey";
import MovieCard from "../../components/MovieCard";

const SearchResult = () => {
    const [results, setResults] = useState([])
    const {movieName} = useParams()
    const getResults = async (key, name) => {
        const resp = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${name}&language=en-US&page=1`)
        const {results} = await resp.data
        setResults(results)
    }



    useEffect(() => {
        getResults(APIKEY,movieName)
    }, [movieName])


    return (
        <div id='movies'>
            <div className="container">
                <div className="movies">
                    {
                        results.map (el => <MovieCard el={el}/>)
                    }
                </div>
            </div>

        </div>
    );
};

export default SearchResult;