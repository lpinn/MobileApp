import React, { useState } from "react";
import { StyleSheet, View } from 'react-native'
import { Card, Button, Icon } from "react-native-elements";

import Product from "./Product";

const Products = (props) => {
  let productsData;
  
  // put state in cart component
  
  const [totalProducts, addProduct] = useState([]); // this component holds the state of the products added to cart
  console.log(totalProducts)

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
        addProduct={addProduct}
        products={totalProducts}
      />
    );
  });

  return (
   <View>
      {productsData}
    </View>
    
  );
};

export default Products;

/* const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
}); */