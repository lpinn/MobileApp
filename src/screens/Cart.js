import React, { useEffect, useState } from "react";
import { Text, Card } from "react-native-elements";
import Button from "../components/Button"
import Counter from 'react-native-counters'

const EmptyCart = ({ navigation }) => {
  return (
    <>
      <Text h1>Nothing Here Yet</Text>
      <Button
        text="Continue Shopping"
        onPress={() => navigation.navigate("Catalog")}
      />
    </>
  );
};

const Cart = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let { products } = props.route.params;
      setItems(products);
    };

    console.log(props.route.params)
    if(props.route.params) {
      fetchData();
    }
    
  }, []);
  

  console.log(items);

  // ++ increment buttons for product .
  // -- quantitiy
  let cartItems = items.map((i) => {
    return (
      <>
        <Text key={i.id}>           
          {i.name} ${i.price} {i.size} oz {i.quantity}
        </Text>
        <Counter start = {i.quantity} onChange={() => i.quantity++} />
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
