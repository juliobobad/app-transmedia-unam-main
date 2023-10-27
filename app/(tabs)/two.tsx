import React, { useEffect } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { View, Button } from "react-native";
import { Text } from "../../components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

export default function TabTwoScreen() {

  return (
    <LinearGradient
      style={styles.container}
      colors={["#2d2a71", "#006fa4"]}
    >
    <StatusBar backgroundColor="white" />
  

      <FontAwesome
        name="play-circle"
        size={50}
        color={"green"}
        style={{ margin: 15, opacity: 1 }}
        onPress={() => console.log("joooa")}
      />
      <FontAwesome
        name="pause-circle"
        size={50}
        color={"green"}
        style={{ margin: 15, opacity: 1 }}
      />
    </LinearGradient>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row'
  },
  stationName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: 'white'
  },
});
