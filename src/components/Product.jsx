import React from "react";

const Product = ({ product }) => {
  //podemos aplicar destructuring a el props product para no escribir product.name
  const { id, name, price } = product;

  //Agregar product in card
  const selectProduct = (id) =>{
    console.log('Buy' , id)
  }

  ;

  return (
      <div className="container text-center">
          <div className="row m-3">
              <div className="col-md-3">
              <div className="card">
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button
      className="btn btn-success"
      onClick={()=> selectProduct(id)}
      >Buy</button>
    </div>
              </div>
          </div>
      </div>
   
  );
};

export default Product;
