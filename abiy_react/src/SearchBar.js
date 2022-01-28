import React from 'react';
function SearchBar({Movie}){
    return (
  <div className="form">
    
     <input className="search" 
         data={Movie.data}
         onChange={(event)=> Movie.setSearchTearm(event.target.value)}placeholder="Type to search">
    </input>
    
  </div>

 )

 };

// const SearchBar = (Movie) =>{
//     return(
//         <div className="form">
//             <input className="form" 
//                 Movie={Movie.data}
//                 onChange={(event)=> Movie.setsearchTerm(event.target.data)}
//                 placeholder="Type to search">
//             </input>
//         </div>
//     )
// };

export default SearchBar;
