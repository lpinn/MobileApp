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


const Product = (props) => {
  const image = require("../../assets/images/2ozbag.jpg");
  const name = props.name;
  const initialPrice = props.price;

  const [isModalVisible, setModalVisible] = useState(false);

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
