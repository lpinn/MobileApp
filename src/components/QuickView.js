import React, { useEffect, useState } from "react";
import { Text, Image, Divider } from "react-native-elements";
import { View, ActivityIndicator, StyleSheet } from "react-native";
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
const sizes = [
  { label: "12 oz", value: 12, selected: true },
  { label: "16 oz", value: 16 },
  { label: "5 lbs", value: 80 },
];

const grinds = [
  { label: "Whole bean", value: "WHOLE", selected: true },
  { label: "Drip", value: "Drip" },
  { label: "Coarse for French Press", value: "FRENCHPRESS" },
  { label: "Coarse for Cold Brew", value: "COLDBREW" },
  { label: "Espresso Grind", value: "ESPRESSO" },
];

function QuickView(props) {
  const name = props.name;
  const size = props.size;
  const setSize = props.setSize;
  const setPrice = props.setPrice;

  const [isSizeVisible, setSizeVisible] = useState(false);
  const [isGrindVisible, setGrindVisible] = useState(false);

  useEffect(() => { // doesnt change anything, Modal still just crashes and takes 2 button clicks to retoggle
    let temp;
    if (size == 12) temp = 12.75;
    else if (size == 16) temp = 15.75;
    else if (size == 80) temp = 70.0;
    setPrice(temp);
  }, [size, setSize]);

  
  return (
    // the issue is with the Modal element.. where it goes away and is slow to repop up
    // something with mutating the products state makes it close away. but doesnt for add to cart which mutates catalog
    //https://www.npmjs.com/package/react-native-dropdown-picker#available-item-properties
    <View style={{ flex: 1 }}>
      <View>
        <Modal
          isVisible={props.isVisible}
          backdropColor="#B4B3DB"
          backdropOpacity={0.9}
          animationIn="zoomInUp"
          animationOut="slideOutRight"
          onBackdropPress={props.setVisible}
        >
          <Image
            source={props.image}
            style={{ width: 200, height: 200 }}
            PlaceholderContent={<ActivityIndicator />}
          />
          <Text h3>
            {name} {props.size} oz ${props.price}
          </Text>
          <SolidButton onPress={() => props.setName(name+"hi")}></SolidButton> 
          <DropDownPicker
            style={{ paddingVertical: 10 }}
            containerStyle={{ width: 150, height: 70 }}
            labelStyle={{
              fontSize: 14,
              textAlign: "left",
              color: "red",
            }}
            selectedLabelStyle={{
              color: "#39739d",
            }}
            items={sizes}
            defaultValue={props.size}
            containerStyle={{ height: 40 }}
            style={{ backgroundColor: "#fafafa" }}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            onChangeItem={(item) => {
              console.log("changing,,, hmmmmmmm");
              setSize(item.value);
              setPrice(props.price);
            }}
            isVisible={isSizeVisible}
            onOpen={() => setSizeVisible(true)}
            onClose={() => setSizeVisible(false)}
          />
          <Divider />

          <DropDownPicker
            items={grinds}
            defaultValue={props.initGrind}
            containerStyle={{ height: 40 }}
            style={{ backgroundColor: "#fafafa" }}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            onChangeItem={(item) => props.setGrind(item.value)} //
            isVisible={isGrindVisible}
            onOpen={() => setGrindVisible(true)}
            onClose={() => setGrindVisible(false)}
          />

          <SolidButton text={"Add to Cart"} onPress={props.addToCart} />
          <SolidButton onPress={props.setVisible} text={"exit"} />
        </Modal>
      </View>
    </View>
  );
}

export default QuickView;

const styles = StyleSheet.create({
  modalContent: {},
  modalText: {},
  modalDrop: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
});
