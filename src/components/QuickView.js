import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
  const setSize = props.setSize;
  const setPrice = props.setPrice;

  const [qSize, setqSize] = useState(props.size);
  const [qPrice, setqPrice] = useState(props.price);

  useEffect( () => {
    setqPrice(props.price);
    setqSize(props.size)
  }, [props.size, props.price])
  
  /*
  onBackdropPress={props.setVisible}
  animationIn="zoomInUp"
  animationOut="slideOutRight"
  */
  return (
    // the issue is with the Modal element.. where it goes away and is slow to repop up
    // something with mutating the products state makes it close away

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
            {name} {qSize} oz ${qPrice}
          </Text>
          <DropDownPicker
            style = {styles.modalDrop}
            items={sizes}
            defaultValue={props.size}
            containerStyle={{ height: 40 }}
            style={{ backgroundColor: "#fafafa" }}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            onChangeItem={(item) => {
              console.log("changing,,, hmmmmmmm")
              setSize(item.value)
              setPrice(props.price)
            }}
          />
          <Divider />

      {/*    <DropDownPicker
            items={grinds}
            defaultValue={props.initGrind}
            containerStyle={{ height: 40 }}
            style={{ backgroundColor: "#fafafa" }}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            onChangeItem={(item) => props.setGrind(item.value)} // 
          /> */}  

          <SolidButton text={"Add to Cart"} onPress={props.addToCart} />
          <SolidButton onPress={props.setVisible} text={"exit"} />
        </Modal>
      </View>
    </View>
  );
}

export default QuickView;

const styles = StyleSheet.create({
  modalContent: {

  },
  modalText: {

  },
  modalDrop: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  }


})