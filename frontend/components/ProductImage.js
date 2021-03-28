import React from "react";
import { Text, Image } from "react-native-elements";
import { ActivityIndicator } from "react-native";

export default (props) => {
  return (
    <Image
      source={(props.image)} // require does not have dynamic urls
      style={{ width: 200, height: 200 }}
      PlaceholderContent={<ActivityIndicator />}
    />
  );
};
