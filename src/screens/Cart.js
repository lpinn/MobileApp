import React, { useEffect, useState } from "react";
import { Text, Card } from "react-native-elements";
import Button from "../components/Button";

import AsyncStorage from "@react-native-async-storage/async-storage";

const EmptyCart = (props) => {
  return (
    <>
      <Text h1>Nothing Here Yet</Text>
      <Button text="Continue Shopping" onPress={() => navigation.goBack()} />
    </>
  );
};

const Cart = (props) => {
  const [items, setItems] = useState([]);

  console.log(props.route.params)
  let product = props.route.params
  useEffect(() => {
    const fetchData = async () => {
      const stringData = await AsyncStorage.getItem("product")
      // not mutating state correctly
      setItems(items => items.concat(JSON.parse(stringData)));
    };
    fetchData();
  }, []);

  const handleAddToCart = (selected) => {

  }
  //console.log(items)



  
  // ++ increment
  // -- quantitiy

  if (items.length == 0) {
    return <EmptyCart navigation={props.navigation} />;
  } else {
    return (
      <Card>
        <Card.Title>CART</Card.Title>
        <Text>{product.name}</Text>
      </Card>
    );
  }
};

export default Cart;
