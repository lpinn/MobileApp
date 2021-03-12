import React from "react";
import { Button, Text } from "react-native-elements";
import { StyleSheet } from "react-native";

const SolidButton = (props) => {
  return (
    <Button
      icon={props.icon}
      containerStyle={styles.button}
      title={<Text style={styles.buttonText}> {props.text} </Text>}
      onPress={props.onPress}
      containerStyle={props.style}
    />
  );
};

export default SolidButton;

const styles = StyleSheet.create({
  button: {
    //width: "50%",
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#f01d71"
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: "center"
  }
});