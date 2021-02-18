import { Text } from "react-native-elements";
import * as Linking from "expo-linking";

import React from "react";

export default function Anchor(props) {
  const handlePress = () => {
    Linking.openURL(props.href);
    props.onPress && props.onPress();
  };
  const styles = props.styles;
  return (
    <Text h3 {...props} onPress={handlePress}>
      {props.children}
    </Text>
  );
}




