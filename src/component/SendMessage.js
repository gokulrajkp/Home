import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function SendMessage({message}) {
    const {width,height}= Dimensions.get("screen")
  return (
    <View style={{ alignSelf: "flex-end", marginTop: 10, maxWidth: width *0.8,}}>
      <View style={styles.send_message}>
        <Text style={styles.message}>{message}</Text>
      </View>
      <Text style={{ textAlign: "left", marginLeft: 20, color: "gray", fontSize: 10, padding: 4 }}>13:20</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    message:{
 textAlign: "right", 
 color: "#ffffff",
 paddingLeft:6,
 paddingRight:6,
 paddingTop:4,
 paddingBottom:4,
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
});
