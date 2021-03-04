import React, { useState } from "react";
import { StyleSheet, View } from 'react-native'
import { Card, Button, Icon } from "react-native-elements";

import Product from "./Product";

const Products = (props) => {
  let productsData;
  
  // put state in cart component
  

  const handleAddToCart = (added) => {
    //   if total products was an array, do totalProducts.some( (item) => item.id))
    // if thats true increment the quantity
    // else add the parameter to totalProducts
  }

  productsData = props.list.map((product) => {
    return (
      <>
      <Product
        key={product.id}
        name={product.name}
        description={product.description}
        price={product.price}
        size={product.size}
        navigation={props.navigation}
        addProduct={props.addProduct}
        products={props.totalProducts}
      />
      </>
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