let apiKey = "must have a valid apikey",
  searchTerm = "Guardians ";

export let getMoviesBySearchTerm = async (apiKey, searchTerm) => {
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`;
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
};
getMoviesBySearchTerm(apiKey, searchTerm);

Id = "tt3896198";
export let getMoviesByDetailsById = async (apiKey, id) => {
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
};
getMoviesByDetailsById(apiKey, Id)