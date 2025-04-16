import React from "react";

const ProductForm = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    const newProduct = {
      name,
      price,
      quantity,
    };
    console.log(newProduct);
  };

  return (
    <div>
      <h3>Add A product</h3>
      <form action="" onSubmit={handelSubmit}>
        <input type="text" name="name" placeholder="product name" /> <br />
        <input type="text" name="price" placeholder="product price" /> <br />
        <input type="text" name="quantity" placeholder="product quantity" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ProductForm;
