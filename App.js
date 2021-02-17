import "react-native-gesture-handler";


import * as React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from "./src/screens/Home";


const Stack = createStackNavigator(); // https://reactnavigation.org/docs/hello-react-navigation

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

// https://reactnavigation.org/docs/navigating/ READ
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName = "Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Purchase" component = {DetailsScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
