import React from 'react';

import MovieList from './MovieList.jsx';
import exampleMovies from '../data/exampleMovies.js';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';

//originally const
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: exampleMovies,
      //movies: [],
      searchResults: []
    };
  }

  getSearchResults(query) {
    var results = this.filterResults(query, this.state.movies);
    if (results.length === 0) {
      //console.log('No movie found!');
      window.alert('No movie found!');
    } else {
      this.setState({
        searchResults: results
      });
    }
  }

  //move this to Search
  filterResults(query, movies) {
    return movies.filter((movie) => {
      var movieCopy = movie.title.toLowerCase();
      var queryCopy = query.toLowerCase();
      return movieCopy.includes(queryCopy);
    });
  }

  addMovie(movie) {
    var movies = this.state.movies;
    movies.push(movie);
    this.setState({
      movies: movies
    });
  }

  render() {
    var movies;
    if (this.state.searchResults.length === 0) {
      movies = this.state.movies;
    } else {
      movies = this.state.searchResults;
    }
    return (
      <div>
        <h1>I Like Movies</h1>
        <AddMovie addMovie= {this.addMovie.bind(this)} />
        {/* prop drill with method */}
        <Search getSearchResults= {this.getSearchResults.bind(this)} />
        <MovieList movies= {movies} />
      </div>
    );
  }
};

export default App;