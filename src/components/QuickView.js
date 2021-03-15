import React, { useState } from "react";
import { Text } from "react-native-elements";
import { View } from "react-native";
import Modal from "react-native-modal";

import { SolidButton } from "./Button";
/* 
This has yet to be implemented,
a quick view for each product when clicked on
 */

function QuickView(props) {
  const name = props.name;
  const image = props.image;

  // show
  // hide
  // data
  return (
    <Modal
      isVisible={props.isVisible}
      animationIn="zoomInDown"
      animationOut="slideOutRight"
      backdropColor="#B4B3DB"
      backdropOpacity={0.8}
      onBackdropPress={props.setVisible}
    >
      <Text h3>{name}</Text>
    </Modal>
  );
}

export default QuickView;
