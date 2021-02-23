import React from "react";
import { View, Text, Image } from "react-native";
import { Card, Divider, Icon } from "react-native-elements";

import Button from "../components/Button";
import Products from "../components/Products";

import items from "./ProductList.json";

const Catalog = (props) => {
  const navigation = props.navigation;
  console.log(navigation.state)

  return (
    <Card>
      <Card.Title>Buy a coffee</Card.Title>
      <Card.Divider />
      <Products list={items} search="" />
      <Button text="Go back" onPress={() => navigation.goBack()} />
      <Button text="Cart" onPress={() => navigation.navigate("Cart")} />
    </Card>
  );
};

export default Catalog;
