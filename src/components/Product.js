/*
This code is pretty ugly and verbose...
Will refactor after everything is fully working.
Too many hooks.

Add bean option
*/

import React, { useState, useEffect } from "react";
import Button from "./Button";
import { ListItem, Text, Tooltip } from "react-native-elements";
import { BottomSheet } from "react-native-btr";

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

  const [price, setPrice] = useState(initialPrice);

  useEffect(() => {
    calcPrice();
  }, [size, setSize]);

  const sizes = [
    {
      oz: "12 oz",
      onPress: () => {
        setSelected(true);
        setSize(12);
        setVisible(false);
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

  const changeGrind = (event) => {
    event.preventDefault();
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
      price: price,
      size: size,
      grind: grind,
      quantity: 1,
    });
    setTimeout(() => setAdded(false), 5000);
  };

  return (
    <ListItem className="product" key = {name+size+grind}>
      <Text style={{ fontWeight: "bold" }}>{name}</Text>
      <Text>${price}</Text>

      <Button onPress={addToCart} text={isAdded ? "ADDED" : "ADD TO CART"} />
      <Button
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
   {/*     <ButtomSheet visible={sizeVisible}>
        {grinds.map((g, i) => (
          <ListItem key={i} onPress={l.onPress} containerStyle={l.style}>
          <ListItem.Content>
            <ListItem.Title>{l.oz || l.lbs}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        ))}
      </ButtomSheet> */}
    </ListItem>
  );
};
export default Product;
