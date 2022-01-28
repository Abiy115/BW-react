import React from "react";
import MoviesCard from "./MoviesCard"

const MovieList = ({ Movie = [], onMoviesCardClicked }) => {
  return (
    <div style={{ display: "flex", flexWrap: 'wrap'}}>
      {Movie.map((Movie) => (
        <MoviesCard Movie={Movie}
          key={Movie.imdbID} 
          posterUrl={Movie.Poster} 
          title={Movie.Title} 
          type={Movie.Type} 
          onClicked={() => onMoviesCardClicked(Movie.imdbID)}
        />
      ))}
    </div>
  )
}

export default MovieList;
