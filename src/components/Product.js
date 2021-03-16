/*
We will render a Product component for each object in the ProductsList.json manifest. 
Holds a lot of state for the different options for each item i.e grind/size.


This code is pretty ugly and verbose...
TODO refactor state
Too many hooks.

Add bean option
*/

import React, { useState, useEffect } from "react";
import { SolidButton } from "./Button";
import { ListItem, Text, Tooltip } from "react-native-elements";
import { BottomSheet } from "react-native-btr";
import QuickView from "./QuickView";

import grinds from "../utils/Grinds";

const Product = (props) => {
  const image = props.image;
  const name = props.name;
  const initialPrice = props.price;

  const [isAdded, setAdded] = useState(false);
  const [size, setSize] = useState(12);
  const [grind, setGrind] = useState(props.grind);
  const [sizeVisible, setVisible] = useState(false);
  const [sizeSelected, setSelected] = useState(false); // should i merge some of these states into an Object
  const [isModalVisible, setModalVisible] = useState(false);

  const [price, setPrice] = useState(initialPrice);

  useEffect(() => {
    calcPrice();
  }, [size, setSize]);

  const sizes = [
    // this for the Buttom Sheet component, we provide a onPress method for each option in the Sheet
    {
      oz: "12 oz",
      onPress: () => {
        setSelected(true);
        setSize(12);
        setVisible(false); // stop displaying the Buttom Sheet
      },
    },
    {
      oz: "16 oz",
      onPress: () => {
        setSelected(true);
        setSize(16);
        setVisible(false);
      },
    },
    {
      lbs: "5 lbs",
      onPress: () => {
        setSelected(true);
        setSize(80);
        setVisible(false);
      },
    },
    {
      oz: "Cancel",
      style: { backgroundColor: "red" },
      //titleStyle: { color: 'white' },
      onPress: () => setVisible(false),
    },
  ];

  const changeSize = (event) => {
    event.preventDefault();
    setVisible(true);
  };



  const calcPrice = () => {
    let temp;
    if (size == 12) temp = 12.75;
    else if (size == 16) temp = 15.75;
    else if (size == 80) temp = 70.0;
    setPrice(temp);
  };

  const addToCart = async (event) => {
    event.preventDefault();
    setAdded(true);

    props.addProduct({
      id: name + size + grind, // size dictates the price so we identify our keys based on that
      name: name,
      price: price,  // could i have just have this Object as state of a product with these keys
      size: size,
      grind: grind,
      quantity: 1,
    });
    setTimeout(() => setAdded(false), 5000); // not sure whats the best way to indicate it is alr added
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  /*if (isModalVisible) {
    return <QuickView setVisible={toggleModal}
    isVisible={isModalVisible} name={name}></QuickView>;
  }*/
  return (
    <ListItem className="product" key={name + size + grind}>
      <QuickView
        setVisible={toggleModal}
        isVisible={isModalVisible}
        name={name}
        size={size}
        setSize={setSize}
        addToCart={addToCart}
      ></QuickView>
      {/*   <Text style={{ fontWeight: "bold" }}>{name}</Text> */}
      <SolidButton onPress={() => setModalVisible(true)} text={name} />
      {/* this is really lazy rn, will change different styles for texts later */}
      <Text>${price}</Text>

      <SolidButton
        onPress={addToCart}
        text={isAdded ? "ADDED" : "ADD TO CART"}
      />
      <SolidButton
        onPress={changeSize}
        text={sizeSelected ? size + " oz" : "size"}
      />
      {/*   <Button
        onPress={changeGrind}
        text={grind} /> */}
      <BottomSheet visible={sizeVisible}>
        {sizes.map((l, i) => (
          <ListItem key={i} onPress={l.onPress} containerStyle={l.style}>
            <ListItem.Content>
              <ListItem.Title>{l.oz || l.lbs}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </ListItem>
  );
};
export default Product;
