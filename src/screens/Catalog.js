import React, { useState } from "react";
//import { View, Text, Image } from "react-native";
import { Card, Divider, Icon } from "react-native-elements";

import Button from "../components/Button";
import Products from "../components/Products";

import list from "../utils/ProductList.json";

const Catalog = (props) => {
  const navigation = props.navigation;

  const [totalProducts, addProduct] = useState([]); 

  const handleGoToCart = () => {
      navigation.navigate("Items in Cart",
        {
          products: totalProducts, // send the current states products
        });
  };

  const handleAddProduct = (selected) => {
    if(totalProducts.some(p => p.id === selected.id)){
      console.log("same id")
      // do nothing for now
    }
    else {
      addProduct(totalProducts.concat(selected))
    }
    

  }

  const options = {
    headerTitle: "Catalog",
    headerRight: () => (
      <Button
        icon={<Icon name="cart" type="evilicon" size={30} />}
        onPress={handleGoToCart} 
        color="red"
        title=""
      />
    ),
  };

  React.useLayoutEffect(() => {
    navigation.setOptions(options);
  }, [navigation, totalProducts]);

  return (
    <Card>
      <Card.Title>Buy a coffee</Card.Title>
      <Card.Divider />
      <Products key = {1} /* why is react whining right here */
        list={list}
        search=""
        navigation={navigation}
        addProduct={handleAddProduct}
        products={totalProducts}
      />
      <Button text="Go back" onPress={() => navigation.navigate('Home', {
        products: totalProducts
      })} />
      <Button text="Cart" onPress={handleGoToCart} />
      <Button text="Reset Cart" onPress={() => addProduct([])} />
    </Card>
  );
};

export default Catalog;
