import React from 'react';

let List = (props) => (
  <ul>
     {props.movies.map((e,i) => <li key={i}>{`xxxx   `}{e.title}</li>)}
  </ul>
);

export default List;