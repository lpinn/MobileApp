import React, { useEffect, useState } from "react";
import { Text, Card } from "react-native-elements";
import Button from "../components/Button";
import Product from "../components/Product";

const EmptyCart = (props) => {
  return (
    <>
      <Text h1>Nothing Here Yet</Text>
      <Button
        text="Continue Shopping"
        onPress={() => props.navigation.navigate("Catalog")}
      />
    </>
  );
};

const Cart = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!props.route.params) return;

      let { products } = props.route.params;
      setItems(products);
    };

    fetchData();
  }, []);
  

  console.log(items);

  // ++ increment for multiples of a product .
  // -- quantitiy
  let cartItems = items.map((i) => {
    return (
      <>
        <Text key={i.id}>           {/* ISSUE all the ids are the same "1114" */}
          {i.name} ${i.price} {i.size} oz
        </Text>
      </>
    );
  });

  if (!items || items.length == 0) {
    return <EmptyCart navigation={props.navigation} />;
  } else {
    return (
      <Card>
        <Card.Title>CART</Card.Title>
        {cartItems}
      </Card>
    );
  }
};

export default Cart;
