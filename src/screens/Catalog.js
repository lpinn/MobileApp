import React, { useState, useEffect } from "react";
//import { View, Text, Image } from "react-native";
import { Card, Icon, Text } from "react-native-elements";

import Button from "../components/Button";
import Products from "../components/Products";

/* 
This module renders all the items available and lets the user navigate to the Cart.
We will hold a lot of the app's state here. Every single add to Cart causes a rerender in the Catalog.
*/

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

/* 
TODO 
https://reactnavigation.org/docs/troubleshooting#i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state
*/

const Catalog = (props) => {
  const navigation = props.navigation;

  const [totalProducts, updateProducts] = useState([]);
  const [cartTotal, setTotal] = useState(0);

  useEffect(() => {
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
      products: totalProducts, // 
      total: cartTotal, 
      increment: incrementProduct,  // 
      decrement: decrementProduct,
    });
  };

  const handleAddProduct = (selected) => {
    if (
      totalProducts.some(
        (p) => p.id === selected.id && p.size === selected.size
      )
    ) {
      incrementProduct(selected);
    } else {
      // the size, type, or grind is new
      updateProducts(totalProducts.concat(selected));
    }
  };

  const incrementProduct = (selected) => {
    let index = totalProducts.findIndex((i) => i.id === selected.id);
    let tempProducts = [...totalProducts];
    tempProcts[index].quantity++;
    updateProducts(tempProducts);
    navigation.setParams({
      total: cartTotal,
    });
  };

  const decrementProduct = (selected) => {
    let index = totalProducts.findIndex((i) => i.id === selected.id);
    let tempProducts = [...totalProducts];
    tempProducts[index].quantity--;

    if (tempProducts[index].quantity === 0) {
      // when we put counter to 0, remove that product from the products list
      const id = tempProducts[index].id;
      tempProducts = tempProducts.filter((p) => p.id !== id);
    } // the removed product will only be removed on the next cart open

    updateProducts(tempProducts);
    navigation.setParams({
      total: cartTotal,
      products: totalProducts,
    });
  };

  const options = {
    headerTitle: "Catalog",
    headerRight: () => <CartButton onPress={handleGoToCart} />,
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
          key={1} // actually still whining here
          navigation={navigation}
          addProduct={handleAddProduct}
          products={totalProducts}
        />
      </Card>
      <Text>
        Building New Hope coffee is socially responsible and environmentally
        friendly. Our coffee is certified organic, shade-grown and certified
        bird- friendly by Smithsonian Migratory Bird Center, fair and direct
        trade coffee. Our dark roasted beans are single-source and come from El
        Porvenir in Nicaragua, a worker-owned farming cooperative we’ve
        partnered with since 2002.
      </Text>
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
