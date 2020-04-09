import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

class MovieList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies,
      watched: [],
      toWatch: this.props.movies,
      clickWatched: false,
      clickToWatch: false
    }
  }

  updateMovieLists(movie, watched) {
    var watchedCopy = this.state.watched.slice();
    var toWatch = this.state.toWatch.slice();
    if (watched) {
      if (!watchedCopy.includes(movie)) {
        watchedCopy.push(movie);
      }
      if (toWatch.includes(movie)) {
        var index = toWatch.indexOf(movie);
        toWatch.splice(index, 1);
      }
    } else {
      if (!toWatch.includes(movie)) {
        toWatch.push(movie);
      }
      if (watchedCopy.includes(movie)) {
        var index = watchedCopy.indexOf(movie);
        watchedCopy.splice(index, 1);
      }
    }
    this.setState({
      watched: watchedCopy,
      toWatch: toWatch
    });
  }

  handleClickForWatched() {
    this.setState({
      clickWatched: !this.state.clickWatched
    });
  }

  handleClickForToWatch() {
    this.setState({
      clickToWatch: !this.state.clickToWatch
    });
  }

  render() {
    var movies = this.state.movies;
    if (this.state.clickWatched && !this.state.clickToWatch) {
      movies = this.state.watched;
    } else if (this.state.clickToWatch && !this.state.clickWatched) {
      movies = this.state.toWatch;
    }
    return(
      <div>
        <button onClick={this.handleClickForWatched.bind(this)}>Watched</button>
        <button onClick={this.handleClickForToWatch.bind(this)}>To Watch</button>
        <ul>
          {movies.map( (movie) => <MovieListEntry movie= {movie} updateMovieLists= {this.updateMovieLists.bind(this)} />
          )}
        </ul>
      </div>

    );

  }
}

export default MovieList;

