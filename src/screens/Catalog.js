import React from "react";
import { View, Text, Image } from "react-native";
import { Card, Divider, Icon } from "react-native-elements";

import Button from "../components/Button";
import Products from "../components/Products";

import items from "./ProductList.json";

const Catalog = (props) => {
  const navigation = props.navigation;

  return (
    <Card>
      <Card.Title>Buy a coffee</Card.Title>
      <Card.Divider />
      <Products list={items} search="" />
      {/* <Text>Dark Roast</Text> */}
      {/* <Text>Light</Text> */}
      {/* <Text>Med</Text> */}
      {/* <Text>Decaf</Text> */}
      <Button text="Go back" onPress={() => navigation.goBack()} />
    </Card>
  );
};

export default Catalog;
