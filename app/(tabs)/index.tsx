import { StyleSheet, Image, SafeAreaView,Text } from "react-native";
import { View } from "../../components/Themed";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import ImageSlider from "../../components/ImagesSlider";
import logo from "../../assets/images/logo_987.png";

export default function TabOneScreen() {

  const images = [
    'https://fiesa.ar/images/app/teatro.jpg',
    'https://fiesa.ar/images/app/testimonios.jpg',
    'https://fiesa.ar/images/app/toco-madera.jpg',
    'https://fiesa.ar/images/app/todos-los-temas.jpg',
    'https://fiesa.ar/images/app/tradicion-sonora.jpg',
    'https://fiesa.ar/images/app/tropicaneando.jpg',
    'https://fiesa.ar/images/app/unam-en-concierto.jpg',
    'https://fiesa.ar/images/app/uno-a-uno.jpg',
    'https://fiesa.ar/images/app/vamos-a-portarnos-mal.jpg',
    'https://fiesa.ar/images/app/ventana-a-la-opera.jpg',
    'https://fiesa.ar/images/app/zabzukeando.jpg'
  ]


  return (

    <LinearGradient
      style={styles.container}
      colors={["#2d2a71", "#006fa4"]}
    >
    <StatusBar backgroundColor="white" />
    <View>
      <Image 
        source={logo}
        style={styles.logo}
      />
    </View>
    <View>
      <Text style={styles.title}>
        Programacion Semanal
      </Text>
    </View>
    <ImageSlider 
      images={images}>  
    </ImageSlider>

    </LinearGradient>  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  title: {
    fontSize: 26,
    color: "black",
    fontWeight: 'bold',
    backgroundColor: "white",
    padding: 25,
    alignItems: "center",
  },
  logo:{
    flex: 1,
    height: 200,
    width: 200,
    backgroundColor: "transparent",
    borderRadius: 100,
  },
});

