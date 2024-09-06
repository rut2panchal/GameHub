import React from "react";
import Genre from "../hooks/useGenre";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genres, error } = useGenre();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
