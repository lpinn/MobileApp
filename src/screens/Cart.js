import React, { useEffect, useState } from "react";
import { Text, Card } from "react-native-elements";
import Button from "../components/Button";
import Counter from "../state/Counter";
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

const Cart = ({ navigation, route }) => {
  const [items, setItems] = useState([]);
  const [total, updateTotal] = useState(route.params.total);

  useEffect(() => {
    const fetchData = async () => {
      let { products } = route.params;
      setItems(products);
    };

    console.log(route.params);
    if (route.params) {
      fetchData();
    }
  }, []);

  console.log(route.params.total);

  let cartItems = items.map((i) => {
    return (
      <>
        <Text style={{ fontWeight: "bold" }} key={i.id}>
          {i.name} ${i.price} {i.size} oz
        </Text>
        <Counter
          item={i}
          increment={route.params.increment}
          decrement={route.params.decrement}
        />
      </>
    );
  });

  if (!items || items.length == 0) {
    return <EmptyCart navigation={navigation} />;
  } else {
    return (
      <Card>
        <Card.Title>CART</Card.Title>
        {cartItems}
        <Divider />
        <Text style={{ fontWeight: "bold" }}>TOTAL ${total}</Text>
      </Card>
    );
  }
};

export default Cart;
