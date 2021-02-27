import { StatusBar } from "expo-status-bar";

import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native"; // switch over to elements
import beans from "../../assets/beans.jpg";
import { ThemeProvider, Text, Image, Icon } from "react-native-elements";

import Button from "../components/Button";
import Anchor from "../components/Anchor";

// TODO Social icons

const theme = {
  // change this later
  Avatar: {
    rounded: true,
  },
  Badge: {
    textStyle: { fontSize: 30 },
  },
};

const HomeScreen = (props) => {
  const navigation = props.navigation; //https://reactnavigation.org/docs/1.x/navigation-prop
  const options = {
    headerTitle: "Building New Hope",
    headerRight: () => (
      <Button
        icon={<Icon name="cart" type="evilicon" size={30} />}
        onPress={() => navigation.navigate("Items in Cart")} // chicken and the egg prob
        color="red"
        title=""
      />
    ),
  };
  React.useLayoutEffect(() => {
    navigation.setOptions(options);
  }, [navigation]);
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Image source={beans} style={styles.logo} />
        <Text h1 style={styles.header}>
          Building New Hope
        </Text>
        <TouchableOpacity />
        <StatusBar style="auto" />
        <Anchor href="https://www.buildingnewhope.org/about">About Us</Anchor>
        <Button
          text="Go to Catalog"
          onPress={() => navigation.navigate("Catalog")}
        />
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 25,
    padding: 20,
    color: "red",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    // flex: 1,
    justifyContent: "space-between",
  },
});

export default HomeScreen;
