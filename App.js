import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import beans from "./assets/beans.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={beans} style={styles.logo} />
      <Text style={styles.header}>Building New Hope</Text>
      <TouchableOpacity />
      <StatusBar style="auto" />
    </View>
  );
}

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
