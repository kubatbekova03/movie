import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../ApiKey";
import Credits from "../../components/Credits";
import Trailers from "../../components/Trailers";

const DetailPage = () => {

    const {movieId} = useParams()
    const [detail, setDetail] = useState({})
    const getDetail = async () => {
        const res = await axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKEY}&language=en-US`)
        const {data} = await res
        setDetail(data)

    }
    useEffect(() => {
        getDetail()
    }, [])


    const {poster_path, title, runtime, release_date, backdrop_path, overview, genres, vote_average} = detail


    return (
        <>
            <div style={{
                background: `url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}') no-repeat center/cover`,
                color: 'white'
            }} id='detail-page'>
                <div className="container">
                    <div className="detail-page">
                        <div className="detail-page--img">
                            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`} width={300}
                                 alt=""/>
                        </div>
                        <div className='detail-page--titles'>
                            <h1>{title}</h1>
                            <div className='detail-page--titles-genres'>
                                {genres?.map(el => <p key={el.id}>{el.name}</p>)}
                            </div>
                            <p>{release_date}</p>
                            <h3>{Math.floor(runtime / 60)} <small>h</small> {runtime % 60} <small>min</small></h3>
                            <div className='detail-page--titles-vote'>{Math.round(vote_average * 10)}%</div>
                            <p>{overview}</p>
                        </div>
                    </div>
                </div>

            </div>
            <Credits movieId={movieId}/>

            <Trailers movieId={movieId}/>
        </>
    );
};

export default DetailPage;


