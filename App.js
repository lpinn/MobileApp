import "react-native-gesture-handler";
import * as React from "react";
import Native from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./src/screens/Home";
import Catalog from "./src/screens/Catalog";
import Cart from "./src/screens/Cart";


const defaultOptionsForStack = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#FF543C",
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTintColor: "#FFFFFF",
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#FFFFFF",
      fontSize: 18,
    },
  },
};


const Stack = createStackNavigator(); // https://reactnavigation.org/docs/hello-react-navigation

// https://reactnavigation.org/docs/navigating/ READ
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Catalog" component={Catalog} />
          <Stack.Screen name="Items in Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
