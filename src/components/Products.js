import React, { useState } from "react";
import { Card } from "react-native-elements";

import Product from "./Product";

const Products = (props) => {
  let productsData;
  
  // put state in cart component
  



  productsData = props.list.map((product) => {
    return (
      <Product
        key={product.id}
        name={product.name}
        description={product.description}
        price={product.price}
        size={product.size}
        grind={product.grind}
        navigation={props.navigation}
        // add={addToCart}
      />
    );
  });

  return (
    <Card className="products">
      {/* do i want to nest cards here, kinda fugly TODO */}
      {productsData}
    </Card>
  );
};

export default Products;
