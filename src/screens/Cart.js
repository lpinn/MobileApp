import React, { useEffect, useState } from "react";
import { Text, Card } from "react-native-elements";
import Button from "../components/Button";

import AsyncStorage from "@react-native-async-storage/async-storage";

const EmptyCart = (props) => {
  return (
    <>
      <Text h1>Nothing Here Yet</Text>
      <Button text="Continue Shopping" onPress={() => props.navigation.navigate("Catalog")} />
    </>
  );
};

const Cart = (props) => {
  const [items, setItems] = useState([]);

  let product = props.route.params // using react navigation
  
  useEffect(() => {                 // im using both react navigation parameters and local storage for sending data
                                    // still have not found one that can have multiple products added. might be dumb
    const fetchData = async () => {

      const stringData = await AsyncStorage.getItem("products")
      
      console.log("fetched results", stringData)
      // not mutating state correctly
      setItems(JSON.parse(stringData));
    };

    fetchData();
  }, []);

  const handleAddToCart = (selected) => {
    // if exists in cart increment quantity, else push 
  }
  console.log(items)


  
  // ++ increment
  // -- quantitiy

  if (!items || items.length == 0 )  {
    return <EmptyCart navigation={props.navigation} />;
  } else {
    return (
      <Card>
        <Card.Title>CART</Card.Title>
        <Text>{product.name}</Text>
        <Text>${product.price}</Text>
        <Text>{product.size} oz</Text>
        {/* button for quantity */}
      </Card>
    );
  }
};

export default Cart;
