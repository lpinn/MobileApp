import React from "react";
import { View, Text, Image } from "react-native";
import { Card, ListItem, Icon } from "react-native-elements";

import Button from "../components/Button";

const Catalog = (props) => {
  const navigation = props.navigation;

  return (
    <Card>
      <Card.Title>Buy a coffee</Card.Title>
      <Card.Divider />

          <Text>HELLOW WORLD</Text>
          <Button text="Go back" onPress={() => navigation.goBack()} />
      
    </Card>
  );
};

export default Catalog;
