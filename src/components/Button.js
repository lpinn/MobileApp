import React from "react";
import { Button, Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";

import { Icon } from "react-native-elements";

/* 
Component for the buttons in our app. We could have multiple kinds of buttons or just one
Still need to style it further
 */

const SolidButton = (props) => {
  //console.log(props.style)
  return (
    <View>
    <Button
      icon={props.icon}
      containerStyle={styles.button}
      title={<Text style={styles.buttonText}> {props.text} </Text>}
      onPress={props.onPress}
      
     // containerStyle={props.style}
    />
    </View>
  );
};

const CartButton = ({ onPress }) => {
  return (
    <Button
      icon={<Icon name="cart" type="evilicon" size={30} />}
      onPress={onPress}
      color="red"
      title="Cart"
    />
  );
};

export { SolidButton, CartButton };

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: "powderblue",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});
