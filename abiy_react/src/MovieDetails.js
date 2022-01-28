import React from "react";

function MovieDetails({ Movie }) {
  return ( 
    <div style={{ display: "flex" }}>
      <img src={Movie.Poster} alt="" />
      <div style={{ padding:"5px 10px"}}>
        <div style={{ diplay: "flex"}}>
          
        </div>

      </div>
      <div style={{ display: "flex" }}>
        <p className="Title">
          <strong>{Movie.Title}</strong>
        </p>
        <div style={{display:"flex"}}>
          <button style={{ padding:"5px 10px"}}>{Movie.imdbRating}</button> 
          
          <br/>
          <button>{Movie.Runtime}</button> 
        </div>
        <br/>
        <button>{Movie.Genre}</button>
        <br/>
        <p className="Title"> <br/>
          <strong>Plot </strong> <br/>
          {Movie.Plot}</p> 
        
        <p className="Title">
          <strong>Actors </strong> <br/>
          {Movie.Actors} 
        </p> 
        <p className="Type">
          <strong>Rating</strong> <br/>
          {Movie.Rating} 
        </p> 
        
      </div>
    </div>
  );
}
export default MovieDetails;
