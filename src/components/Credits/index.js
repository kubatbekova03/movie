import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../ApiKey";
import Slider from "react-slick";
import {Link} from "react-router-dom";


const Credits = ({movieId}) => {
    const [actors, setActors] = useState([])
    const getCredits = async (key, id) => {
        const response = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
        setActors(response.data.cast)
    }

    useEffect(() => {
        getCredits(APIKEY, movieId)
    }, [])
    console.log(actors)

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6
    };

    return (
        <div id="actors">
            <div className='container'>
                <Slider {...settings}>
                    {
                        actors.map(el => (
                            <div key={el.id} className='actors-card'>
                              <Link to={`/movies/credits-cast/${el.id}`}>
                                  <img style={{
                                      borderRadius: '10px',
                                      boxShadow: '10px 5px 5px rgba(30, 99, 155, 0.85)'
                                  }}
                                       src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`}
                                       alt=""/>
                              </Link>
                                <h4>{el.name}</h4>
                                <p>{el.character}</p>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Credits;