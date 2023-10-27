import { View } from "../../components/Themed";
import * as React from "react";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import WebView from "react-native-webview";
import { StatusBar } from "expo-status-bar";

export default function TabThreeScreen(this: any) {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#2d2a71", "#006fa4"]}
    >
    <StatusBar backgroundColor="white" />
  

    </LinearGradient>  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
