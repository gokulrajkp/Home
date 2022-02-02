import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Credit from "../screens/Credit";
import Favourite from "../screens/Favourite";
import Chat from "../screens/Chat";
import MyTabBar from "../component/MyTabBar";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color }) => {
            <MaterialIcon
              name="home"
              color={focused ? "#3d94a3" : "#ffffff"}
            />;
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen name="Credit" component={Credit} />
      <Tab.Screen name="Favourite" component={Favourite} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
