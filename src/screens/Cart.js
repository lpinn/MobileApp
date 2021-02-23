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

  useEffect(() => {
    const fetchData = async () => {
      const stringData = await AsyncStorage.getItem("product")
      // not mutating state correctly
      console.log("hi", stringData)
      setItems(items => items.concat(JSON.parse(stringData)));
    };

    fetchData();
  }, []);
  console.log(items)



  
  // ++ increment
  // -- quantitiy

  if (items.length == 0) {
    return <EmptyCart navigation={props.navigation} />;
  } else {
    return (
      <Card>
        <Card.Title>CART</Card.Title>
        <Text>Hey</Text>
      </Card>
    );
  }
};

export default Cart;
