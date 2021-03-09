import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  Button,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
//import { NavigationContainer } from 'node_modules/@react-navigation/native';
//import { createStackNavigator } from 'node_modules/@react-navigation/stack';

function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconStackRow}>
        <View style={styles.iconStack}>
          <Icon name="menu" style={styles.icon}></Icon>
          <ImageBackground
            source={require("./src/assets/images/coffee_bck.jpg")}
            resizeMode="contain"
            style={styles.image}
            imageStyle={styles.image_imageStyle}
          >
            <Image
              source={require("./src/assets/images/Logo_Copy.png")}
              resizeMode="contain"
              style={styles.image4}
            ></Image>
          </ImageBackground>
          <Text style={styles.loremIpsum}>More than Just Coffee</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Products")}
            style={styles.button}
          >
            <Text style={styles.orderNow1}>Order Now</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  icon: {
    top: 212,
    left: 398,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  image: {
    top: 0,
    left: 0,
    width: 583,
    height: 1096,
    position: "absolute",
	backgroundColor: 'rgb(102, 99, 92)' 
  },
  image_imageStyle: {
    opacity: 0.7
  },
  image4: {
    width: 200,
    height: 200,
    marginTop: '40%',
    marginLeft: '28.5%'
  },
  loremIpsum: {
    top: '40%',
    left: '24%',
    position: "absolute",
    fontFamily: "sans-serif-light",
    color: "rgba(255,255,255,1)",
    height: 46,
    width: 274,
    fontSize: 26
  },
  button: {
    top: '53%',
    width: 185,
    height: 63,
    position: "absolute",
    backgroundColor: "rgba(237,167,47,1)",
    left: 172
  },
  orderNow1: {
    fontFamily: "sans-serif-light",
    color: "rgba(45, 47, 51,1)",
    height: 42,
    width: 130,
    fontSize: 23,
    marginTop: '9%',
    marginLeft: '19%'
  },
  iconStack: {
    width: 583,
    height: 1096
  },

  iconStackRow: {
    height: 1096,
    flexDirection: "row",
    flex: 1,
    marginRight: -343,
    marginLeft: -77,
    marginTop: -151
  }
});

export default Home;