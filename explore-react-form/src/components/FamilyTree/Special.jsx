import React, { useContext } from "react";
import { AssetsContext } from "./FamilyTree";

const Special = ({ assets }) => {
  const newAssets = useContext(AssetsContext);
  console.log("asf", newAssets);
  return (
    <div>
      <h3>Special</h3>
      <p>Assrts : {assets}</p>
      <p>Gold : {newAssets}</p>
    </div>
  );
};

export default Special;
