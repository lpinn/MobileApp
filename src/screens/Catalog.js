import React, { useState } from "react";
//import { View, Text, Image } from "react-native";
import { Card, Icon } from "react-native-elements";

import Button from "../components/Button";
import Products from "../components/Products";

import list from "../utils/ProductList.json";

const Catalog = (props) => {
  const navigation = props.navigation;

  const [totalProducts, addProduct] = useState([]); 
  const [cartTotal, setTotal] = useState(0);

  const handleGoToCart = () => {
      navigation.navigate("Items in Cart",
        {
          products: totalProducts, // send the current states products
        });
  };

  const handleAddProduct = (selected) => {
    if(totalProducts.some(p => p.id === selected.id)){
      console.log("same id")
      let index = totalProducts.findIndex(i => i.id === selected.id)
      totalProducts[index].quantity++;
      // recalc total
    }
    else {
      addProduct(totalProducts.concat(selected))
    }
    calcTotal()
    
  }

  const calcTotal = () => {
    let sum = totalProducts.reduce((total, e) => {
      console.log(`total: ${total}, current val: ${e}`)
      return total + (e.price * e.quantity)}      // the price is incorrectly calculated bc if they change size, the items price is the same no matter size.
      , 0)
    setTotal(sum)
    console.log(sum)
  }

  const options = {
    headerTitle: "Catalog",
    headerRight: () => (
      <Button
        icon={<Icon name="cart" type="evilicon" size={30} />}
        onPress={handleGoToCart} 
        color="red"
        title=""
      />
    ),
  };

  React.useLayoutEffect(() => {
    navigation.setOptions(options);
  }, [navigation, totalProducts]);

  return (
    <Card>
      <Card.Title>Buy a coffee</Card.Title>
      <Card.Divider />
      <Products key = {1} /* why is react whining right here */
        list={list}
        search=""
        navigation={navigation}
        addProduct={handleAddProduct}
        products={totalProducts}
      />
      <Button text="Go back" onPress={() => navigation.navigate('Home', {
        products: totalProducts
      })} />
      <Button text="Cart" onPress={handleGoToCart} />
      <Button text="Reset Cart" onPress={() => addProduct([])} />
    </Card>
  );
};

export default Catalog;
