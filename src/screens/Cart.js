import React, { useEffect, useState } from "react";
import { Text, Card } from "react-native-elements";
import Button from "../components/Button"
import Counter from 'react-native-counters'
import Divider from "react-native-btr/src/Components/Separator";

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
      console.log(props.route.params)
      setItems(products);
    };

    console.log(props.route.params)
    if(props.route.params) {
      fetchData();
    }
    
  }, []);

  const handleCounter = (number, type) => {
    console.log(`${number}, ${type}`)
    if(type === 'minus') {
      --number;
    }
    else
      ;
  }
  

  console.log(items);
  console.log(props.route.params.total)
  
  let cartItems = items.map((i) => {
    return (
      <>
        <Text style={{ fontWeight: "bold" }} key={i.id}>           
          {i.name} ${i.price} {i.size} oz 
        </Text>
        <Counter start = {i.quantity} onChange={handleCounter} />  
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
        <Divider/>
        <Text style={{ fontWeight: "bold" }}>TOTAL ${props.route.params.total}</Text>
      </Card>
    );
  }
};

export default Cart;
