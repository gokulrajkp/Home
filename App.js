import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import Chat from "./src/screens/Chat";

import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./src/navigation/TabNavigation";
import MainStack from "./src/navigation/MainStack";

export default function App() {
  return (
    // <Chat />
    <NavigationContainer >
      <MainStack  />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
