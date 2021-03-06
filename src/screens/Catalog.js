import React, { useState, useEffect } from "react";
//import { View, Text, Image } from "react-native";
import { Card, Icon } from "react-native-elements";

import Button from "../components/Button";
import Products from "../components/Products";

import list from "../utils/ProductList.json";

const Catalog = (props) => {
  const navigation = props.navigation;

  const [totalProducts, updateProducts] = useState([]);
  const [cartTotal, setTotal] = useState(0);

  useEffect(() => {
    // sometimes doesnt recalc for duplicates... calcTotal is called later.. so its updating later
    setTotal(
      totalProducts.reduce((total, e) => {
        console.log(`total: ${total}, current price: ${e.price}`);
        return total + e.price * e.quantity;
      }, 0)
    );

    console.log("current sum excluding the last one added", cartTotal);
  }, [totalProducts, handleAddProduct, handleGoToCart]);

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
      handleIcrement(selected);
    } else {
      console.log("new");
      updateProducts(totalProducts.concat(selected));
    }
    //calcTotal();
  };

  const handleIcrement = (selected) => {
    let index = totalProducts.findIndex((i) => i.id === selected.id);
    let newProducts = [...totalProducts];
    newProducts[index].quantity++;
    updateProducts(newProducts);
  };

  const options = {
    headerTitle: "Catalog",
    headerRight: () => (
      <Button
        icon={<Icon name="cart" type="evilicon" size={30} />}
        onPress={handleGoToCart} // not updating with total
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
      <Button text="Reset Cart" onPress={() => updateProducts([])} />
    </>
  );
};

{
  /* why is react whining on line 81 */
}

export default Catalog;
