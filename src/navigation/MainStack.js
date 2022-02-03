import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";
import Message from "../screens/Message";
export default function MainStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabBar" component={TabNavigation} />
      <Stack.Screen name="MessageScreen" component={Message} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
