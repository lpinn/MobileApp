import React from "react";
import { View, Text, Image } from "react-native";
import { Card, ListItem, Icon } from "react-native-elements";

import Button from "../components/Button";
import Products from '../components/Products'

const roasts = {
    dark: {

    },
    light: {

    },
    house: {
        
    }
}

const Catalog = (props) => {
  const navigation = props.navigation;

  return (
    <Card>
      <Card.Title>Buy a coffee</Card.Title>
      <Card.Divider />
    {/* <Products /> */}
      <Text>Dark Roast</Text>
      <Button text="Go back" onPress={() => navigation.goBack()} />
    </Card>
  );
};

export default Catalog;
