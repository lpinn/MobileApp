import "react-native-gesture-handler";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./src/screens/Home";
import Catalog from "./src/screens/Catalog";

const Stack = createStackNavigator(); // https://reactnavigation.org/docs/hello-react-navigation

// https://reactnavigation.org/docs/navigating/ READ
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Catalog" component={Catalog} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
