import React from "react";

const Product = ({ product }) => {
  //podemos aplicar destructuring a el props product para no escribir product.name
  const { id, name, price } = product;

  return (
    <div>
      <h2>{name}</h2>
      <p>$ {price}</p>
    </div>
  );
};

export default Product;
