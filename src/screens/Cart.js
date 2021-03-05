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

  const handleAddToCart = (selected) => {
    // if exists in cart increment quantity, else push
  };

  console.log(items);

  // ++ increment
  // -- quantitiy
  let stuffToRender = items.map((i) => {
    return (
      <>
        <Text key={i.id}>           {/* ISSUE all the ids are the same "1114" */}
          {i.name} {i.price} {i.size}
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
        {stuffToRender}
      </Card>
    );
  }
};

export default Cart;
