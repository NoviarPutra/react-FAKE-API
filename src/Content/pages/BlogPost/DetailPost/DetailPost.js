import React from "react";
import { useLocation } from "react-router-dom";
const DetailPost = (props, state) => {
  const location = useLocation();
  return <p>{location.state.title}</p>;
};

export default DetailPost;
