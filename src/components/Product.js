import React, { useState } from "react";

const Product = (props) => {
  const id = props.id;
  const image = props.image;
  const name = props.name;
  const price = props.price;
  let quantity = props.quantity;

  const [isAdded, setAdded] = useState(false);

  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>
      <p>{price}</p>
      <button onClick={() => setAdded(true)}>
        {isAdded ? "ADDED" : "ADD TO CART"}
      </button>
    </div>
  );
};
export default Product;
