import React, {useEffect, useState} from 'react'
import axios from "axios";
import {APIKEY} from "../../ApiKey";
import MovieCard from "../../components/MovieCard";


const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState([])


    const getAboutMe = async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=3`)
        const {data} = await response
        setAboutMe(data.results)
    }


    useEffect(() => {
        getAboutMe()
    }, [])

    return (
        <div id='movies'>
            <div className='container'>
                <div className="movies">
                    {
                        aboutMe.map(el =>
                            <MovieCard
                                el={el}
                                key={el.id}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
};


export default AboutMe;