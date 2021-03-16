import React, { useState } from "react";
import { Text, ListItem } from "react-native-elements";
import { BottomSheet } from "react-native-btr";
import { View } from "react-native";
import Modal from "react-native-modal";
import DropDownPicker from "react-native-dropdown-picker";

import { SolidButton } from "./Button";
/* 

 A quick view for each product when clicked on
 We use the react native modal package, examples here
 https://github.com/react-native-modal/react-native-modal/tree/master/example/src
 */

/* 
 https://www.npmjs.com/package/react-native-dropdown-picker */
function QuickView(props) {
  const name = props.name;
  const image = props.image;

  const [isSizeVisible, setSizeVisible] = useState(false);

  // Add functionality in the quickview
  // to add to cart, change size, change
  const setSize = props.setSize;

  sizes = [
    { label: "12 oz", value: 12 },
    { label: "16 oz", value: 16 },
    { label: "5 lbs", value: 80 },
  ];

  return (
    <Modal
      isVisible={props.isVisible}
      animationIn="zoomInUp"
      animationOut="slideOutRight"
      backdropColor="#B4B3DB"
      backdropOpacity={0.9}
      onBackdropPress={props.setVisible}
    >
      <DropDownPicker
        items={sizes}
        defaultValue={props.size}
        containerStyle={{ height: 40 }}
        style={{ backgroundColor: "#fafafa" }}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        onChangeItem={(item) => setSize(item.value)}
      />
      <Text h3>
        {name} {props.size}
      </Text>
      <SolidButton text={"Add to Cart"} onPress={props.addToCart} />
      <SolidButton onPress={props.setVisible} text={"exit"} />

    </Modal>
  );
}
// choose grind
export default QuickView;
