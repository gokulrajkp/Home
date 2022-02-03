import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";
export default function Home() {
  const { width, height } = Dimensions.get("window");
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#3d94a3" barStyle="light-content" />
      <ScrollView>
        <ImageBackground
          imageStyle={{
            borderBottomLeftRadius: 28,
            borderBottomRightRadius: 28,
          }}
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
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrllview}>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <View style={styles.mainCard}>
              <View style={styles.match_icon_view}>
                <FeatherIcon name="home" size={22} color={"#3d94a3"} />
              </View>
              <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 16 }}>Home Match</Text>
              <Text style={{ color: "#e0e0e0" }}>Let's find homes matching your {"\n"} bought and requirements</Text>
            </View>
            <View style={styles.homeStash_card}>
              <View style={styles.piggy_bank_icon_view}>
                <FontAwesomeIcon name="piggy-bank" size={22} color={"#3d94a3"} />
              </View>
              <Text style={styles.home_stash}>Home Stash</Text>
              <Text style={{ color: "#787878", marginTop: 4 }}>Create and publish your {"\n"} fund campaign</Text>
            </View>
          </View>
        </ScrollView>
        <TouchableWithoutFeedback onPress={() => {}}>
          <Text style={{ color: "#3d94a3", marginLeft: 10 }}> See More</Text>
        </TouchableWithoutFeedback>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.course_card}>
            <Image source={require("../assests/sell_home.jpg")} style={styles.card_image} />
            <Text style={{ textAlign: "center", padding: 14 }}>First Time Home Buyers Course</Text>
          </View>
          <View style={styles.course_card}>
            <Image source={require("../assests/sell_home1.jpg")} style={styles.card_image} />
            <Text style={{ textAlign: "center", padding: 14 }}>First Time Home Buyers Course</Text>
          </View>
        </ScrollView>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 18,
            fontWeight: "bold",
            color: "#7b7b7b",
          }}
        >
          Upcoming Webinars
        </Text>
        <View
          style={styles.upcoming_card}
        >
          <Image
            source={require("../assests/home.jpg")}
            style={styles.livedemo}
          />
          <View style={{ marginLeft: 15, marginRight: 15 }}>
            <Text style={{ color: "#3d94a3", fontSize: 16, fontWeight: "bold" }}>Live Demo: Home Buying Sources</Text>
            <Text style={styles.webinar_text}>Join us any day for a live demo of Home{"\n"}Buying Source</Text>
            <Text style={[styles.webinar_text, { marginTop: 4 }]}>Time:11:00 AM PT | 2:00 PM ET</Text>
            <Text style={styles.webinar_text}>Duration: 30 minutes plus live Q&A</Text>
            <View style={styles.refister_view}>
              <TouchableOpacity onPress={() => {}} style={{ justifyContent: "center", marginBottom: 10 }}>
                <Text style={[styles.register_btn]}>Register Now</Text>
              </TouchableOpacity>
              <View style={styles.icon_view}>
                <MaterialCommIcon name="bell-ring-outline" size={22} color={"#3d94a3"} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
  mainCard: {
    backgroundColor: "#3d94a3",
    borderRadius: 10,
    alignSelf: "flex-start",
    padding: 15,
    marginLeft: 20,
    marginRight: 10,
  },
  scrllview: {
    marginBottom: 18,
    paddingBottom: 8,
  },
  match_icon_view: {
    backgroundColor: "#ffffff",
    alignSelf: "flex-start",
    padding: 4,
    borderRadius: 6,
    marginLeft: 10,
  },
  homeStash_card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 15,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  piggy_bank_icon_view: {
    backgroundColor: "#f2f2f2",
    alignSelf: "flex-start",
    padding: 4,
    borderRadius: 6,
  },
  home_stash: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },
  card_image: {
    width: "100%",
    height: 180,
    borderRadius: 20,
  },
  course_card: {
    width: 280,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    margin: 10,
  },
  webinar_text: {
    color: "#9d9d9d",
  },
  register_btn: {
    backgroundColor: "#3d94a3",
    color: "#ffffff",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 25,
  },
  upcoming_card: {
    margin: 10,
    backgroundColor: "#ffffff",
    paddingBottom: 10,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  livedemo: {
    width: "100%",
    height: 150,
    borderRadius: 18,
    marginBottom: 10,
  },
  refister_view: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon_view: {
    backgroundColor: "#ffffff",
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
