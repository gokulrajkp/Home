import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import MaterailIcon from "react-native-vector-icons/MaterialCommunityIcons";
export default function MyTabBar({ state, descriptors, navigation }) {
  console.log(descriptors);
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#3d94a3",
        height: 60,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        marginBottom:8,
        marginLeft:10,
        marginRight:10
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center" }}
          >
            {isFocused ? (
              <View style={{ backgroundColor: "#ffffff", padding: 10, borderRadius: 20 }}>
                <Text style={{ color: "#3d94a3" }}>{label}</Text>
              </View>
            ) : (
              <Text style={{ color: "#ffffff" }}>{label}</Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({});
