import "react-native-gesture-handler";
import React, { useState, useEffect, useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./frontend/navigation/TabNavigator";

import Splash from "./frontend/screens/Splash";

// https://reactnavigation.org/docs/tab-based-navigation

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // load in for 2 seconds
        // TODO: load fonts/ assets
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    };
    prepare();
  }, []); // do it only once

  if (!appIsReady) {
    return <Splash />;
  }
  //TODO: https://reactnavigation.org/docs/stack-navigator  - Transitions 
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
