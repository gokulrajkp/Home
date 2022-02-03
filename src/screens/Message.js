import { Dimensions, StyleSheet, TextInput, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AntIcon from "react-native-vector-icons/AntDesign";
import Replay_message from "../component/Replay_message";
import SendMessage from "../component/SendMessage";

export default function Message() {
  const { width, height } = Dimensions.get("screen");
  return (
    <SafeAreaView>
      <View style={{ height: "100%" }}>
        <View style={styles.top_Bar}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcon name="arrow-left" color={"#ffffff"} size={22} style={{ paddingRight: 10, paddingLeft: 10 }} />
            <Image source={require("../assests/profile_pic.jpeg")} style={styles.toopbar_profile_img} />
            <Text style={{ color: "#ffffff", fontSize: 14, paddingLeft: 10, fontWeight: "bold" }}>Amma Watson</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <MaterialIcon name="phone-in-talk-outline" color={"#ffffff"} size={24} style={{ paddingRight: 20 }} />
            <MaterialIcon name="video" color={"#ffffff"} size={26} style={{ paddingRight: 10 }} />
          </View>
        </View>
        <View style={{ backgroundColor: "#3d94a3", height: 30 }}></View>

        <View style={[styles.body_message, { height: height - 220 }]}>
          <Replay_message img={require("../assests/profile_pic.jpeg")} message={"Hi Victor I am Jacob Jones"} />

          <SendMessage message={"Hello Jacob I Know You"} />
          <Replay_message img={require("../assests/profile_pic.jpeg")} message={"We talk about house match property"} />

          <SendMessage message={"Yeah! I hane some questions"} />
          <Replay_message img={require("../assests/profile_pic.jpeg")} message={"Sure you can ask me"} />

          <Replay_message img={require("../assests/profile_pic.jpeg")} message={"We talk about house match property"} />

          <SendMessage message={"Yeah! I have some questions"} />
        </View>
        <View style={{ position: "absolute", bottom: 0, height: 80 }}>
          <View style={{ flexDirection: "row", margin: 10, width }}>
            <AntIcon name="pluscircleo" size={40} color={"#3d94a3"} />
            <View style={styles.textinput}>
              <TextInput placeholder="Type Something" style={{}} />
              <View
                style={styles.send_button_view}
              >
                <MaterialIcon
                  style={{ transform: [{ rotate: "-30deg" }] }}
                  name="send-outline"
                  color={"#3d94a3"}
                  size={22}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  top_Bar: {
    backgroundColor: "#3d94a3",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 5,
  },
  toopbar_profile_img: {
    width: 36,
    height: 36,
    borderRadius: 18,
    paddingLeft: 4,
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  body_message: {
    backgroundColor: "#ffffff",
    marginTop: -20,
    borderRadius: 30,
    paddingBottom: 10,
  },
  profile_image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#3d94a3",
  },
  send_message: {
    alignItems: "flex-end",
    alignSelf: "flex-end",
    paddingRight: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#3d94a3",
    paddingLeft: 20,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 20,
  },
  replay_message: {
    backgroundColor: "#f4f8f9",
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    marginLeft: 10,
    paddingLeft: 20,
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 20,
  },
  textinput: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    marginRight: 20,
    borderRadius: 20,
    paddingLeft: 20,
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flex: 1,
    marginLeft: 8,
  },
  send_button_view: {
    backgroundColor: "#e5fbff",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
