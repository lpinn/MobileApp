import React, { useEffect, useState } from "react";
import { Text, Card } from "react-native-elements";
import Button from "../components/Button";
import Product from '../components/Product'


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
  
  useEffect(() => {             
    const fetchData = async () => {

      let { products } = props.route.params 
      setItems(products)
      //const stringData = await AsyncStorage.getItem("products")
      //const arr = stringData.split("\"}");
      
      //console.log("fetched results", stringData)
      
      //setItems(JSON.parse(stringData));
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
