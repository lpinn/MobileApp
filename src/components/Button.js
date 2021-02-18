import React from "react";
import { Button } from "react-native-elements";
 
const SolidButton = (props) => {
  return (
    <Button
      title={props.text}
      onPress={props.onPress}
    />
  );
};

export default SolidButton;
