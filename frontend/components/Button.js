import React from "react";
import { Button, Text } from "react-native-elements";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Icon } from "react-native-elements";

import theme from "../constants/theme";
/* 
Component for the buttons in our app. We could have multiple kinds of buttons or just one
Still need to style it further
 */

// https://reactnativeelements.com/docs/button/#props
const SolidButton = (props) => {
  return (
    <View>
      <Button
        size={30}
        icon={props.icon}
        buttonStyle={styles.button}
        title={<Text style={styles.buttonText}> {props.text} </Text>}
        onPress={props.onPress}
      />
    </View>
  );
};

const CartButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.cart} onPress={onPress}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image1}
        source={require("../../assets/images/shopping-cart.png")}
      ></ImageBackground>
    </TouchableOpacity>
  );
};

const CheckOutButton = (props) => {
  // TODO
  return (
    <Button
      icon={<Icon name="ei-credit-card" type="evilicon" size={30} />}
      onPress={props.onPress}
      color="green"
      title="Check Out"
    />
  );
};

export { SolidButton, CartButton, CheckOutButton };

const styles = StyleSheet.create({
  button: {
    height: 40,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 2,
    backgroundColor: theme.colors.button,
  },

  /*buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },*/

  image1: {
    flex: 1,
  },

  cart: {
    width: 40,
    height: 40,
  },
});
