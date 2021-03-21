import React, { useEffect, useState } from "react";
import { Text, Image, Divider } from "react-native-elements";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import DropDownPicker from "react-native-dropdown-picker";

import { SolidButton } from "./Button";
import ProductModel from "../constants/ProductModel";

import coffee from "../constants/coffee";
const grinds = coffee.grinds;
const sizes = coffee.sizes;

/* 

 A quick view for each product when clicked on
 We use the react native modal package, examples here
 https://github.com/react-native-modal/react-native-modal/tree/master/example/src
 */

function QuickView(props) {
  const name = props.name;
  
  const [isAdded, setAdded] = useState(false);
  const [size, setSize] = useState(12);
  const [grind, setGrind] = useState("WHOLE");
  const [price, setPrice] = useState(12.75);

  const [isDDVisible, setDDVisible] = useState({
    sizeVisible: false,
    grindVisible: false,
  });

  const changeVisibility = (state) => {
    setDDVisible({
      sizeVisible: false,
      grindVisible: false,
      ...state, // over write it
    });
  };

  useEffect(() => {
    let temp;
    if (size == 12) temp = 12.75;
    else if (size == 16) temp = 15.75;
    else if (size == 80) temp = 70.0;
    setPrice(temp);
  }, [size, setSize]);

  useEffect(() => {
    setAdded(false); // when size or grind changes, signal addability
  }, [size, grind]);

  const addToCart = async (event) => {
    event.preventDefault();
    setAdded(true);
    props.addProduct(new ProductModel(name, size, grind, price));
    setTimeout(() => setAdded(false), 5000); // arbitrary number for now
  };

  return (
    // the issue is with the Modal element.. where it goes away and is slow to repop up
    // something with mutating the products state makes it close away. but doesnt for add to cart which mutates catalog
    //https://www.npmjs.com/package/react-native-dropdown-picker#available-item-properties
    <View style={{ flex: 1 }}>
      <View>
        <Modal
          style={{ margin: 5 }}
          isVisible={props.isVisible}
          backdropColor="#B4B3DB"
          backdropOpacity={0.9}
          animationIn="zoomInUp"
          animationOut="fadeOutDownBig"
          onBackdropPress={props.setVisible}
          onSwipeComplete={props.setVisible}
          swipeDirection="left" /* can exit by swiping to the left */
        >
          <Image
            source={props.image}
            style={{ width: 200, height: 200 }}
            PlaceholderContent={<ActivityIndicator />}
          />
          <Text h3>
            {name} {size} oz ${price}
          </Text>

          <DropDownPicker
            style={{ paddingVertical: 10 }}
            containerStyle={{ width: 150, height: 70 }}
            labelStyle={{
              fontSize: 14,
              textAlign: "left",
              color: "red",
            }}
            selectedLabelStyle={{
              fontWeight: "bold",
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
            }}
            isVisible={isDDVisible.sizeVisible}
            onOpen={() => changeVisibility({ sizeVisible: true })}
            onClose={() => changeVisibility({ sizeVisible: false })}
          />
          <Divider/>

          <DropDownPicker
            items={grinds}
            defaultValue={grind}
            containerStyle={{ height: 40 }}
            style={{ backgroundColor: "#fafafa" }}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            selectedLabelStyle={{
              fontWeight: "bold",
              color: "#39739d",
            }}
            onChangeItem={(item) => setGrind(item.value)} //
            isVisible={isDDVisible.grindVisible}
            onOpen={() => changeVisibility({ grindVisible: true })}
            onClose={() => changeVisibility({ grindVisible: true })}
          />

          <SolidButton
            text={isAdded ? "ADDED" : "ADD TO CART"}
            onPress={addToCart}
          />
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
