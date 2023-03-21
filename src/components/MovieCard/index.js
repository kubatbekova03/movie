import React from 'react';
import {Link} from 'react-router-dom'
const MovieCart = ({el}) => {
    return (
        <div  className='movies-card'>
            <Link to={`/movie/movie-page/${el.id}`}>
                <img style={{
                    borderRadius:'15px'
                }} src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
                     alt=""/>
            </Link>

            <h3>{el.title}</h3>
        </div>
    );
};

export default MovieCart;