import React, { useState, useEffect } from "react";
//import { View, Text, Image } from "react-native";
import { Card, Icon } from "react-native-elements";

import Button from "../components/Button";
import Products from "../components/Products";

const CartButton = ({ onPress }) => {
  return (
    <Button
      icon={<Icon name="cart" type="evilicon" size={30} />}
      onPress={onPress} 
      color="red"
      title="Cart"
    />
  );
};

const Catalog = (props) => {
  const navigation = props.navigation;

  const [totalProducts, updateProducts] = useState([]);
  const [cartTotal, setTotal] = useState(0);

  
  useEffect(() => {
    // sometimes doesnt recalc for duplicates... calcTotal is called later.. so its updating later.. only for react navigation
    setTotal(
      totalProducts.reduce((total, e) => {
        //console.log(`total: ${total}, current price: ${e.price}`);
        return total + e.price * e.quantity;
      }, 0)
    );

    console.log("current sum excluding the last one added", cartTotal);
  }, [totalProducts, handleAddProduct, handleGoToCart]);

  const handleGoToCart = () => {
    //https://reactnavigation.org/docs/navigation-prop/

    navigation.navigate("Cart", {
      products: totalProducts, // should i send a map of all the items in totalProducts with a key
      total: cartTotal, // need to update the total somehow
      increment: handleIncrement,
      decrement: handleDecrement,
    });
  };

  const handleAddProduct = (selected) => {
    if (
      totalProducts.some(
        (p) => p.id === selected.id && p.size === selected.size
      )
    ) {
     // console.log("same id");
      handleIncrement(selected);
    } else {
      //console.log("new");
      updateProducts(totalProducts.concat(selected));
    }
  };

  const handleIncrement = (selected) => {
    let index = totalProducts.findIndex((i) => i.id === selected.id);
    let tempProducts = [...totalProducts];
    tempProducts[index].quantity++;
    updateProducts(tempProducts);
    navigation.setParams({
      total: cartTotal,
    });
  };

  const handleDecrement = (selected) => {
    let index = totalProducts.findIndex((i) => i.id === selected.id);
    let tempProducts = [...totalProducts];
    tempProducts[index].quantity--; 

    if(tempProducts[index].quantity === 0) {    // when we put counter to 0, remove that product from the products list
      const id = tempProducts[index].id                 
      tempProducts = tempProducts.filter(p => p.id !== id)
    }    // the removed product will only be removed on the next cart open

    updateProducts(tempProducts);
    navigation.setParams({
      total: cartTotal, 
      products: totalProducts
    });
  };

  const options = {
    headerTitle: "Catalog",
    headerRight: () => (
      <CartButton onPress={handleGoToCart} />
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
      <CartButton onPress={handleGoToCart} />
      <Button text="Reset Cart" onPress={() => updateProducts([])} />
    </>
  );
};

{
  /* why is react whining on line 81 */
}

export default Catalog;
