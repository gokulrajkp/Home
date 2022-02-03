import { StyleSheet, Text, View,Image, Dimensions } from 'react-native';
import React from 'react';

export default function Replay_message({img,message}) {
    
    const { width, height } = Dimensions.get("screen");
  return (
    <View
      style={{
        marginLeft: 20,
        marginTop: 15,
        flexDirection: "row",
        maxWidth: width * 0.65,
      }}
    >
      <View>
        <Image source={img} style={styles.profile_image} />
      </View>
      <View style={{}}>
        <View style={styles.replay_message}>
          <Text style={styles.message}>{message} </Text>
        </View>
        <Text style={{ textAlign: "right", marginRight: 20, color: "gray", fontSize: 10, padding: 4 }}>13:20</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 4,
    paddingBottom: 4,
    fontSize:14.5
  },
  profile_image: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#3d94a3",
  },
  replay_message: {
    backgroundColor: "#f4f8f9",
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    marginLeft: 10,
    paddingLeft: 20,
    paddingTop: 6,
    paddingBottom: 4,
    paddingRight: 20,
  },
});
