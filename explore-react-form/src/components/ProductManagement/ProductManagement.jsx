import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductManagement = () => {
  const [products, setProdects] = useState([]);
  const handelAddProducts = (newProduct) => {
    const newProducts = [...products, newProduct];
    setProdects(newProducts)
  };
  return (
    <div>
      <ProductForm handelAddProducts={handelAddProducts}></ProductForm>
      <ProductTable products={products}></ProductTable>
    </div>
  );
};

export default ProductManagement;
