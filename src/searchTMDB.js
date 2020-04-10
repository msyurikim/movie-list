import TMDB_API_KEY from '../config/tmdb.js';

var searchTMDB = (query, callback) => {

  //get requests
  $.get(
    //url
    'https://api.themoviedb.org/3/search/movie?',
    // data object
    {
      api_key: TMDB_API_KEY,
      query: query,
    }
  ) //method chaining through dot notation
    .done( ({results}) => {
      if (results[0].title === query) {
        callback(results[0]);
      }
    }).fail(() => console.log('fail'));


};

export default searchTMDB;