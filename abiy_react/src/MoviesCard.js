import React from 'react';

export default function MoviesCard({Movie}) {
  return (
    <div>
      <div className="Poster">
      <img src={Movie.Poster} alt="" />
      <div style={{ padding:"5px 10px"}}>
        <div style={{ diplay: "flex"}}>
          
        </div>

      </div>
      </div>
      <div className='box'>
        <p>{Movie.Title}</p>
        <button style={{backgroundColor:"#BC5448"}}>
        <strong>{Movie.Type}</strong></button> 
      </div> 
    </div>
  );
  
}








