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
      console.log("hi")
      console.log(totalProducts)
      navigation.navigate("Items in Cart",
        {
          products: totalProducts, // send the current states products
        });
  };

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
      <Products
        list={list}
        search=""
        navigation={navigation}
        addProduct={addProduct}
        products={totalProducts}
      />
      <Button text="Go back" onPress={() => navigation.goBack()} />
      <Button text="Cart" onPress={handleGoToCart} />
      <Button text="Reset Cart" onPress={() => addProduct([])} />
    </Card>
  );
};

export default Catalog;
