import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import styled from "styled-components";

const Favourites = () => {
  const { user } = UserAuth();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    onSnapshot(doc(db, "users", user?.email), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  return (
    <Favouriteswrapper>
      {movies.map((movie) => (
        <div key={movie.id}>
          <div>{movie.title}</div>
          <div>
            <img src={`https://image.tmdb.org/t/p/w500/${movie?.img}`} alt="" />
          </div>
        </div>
      ))}
    </Favouriteswrapper>
  );
};

export default Favourites;

const Favouriteswrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 300px;
`;
