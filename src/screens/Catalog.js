import React, { useState } from "react";
//import { View, Text, Image } from "react-native";
import { Card, Divider, Icon } from "react-native-elements";

import Button from "../components/Button";
import Products from "../components/Products";

import items from "../utils/ProductList.json";

const Catalog = (props) => {
  const navigation = props.navigation;

  const [totalProducts, addProduct] = useState([]); // this component holds the state of the products added to cart
  totalProducts.forEach((p) => console.log(p.name, p.price));

  const handleGoToCart = () => {
      navigation.navigate("Items in Cart",
        {
          products: totalProducts, // send the current states products
          test: 123,
        });
  };

  const options = {
    headerTitle: "Catalog",
    headerRight: () => (
      <Button
        icon={<Icon name="cart" type="evilicon" size={30} />}
        onPress={handleGoToCart} // chicken and the egg prob
        color="red"
        title=""
      />
    ),
  };

  React.useLayoutEffect(() => {
    navigation.setOptions(options);
  }, [navigation]);

  return (
    <Card>
      <Card.Title>Buy a coffee</Card.Title>
      <Card.Divider />
      <Products
        list={items}
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
