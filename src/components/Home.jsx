import React, { useState } from 'react'
import './Home.css';
import { useEffect } from 'react';
import axios from 'axios'
import Movie from './Movie';

const Home = () => {
  const request = "https://api.themoviedb.org/3/movie/popular?api_key=f9246f47d869b76facb0c10c35451acb&languange=en-US&page=1"
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    axios.get(request).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  return (
    <div className='movies-container'>

      <h1 className='popular-movie-title'>TOP 18 POPULAR MOVIES</h1>
      <div className='movie-container'>
        {movies.slice(0, 18).map((movie, id) => (
          <Movie key={id} movie={movie} />
        ))}
      </div>

    </div>

  )
}

export default Home