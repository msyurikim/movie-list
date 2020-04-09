import React from 'react';

var MovieList = ({movies}) => {

  return (
    <ul>
      {movies.map( (movie) =>
        <li>
          {movie.title}
          <button></button>
        </li>
      )}
    </ul>
  );
};


export default MovieList;

