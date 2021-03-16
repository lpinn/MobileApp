import React, { useState } from "react";
import { Text, ListItem } from "react-native-elements";
import { BottomSheet } from "react-native-btr";
import { View } from "react-native";
import Modal from "react-native-modal";

import { SolidButton } from "./Button";
/* 

 A quick view for each product when clicked on
 We use the react native modal package, examples here
 https://github.com/react-native-modal/react-native-modal/tree/master/example/src
 */

function QuickView(props) {
  const name = props.name;
  const image = props.image;

  const [isSizeVisible, setSizeVisible] = useState(false);

  // Add functionality in the quickview
  // to add to cart, change size, change
  const setSize = props.setSize;

  const sizes = [
    // this for the Buttom Sheet component, we provide a onPress method for each option in the Sheet
    {
      oz: "12 oz",
      onPress: () => {
        setSizeVisible(false); // why does the onPress for the sizes close the Modal
        setSize(12);
      },
    },
    {
      oz: "16 oz",
      onPress: () => {
        setSizeVisible(false);
        setSize(16);
      },
    },
    {
      lbs: "5 lbs",
      onPress: () => {
        setSizeVisible(false);
        setSize(80);
      },
    },
    {
      oz: "Cancel",
      style: { backgroundColor: "red" },
      //titleStyle: { color: 'white' },

      onPress: () => setSizeVisible(false),
    },
  ];
  const changeSize = (event) => {
    event.preventDefault();
    setSizeVisible(true);
  };

  return (
    <Modal
      isVisible={props.isVisible}
      animationIn="zoomInUp"
      animationOut="slideOutRight"
      backdropColor="#B4B3DB"
      backdropOpacity={0.9}
      onBackdropPress={props.setVisible}
    >
      <Text h3>
        {name} {props.size}
      </Text>
      <SolidButton text={"Add to Cart"} onPress={props.addToCart} />
      <SolidButton onPress={changeSize} text={props.size} />
      <BottomSheet visible={isSizeVisible}>
        {sizes.map((l, i) => (
          <ListItem key={i} onPress={l.onPress} containerStyle={l.style}>
            <ListItem.Content>
              <ListItem.Title>{l.oz || l.lbs}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </Modal>
  );
}
// choose grind
export default QuickView;
