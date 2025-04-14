import React from "react";
import { useLoaderData } from "react-router";

const Details = () => {
  const user = useLoaderData();
  const {website} = user
  return (
    <div>
      <h3>User Details</h3>
      <h3>Website : {website}</h3>
    </div>
  );
};

export default Details;
