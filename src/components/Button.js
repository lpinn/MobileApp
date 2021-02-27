import React from "react";
import { Button } from "react-native-elements";
import { StyleSheet } from "react-native";
const SolidButton = (props) => {
  return (
    <Button
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
    alignItems: "center",
    justifyContent: "center",
  },
});
