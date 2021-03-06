import React, { useState, useEffect } from "react";
//import { View, Text, Image } from "react-native";
import { Card, Icon } from "react-native-elements";

import Button from "../components/Button";
import Products from "../components/Products";

import list from "../utils/ProductList.json";

const Catalog = (props) => {
  const navigation = props.navigation;

  const [totalProducts, addProduct] = useState([]);
  const [cartTotal, setTotal] = useState(0);

  useEffect(() => {
    calcTotal();
  }, [totalProducts])

  const handleGoToCart = () => {
    navigation.navigate("Items in Cart", {
      products: totalProducts, // should i send a map of all the items in totalProducts with a key
      total: cartTotal,
    });
  };

  const handleAddProduct = (selected) => {
    if (
      totalProducts.some(
        (p) => p.id === selected.id && p.size === selected.size
      )
    ) {
      console.log("same id");
      let index = totalProducts.findIndex((i) => i.id === selected.id);
      totalProducts[index].quantity++; // is this a valid way to update the property
    } else {
      addProduct(totalProducts.concat(selected));
    }
    //calcTotal();
  };

  const calcTotal = () => {
    setTotal(
      totalProducts.reduce((total, e) => {
        console.log(`total: ${total}, current price: ${e.price}`);
        return total + (e.price * e.quantity);
      }, 0)
    );

    console.log("current sum excluding the last one added", cartTotal);
  };

  const handleCounter = () => {
    //so our total updates in cart with inc + dec
  };

  const options = {
    headerTitle: "Catalog",
    headerRight: () => (
      <Button
        icon={<Icon name="cart" type="evilicon" size={30} />}
        onPress={handleGoToCart}    
        color="red"
        title="Cart"
      />
    ),
  };

  React.useLayoutEffect(() => {
    navigation.setOptions(options);
  }, [navigation, totalProducts]);

  return (
    <>
      <Card>
        <Card.Title>Buy a coffee</Card.Title>
        <Card.Divider />
        <Products
          key={1}
          list={list}
          search=""
          navigation={navigation}
          addProduct={handleAddProduct}
          products={totalProducts}
        />
      </Card>
      <Button
        text="Go back"
        onPress={() =>
          navigation.navigate("Home", {
            products: totalProducts,
          })
        }
      />
      <Button text="Cart" onPress={handleGoToCart} />
      <Button text="Reset Cart" onPress={() => addProduct([])} />
    </>
  );
};

{
  /* why is react whining on line 81 */
}

export default Catalog;
