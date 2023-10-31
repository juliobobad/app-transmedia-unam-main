import { StyleSheet, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import ImageSlider from "../../components/ImagesSlider";
import { imagesTabOne } from "../../constants/Images";
import { Image, ScrollView } from "@gluestack-ui/themed";
import LogoApp from "../../assets/images/logo_fm_unam.png";
import {} from "react-native-gesture-handler";
import { View } from "../../components/Themed";
import { BlurView } from "expo-blur";

export default function TabOneScreen() {
  return (
      <LinearGradient style={styles.container} colors={["#2d2a71", "#006fa4"]}>
        <Image alt="Logo App" style={styles.logo} source={LogoApp} />
        <Text style={styles.title}>Programacion Semanal</Text>
        <ImageSlider images={imagesTabOne}></ImageSlider>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 12,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 26,
    color: "white",
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 20,
    alignSelf: "center",
  },
  logo: {
    height: 285,
    width: 300,
    marginBottom: 60,
    marginTop: 80,
  },
});
