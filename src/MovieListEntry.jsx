import React from 'react';
//import Button from 'react-bootstrap/Button';
import searchTMDB from './searchTMDB.js';
import Panel from './Panel.jsx';

class MovieListEntry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      watched: false,
      movie: this.props.movie
    };
  }

  handleButtonClick(movie) {
    this.setState(
      {watched: !this.state.watched},
      //call parent function and pass state inside a CALLBACK (must be wrapped, or invoked immediately)
      () => this.props.updateMovieLists(movie, this.state.watched)
    );
  }

  // handleTitleClick() {
      //hide movie info if not clicked
  // }
  //called automatically
  componentDidMount() {
    searchTMDB(this.state.movie.title, this.updateMovieInfo.bind(this));
  }

  updateMovieInfo(data) { //movie object
    //var movieCopy = Object.assign({}, this.state.movie);
    var movieCopy = this.state.movie;
    movieCopy.Year = data.release_date.slice(0, 4); //just get the year
    //can't find Runtime, Metascore
    movieCopy.imdbRating = data.vote_average;
    // Watched
    movieCopy.imgURL = `https://image.tmdb.org/t/p/w92${data.poster_path}`;
    this.setState({
      movie: movieCopy
    });
    console.log(movieCopy);
  }

  render() {
    if (!this.state.movie.hasOwnProperty('Year')) {
      return <li></li>
    } else {
      return(
        <li>
          <p onClick= {this.handleTitleClick}>{this.state.movie.title}</p>
          <ul>
            <Panel movie= {this.state.movie} />
            {/* button won't show up inside panel? */}
            <button onClick={() => this.handleButtonClick(this.props.movie)}>Watched</button>
          </ul>
        </li>
      );
    }
  }
}

export default MovieListEntry;