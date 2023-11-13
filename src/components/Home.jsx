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
    <div>
      <div className="section-with-image">
        <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWVzfGVufDB8fDB8fHww" alt="" />
        <div className="section-text">
          <p>"We have selected the 18 most popular movies for you, and you can see them below."</p>
        </div>
      </div>

      <div className='movies-container'>

        <h1 className='popular-movie-title'>TOP 18 POPULAR MOVIES</h1>
        <div className='movie-container'>
          {movies.slice(0, 18).map((movie, id) => (
            <Movie key={id} movie={movie} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Home