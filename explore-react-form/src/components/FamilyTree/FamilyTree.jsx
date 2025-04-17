import React, { createContext } from "react";
import GrantPa from "./GrantPa";
import "./Family/FamilyTree.css";

export const AssetsContext = createContext("");

const FamilyTree = () => {
  const assets = "Diamond";
  const newAsstes = "gold";
  return (
    <div className="family-tree">
      <h2>Family Tree</h2>
      <AssetsContext.Provider value={newAsstes}>
        <GrantPa assets={assets}></GrantPa>
      </AssetsContext.Provider>
    </div>
  );
};

export default FamilyTree;
