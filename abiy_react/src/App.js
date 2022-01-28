import "./App.css";
import React, { useEffect, useState } from "react";
import { getMoviesBySearchTerm } from "./utils";
import SearchBar from "./SearchBar";
 //import MovieDetails from "./MovieDetails";
 //import MoviesCard from "./MoviesCard";
import MoviesList from "./MovieList"

//const searchTerm = "Batman"
function App() {
  const [searchTerm, setsearchTerm] = useState("Batman");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    setIsLoading(true);
    let _movies = getMoviesBySearchTerm(searchTerm)
      .then((data) => {
        // setmovie(data.Search); //for movie details
        setMovies(data.Search);
        //seterror(null);
        setIsLoading(false);
        return data;
      })
      .catch((error) => {
        setError(error.message);
      });
    console.log(_movies);
  }, []);

  return (
    <>
      {!isLoading?(
           console.log(movies), 
          <div className="container">
           <SearchBar Movie={movies}/>
            <MoviesList Movie={movies} />
            {/* <MovieDetails movie={movies} />
            <MoviesCard movie={movies} /> */}
            {/* <SearchBar Movie={movies}/> */}
          </div>
        ) : (
          <p>Loading... </p>
        )
      }
    </>
  );
}
export default App;


