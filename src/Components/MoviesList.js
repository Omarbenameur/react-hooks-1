import React from "react";
import MoviesCard from "./MoviesCard";

const MoviesList = ({ list }) => {
  return (
    <div>
      {React.Children.toArray(
        list.map((movie) => <MoviesCard movie={movie} />)
      )}
    </div>
  );
};

export default MoviesList;
