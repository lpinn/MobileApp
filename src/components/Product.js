/*
We will render a Product component for each object in the ProductsList.json manifest. 
Holds a lot of state for the different options for each item i.e grind/size.

TODO refactor state
Too many hooks.

*/

import React, { useState, useEffect } from "react";
import { SolidButton } from "./Button";
import { ListItem, Text } from "react-native-elements";
import QuickView from "./QuickView";

//import ProductModel from "../utils/ProductModel";

const Product = (props) => {
  const image = require("../../assets/images/coffee.jpg");
  const name = props.name;
  const initialPrice = props.price;

 /*  const [isAdded, setAdded] = useState(false); // if the product has been added to cart
  const [size, setSize] = useState(12);
  const [grind, setGrind] = useState("WHOLE");
  const [price, setPrice] = useState(initialPrice); */
  const [isModalVisible, setModalVisible] = useState(false);

  /*  const addToCart = async (event) => {
    event.preventDefault();
    setAdded(true);
    props.addProduct(new ProductModel(name, size, grind, price));
    setTimeout(() => setAdded(false), 5000); // arbitrary number for now
  }; */

  const toggleModal = () => {
    console.log(); // takes two clicks after state mutation in quick view .. bug
    setModalVisible(!isModalVisible);
  };

  // <ModalTrigger trigger={toggleModal => <SolidButton onPress={toggleModal} text={name}}> <QuickView>
  return (
    <ListItem className="product" key={name}>
      <QuickView
        addProduct={props.addProduct}
        setVisible={toggleModal}
        isVisible={isModalVisible}
        name={name}
        initPrice={initialPrice}
        image={image}
      ></QuickView>

      <SolidButton onPress={toggleModal} text={name} />
      {/* this is really lazy rn, will change different styles for texts later  dont understand the invalid title warning */}
      {/*  <Text h3 style={{ color: "green", fontWeight: "bold", fontSize: 20 }}>
        ${price}
      </Text> */}

      {/*   <SolidButton
        onPress={addToCart}
        text={isAdded ? "ADDED" : "ADD TO CART"}
      /> */}
    </ListItem>
  );
};


export default Product;
