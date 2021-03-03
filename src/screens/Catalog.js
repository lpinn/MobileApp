import React from "react";
//import { View, Text, Image } from "react-native";
import { Card, Divider, Icon } from "react-native-elements";

import Button from "../components/Button";
import Products from "../components/Products";

import items from "../utils/ProductList.json";

const Catalog = (props) => {
  const navigation = props.navigation;

  const options = {
    headerTitle: "Catalog",
    headerRight: () => (
      <Button
        icon={<Icon name="cart" type="evilicon" size={30} />}
        onPress={() => navigation.navigate("Items in Cart")} // chicken and the egg prob
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
      <Products list={items} search="" navigation = {navigation} />
      <Button text="Go back" onPress={() => navigation.goBack()} />
      <Button text="Cart" onPress={() => navigation.navigate("Items in Cart")} />
    </Card>
  );
};

export default Catalog;
