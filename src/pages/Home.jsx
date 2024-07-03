import React, { Fragment, useState } from "react";
import "./Home.css";
import { useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import { request } from "../utils/helpers";
import HomeCarousel from "../components/HomeCarusel";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(request).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <Fragment>
      <HomeCarousel />
      <h1 className="popular-movie-title">TOP 18 POPULAR MOVIES</h1>
        <div className="movies-containers">
          <div className="movies-container">
            <div className="movie-container">
              {movies.slice(0, 18).map((movie, id) => (
                <Movie key={id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
    </Fragment>
  );
};

export default Home;
