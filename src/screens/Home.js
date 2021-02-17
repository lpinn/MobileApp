import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"; // switch over to elements
import beans from "../../assets/beans.jpg";
import { ThemeProvider } from "react-native-elements";

import Button from "../components/Button";

const theme = {
  Avatar: {
    rounded: true,
  },
  Badge: {
    textStyle: { fontSize: 30 },
  },
};
const HomeScreen = () => {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Image source={beans} style={styles.logo} />
        <Text style={styles.header}>Building New Hope</Text>
        <TouchableOpacity />
        <StatusBar style="auto" />
        <Button text="Catalog" onClick={() => console.log("hi")} />
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
    color: "#fff",
  },
  logo: {
    width: 256,
    height: 256,
    marginBottom: 20,
  },
});

export default HomeScreen;
