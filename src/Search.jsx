import React from 'react';

//var Search = ({getSearchResults}) => {
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  handleChange(query) {
    this.setState({
      query: query
    });
  }

  handleClick() {
    return this.props.getSearchResults(this.state.query);
  }

  render() {
    return (
      <div>
        {/* <input type='text' onChange= {(event) => getSearchResults(event.target.value)} /> */}
        <input type='text' placeholder= 'Search' onChange= {(event) => this.handleChange(event.target.value)}/>
        <button onClick= {this.handleClick.bind(this)}></button>
      </div>
    );
  }
}

export default Search;