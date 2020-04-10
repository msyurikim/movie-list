import React from 'react';

var Panel= ({movie}) => {
  var keys = Object.keys(movie); //.slice(1);
  //console.log(keys);
  var indexTitle = keys.indexOf('title');
  keys.splice(indexTitle, 1);
  console.log(keys);
  //need this (outer) return statement for every react component
  return(
    keys.map((key) => {
      if(key === 'imgURL') {
        return (<img src={movie[key]}></img>);
      } else {
        return (<li>{key}: {movie[key]}</li>);
      }
    }
      // // don't use backticks, and ${} notation for text in between tags
      // <li>{key}: {movie[key]}</li>
    )
  );
};

export default Panel;