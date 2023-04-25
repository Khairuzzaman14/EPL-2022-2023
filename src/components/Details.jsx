import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();
  return <div>Details of {params.team}</div>;
};

export default Details;
