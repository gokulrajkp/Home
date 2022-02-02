import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Chat() {
  const { width, height } = Dimensions.get("screen");
  return (
    <SafeAreaView>
      <View style={{}}>
        <View
          style={{
            backgroundColor: "#3d94a3",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcon name="arrow-left" color={"#ffffff"} size={22} />
            <Image
              source={require("../assests/profile_pic.jpeg")}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <MaterialIcon
              name="phone-in-talk-outline"
              color={"#ffffff"}
              size={22}
            />
            <MaterialIcon name="video" color={"#ffffff"} size={22} />
          </View>
        </View>
        <View style={{ backgroundColor: "#3d94a3", height: 30 }}></View>
        <View
          style={{
            backgroundColor: "#ffffff",
            marginTop: -20,
            borderRadius: 20,
            height: 200,
          }}
        >
          <View
            style={{
              marginLeft: 20,
              marginTop: 10,
              flexDirection: "row",
              backgroundColor: "green",
            }}
          >
            <View>
              <Image
                source={require("../assests/profile_pic.jpeg")}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  borderWidth: 2,
                  borderColor: "#3d94a3",
                }}
              />
            </View>
            <View
              style={{
                backgroundColor: "red",
                borderTopEndRadius: 20,
                borderBottomEndRadius: 20,
                borderBottomStartRadius: 20,
                marginLeft: 10,
                paddingLeft: 20,
                paddingTop: 4,
                paddingBottom: 4,
                marginRight: 30,
                paddingRight: 20,

                flexGrow: 1,
              }}
            >
              <Text style={{}}>
                Hi Victor I am Jacob Jonesddddddddddddd
                dddddddddddddddddddddddddddddddddddddddssssssssssssssssssssssssssssssssssssssssssssssssssssdddddd
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
