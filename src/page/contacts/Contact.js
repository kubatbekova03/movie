import React, {useState, useEffect} from 'react';
import axios from "axios";
import {APIKEY} from "../../ApiKey";
import MovieCard from "../../components/MovieCard";

const Contact = () => {
    const [contact, setContact] = useState([])
    const getContact = async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`)
        const data = await response.data
        setContact(data.results)
    }

    useEffect(() => {
        getContact()
    }, [])


    return (
        <div id='movies'>
            <div className='container'>
                <div className="movies">
                    {
                        contact.map(el =>
                            <MovieCard el={el} key={el.id}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
};

export default Contact;