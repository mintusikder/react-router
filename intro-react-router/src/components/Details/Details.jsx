import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const Details = () => {
  const user = useLoaderData();
  const navigate = useNavigate()
  const {website} = user
  return (
    <div>
      <h3>User Details</h3>
      <h3>Website : {website}</h3>
      <button onClick={() =>navigate(-1)}>Go Back</button>
    </div>
  );
};

export default Details;
