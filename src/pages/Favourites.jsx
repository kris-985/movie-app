import { doc, onSnapshot, setDoc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import Swal from "sweetalert2";

const Favourites = () => {
  const { user } = UserAuth();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user?.email) {
      const userDocRef = doc(db, "users", user.email);

      const fetchData = async () => {
        try {
          const docSnapshot = await getDoc(userDocRef);
          if (!docSnapshot.exists()) {
            // Create document if it does not exist
            await setDoc(userDocRef, { savedShows: [] });
          }

          // Set up the onSnapshot listener
          const unsubscribe = onSnapshot(
            userDocRef,
            (docSnapshot) => {
              if (docSnapshot.exists()) {
                setMovies(docSnapshot.data()?.savedShows || []);
              } else {
                console.error("No such document!");
                setMovies([]);
              }
            },
            (error) => {
              console.error("Error fetching document: ", error);
              setError(error.message);
            }
          );

          return unsubscribe; // Clean up the listener on unmount
        } catch (error) {
          console.error("Error checking/creating document: ", error);
          setError(error.message);
        }
      };

      fetchData();
    }
  }, [user?.email]);

  const removeMovie = async (movieId) => {
    try {
      const userDocRef = doc(db, "users", user.email);
      const updatedMovies = movies.filter((movie) => movie.id !== movieId);
      await updateDoc(userDocRef, { savedShows: updatedMovies });
    } catch (error) {
      console.error("Error removing movie: ", error);
      setError(error.message);
    }
    Swal.fire({
      icon: "success",
      title: "The movie is removed",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <FavouritesWrapper>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        movies.map((movie) => (
          <MovieCard key={movie.id}>
            <HeartIcon onClick={() => removeMovie(movie.id)} />
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
              alt={movie.title}
            />
            <Title>{movie.title}</Title>
          </MovieCard>
        ))
      )}
    </FavouritesWrapper>
  );
};

export default Favourites;

const FavouritesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`;

const MovieCard = styled.div`
  position: relative;
  text-align: center;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;

    @media (max-width: 1024px) {
      height: 250px;
    }

    @media (max-width: 768px) {
      height: 200px;
    }
  }
`;

const HeartIcon = styled(FaHeart)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #80395a;
  cursor: pointer;
  font-size: 30px;
  z-index: 10;
  transition: color 0.3s ease;
`;

const Title = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 20px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
