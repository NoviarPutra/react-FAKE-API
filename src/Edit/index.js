import React from 'react';
import { useLocation } from 'react-router-dom';

const Edit = (props, state) => {
  const location = useLocation();
  console.log(location);
  return <h1>{location.state.kon}</h1>;
};

export default Edit;
