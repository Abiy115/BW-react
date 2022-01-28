 ///SEARCH BY SEARCH TERM///
 export let getMoviesBySearchTerm = async(searchTerm)=> {
    let apikey="Need valid apikey";
    let url=(`https://www.omdbapi.com/?apikey=${apikey}&s=${searchTerm}`);
    let response = await fetch(url);
    let data=await response.json();
     return data;   
  }
//   export let getMoviesById = async(searchTerm)=> {
//     let apikey="Need valid apike";
//     let url=(`https://www.omdbapi.com/?apikey=${apikey}&i=${Id}`);
//     let response = await fetch(url);
//     let data=await response.json();
//      return data;   
//   }
