import React from "react";
import { Button } from "react-native-elements";
import { StyleSheet } from "react-native";
const SolidButton = (props) => {
  return (
    <Button
      icon={props.icon}
      containerStyle={styles.button}
      title={props.text}
      onPress={props.onPress}
    />
  );
};

export default SolidButton;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    //color: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
