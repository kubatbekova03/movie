import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../ApiKey";
import ActorMovies from "./ActorMovies";

const DetailActors = () => {
    const [detailCast, setDetailCast] = useState({})
    const [viewMore, setViewMore] = useState(300)
    const {castId} = useParams()
    console.log(castId)
    const getDetailActors = async (id, key) => {
        const resp = await axios(`https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=en-US`)
        const {data} = await resp
        setDetailCast(data)

    }
    const pointBiography = (text) => {
        if (viewMore === 300) {
            setViewMore(text.length)
        }else  setViewMore(300)
    }
    console.log(detailCast)


    const {biography, birthday, name, place_of_birth, profile_path} = detailCast
    useEffect(() => {
        getDetailActors(castId, APIKEY)
    }, [])


    return (
        <div id='detail_actor'>
            <div className="container">
                <div className="detail_actor">
                    <img  style={{
                        borderRadius:'20px'

                    }} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`} alt=""/>
                    <div className='detail_actor--desc'>
                        <h1>{name}</h1>
                        <h3>{birthday} ( 57лет )</h3>
                        <h4>Биография</h4>
                        <p>{biography && biography.slice(0, viewMore)}</p>
                        {biography && biography.length > 300 &&  <span
                            onClick={() => pointBiography(biography)}
                            style={{color: "blue", cursor: "pointer"}}
                        >{viewMore === 300 ? 'читать дальше' : 'закрыть'}</span>}
                    </div>
                </div>
            </div>
            <ActorMovies id={castId}/>
        </div>
    );
};

export default DetailActors;