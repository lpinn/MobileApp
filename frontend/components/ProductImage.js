import React from "react";
import { Text, Image } from "react-native-elements";
import { ActivityIndicator } from "react-native";

export default (props) => {
  return (
    <Image
      source={(props.url)}
      style={{ width: 170, height: 170, borderWidth: 0.3, borderColor: '#2e323b', }}
      PlaceholderContent={<ActivityIndicator />}
    />
  );
};
