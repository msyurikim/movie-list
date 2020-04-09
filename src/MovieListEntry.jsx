import React from 'react';
//import Button from 'react-bootstrap/Button';

class MovieListEntry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      watched: false
    };
  }

  handleButtonClick(movie) {
    this.setState(
      {watched: !this.state.watched},
      //call parent function and pass state inside a CALLBACK (must be wrapped, or invoked immediately)
      () => this.props.updateMovieLists(movie, this.state.watched)
    );
  }

  handleTitleClick() {

  }

  render() {
    return(
      <li>
        {/* onClick= {} */}
        <p onClick= {this.handleTitleClick}>{this.props.movie.title}</p>
        <button onClick={() => this.handleButtonClick(this.props.movie)}>Watched</button>
      </li>
    );
  }
}

export default MovieListEntry;