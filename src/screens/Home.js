import { Dimensions, ImageBackground, Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
export default function Home() {
  const {width,height}=Dimensions.get("window")
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          imageStyle={{ borderBottomLeftRadius: 28, borderBottomRightRadius: 28 }}
          source={require("../assests/home2.jpg")}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.overlay}>
            <View style={styles.top_nav}>
              <MaterialIcon name="menu" color={"#cfe0e5"} size={22} style={{ paddingTop: 20, paddingLeft: 10 }} />
              <View style={styles.right_side_notification}>
                <Text style={{ color: "#cfe0e5", fontWeight: "bold", fontSize: 16 }}>Sell your home</Text>
                <MaterialCommIcon name="bell" size={22} color={"#abc6ce"} style={{ paddingLeft: 10 }} />
              </View>
            </View>
            <View style={{ flex: 1, justifyContent: "center", paddingLeft: 30 }}>
              <Text style={{ color: "#fcfdfe", fontWeight: "bold", fontSize: 24 }}>HOME</Text>
              <Text style={{ color: "#aecbd3", fontSize: 18 }}>By Champion Lender</Text>
            </View>
          </View>
        </ImageBackground>
        <Text style={styles.subheading}>Get started with</Text>
        <View  style={{flexDirection:'row'}}>
          <View style={styles.mainCard}>
            <View style={{ backgroundColor: "#ffffff", alignSelf: "flex-start", padding: 4, borderRadius: 6 }}>
              <FeatherIcon name="home" size={22} color={"#3d94a3"} />
            </View>
            <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 16 }}>Home Match</Text>
            <Text style={{ color: "#e0e0e0" }}>Let's find homes matching your {"\n"} bought and requirements</Text>
          </View>
          <View style={{ backgroundColor: "#ffffff", borderRadius: 8 }}>
            <View style={{ backgroundColor: "#ffffff", alignSelf: "flex-start", padding: 4, borderRadius: 6 }}>
              <FeatherIcon name="home" size={22} color={"#3d94a3"} />
            </View>
            <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 16 }}>Home Match</Text>
            <Text style={{ color: "#e0e0e0" }}>Let's find homes matching your {"\n"} bought and requirements</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  overlay: {
    backgroundColor: "rgba(61, 148, 163,0.7)",
    flex: 1,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  right_side_notification: {
    flexDirection: "row",
    paddingTop: 20,
    paddingRight: 10,
  },
  top_nav: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subheading: {
    margin: 10,
    fontWeight: "bold",
    fontSize: 18,
    color: "#5f5f5f",
  },
  mainCard:{
    backgroundColor:"#3d94a3",
    borderRadius:10,
   alignSelf:'flex-start',
   padding:15
  }
});
