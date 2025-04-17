import React from "react";
import Special from "./Special";

const Cousin = ({ name }) => {
  return (
    <div>
      <h3>{name}</h3>
      {
        name === "tomtom" && <Special></Special>
      }
    </div>
  );
};

export default Cousin;
