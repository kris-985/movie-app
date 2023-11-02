import React from 'react';
import './Home.css';

const Movie = ({movie}) => {
    console.log(movie);
  return (
    <div className='single-movie-container'>
    <div className='single-movie-title'>{movie.title.toUpperCase()}</div>
    <img className='single-movie-img' src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}` } alt=''></img>
    <div className='hover-overlay'>
    <div className='single-movie-popularity'>POPULARITY:{movie.popularity}</div>
    </div>
    {/* <div className='single-movie-overview'>{movie.overview}</div> */}
    </div>
  )
}

export default Movie