import React from 'react';
import GrantPa from './GrantPa';
import "./Family/FamilyTree.css"
const FamilyTree = () => {
    const assets = "Diamond"
    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <GrantPa></GrantPa>
        </div>
    );
};

export default FamilyTree;