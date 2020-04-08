import React from 'react';

//var AddMovie = () => {
class AddMovie extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    }
  }

  handleChange(added) {
    this.setState({
      movie: {title: added}
    });
  }

  handleClick() {
    this.props.addMovie(this.state.movie);
  }

  render() {
    return(
      <div>
        <input type='text' placeholder='Add Movie' onChange= {(event) => this.handleChange(event.target.value)} />
        <button onClick= {this.handleClick.bind(this)}>Add</button>
      </div>
    );
  }

}

export default AddMovie;