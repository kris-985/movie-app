import React, { useState } from 'react';
import './Home.css';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { UserAuth } from '../context/AuthContext';


const Movie = ({ movie }) => {
  const [like, setLike] = useState(false)
  const { user } = UserAuth();
  const saveShow = () => {
    if (user?.email) {
      setLike(!like)

    }
    else { alert('Please a like movie') }
  }
  console.log(like)
  return (
    <div className='single-movie-container'>
      <div className='single-movie-title'>{movie.title.toUpperCase()}</div>
      <img className='single-movie-img' src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt=''></img>
      <div className='hover-overlay'>
        <div className='single-movie-popularity'>POPULARITY:{movie.popularity}</div>
      </div>
      <div onClick={saveShow}>{like ? <AiFillHeart /> :
        <AiOutlineHeart />}</div>
      {/* <div className='single-movie-overview'>{movie.overview}</div> */}
    </div>
  )
}

export default Movie