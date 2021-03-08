import React, { useState } from "react";
import { StyleSheet, View } from 'react-native'
import { Card, Button, Icon } from "react-native-elements";

import Product from "./Product";

const Products = (props) => {
  let productsData;
  
  // put state in cart component

  productsData = props.list.map((product, i) => {
    
    return (
      <>
      <Product
        key={i}
        id={product.name+product.size} // initial ids
        name={product.name}
        description={product.description}
        price={product.price}
        size={product.size}
        navigation={props.navigation}
        addProduct={props.addProduct}
        products={props.products}
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