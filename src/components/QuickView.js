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
    <View>
      <Modal isVisible={props.isVisible}>
        <View style={{ alignContent: "center" }}>
          <Text>{name}</Text>
          <SolidButton text={"Toggle"} onPress={props.setVisible}></SolidButton>
        </View>
      </Modal>
    </View>
  );
}

export default QuickView;
