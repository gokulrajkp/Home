import { SafeAreaView, StyleSheet, Image, Text, View, FlatList, TouchableOpacity } from "react-native";
import React from "react";

export default function Chat({ navigation }) {
  const data = [
    {
      id: 1,
      profile_image: require("../assests/profile_pic.jpeg"),
      name: "Amma Watson",
      message: "Hi Victor! I am Jacob Jones",
    },
    { id: 2, profile_image: require("../assests/profile_pic.jpeg"), name: "Ajin", message: "haiiii" },
    { id: 3, profile_image: require("../assests/profile_pic.jpeg"), name: "Ajin", message: "haiiii" },
  ];
  const renderItem = (item) => {
    console.log(item);
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("MessageScreen")}
        style={{ paddingTop: 10, paddingBottom: 10 }}
      >
        <View style={styles.main_body}>
          <Image source={item.item.profile_image} style={{ width: 60, height: 60, borderRadius: 30 }} />

          <View>
            <Text style={{ fontWeight: "bold", fontSize: 16, marginLeft: 10 }}>{item.item.name}</Text>
            <Text style={{ color: "gray", marginLeft: 10 }}>{item.item.message}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <View>
        <FlatList data={data} keyExtractor={(item) => item.id} renderItem={(item) => renderItem(item)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main_body: {
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
