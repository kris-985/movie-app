import React, { useState } from "react";
import "../pages/Home.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import Swal from "sweetalert2";

const Movie = ({ movie }) => {
  const [like, setLike] = useState(false);
  const { user } = UserAuth();

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      await updateDoc(doc(db, "users", user?.email), {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
      Swal.fire({
        icon: "success",
        title: "The movie was added",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      alert("Please login to like a movie");
    }
  };
  return (
    <div className="single-movie-container">
      <div className="single-movie-title">{movie?.title.toUpperCase()}</div>
      <img
        className="single-movie-img"
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt=""
      ></img>
      <div className="hover-overlay">
        <div className="single-movie-popularity">
          POPULARITY:{movie?.popularity}
        </div>
      </div>
      <div onClick={saveShow}>
        {like ? (
          <AiFillHeart className="heart-icon" />
        ) : (
          <AiOutlineHeart className="heart-icon" />
        )}
      </div>
    </div>
  );
};

export default Movie;
