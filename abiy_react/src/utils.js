 ///SEARCH BY SEARCH TERM///
 export let getMoviesBySearchTerm = async(searchTerm)=> {
    let apikey="1c46f0cb";
    let url=(`https://www.omdbapi.com/?apikey=${apikey}&s=${searchTerm}`);
    let response = await fetch(url);
    let data=await response.json();
     return data;   
  }
//   export let getMoviesById = async(searchTerm)=> {
//     let apikey="1c46f0cb";
//     let url=(`https://www.omdbapi.com/?apikey=${apikey}&i=${Id}`);
//     let response = await fetch(url);
//     let data=await response.json();
//      return data;   
//   }
