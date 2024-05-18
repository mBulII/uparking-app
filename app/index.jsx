import React, { useEffect } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";

import { styles } from "../styles/Welcome";
import * as NavigationBar from "expo-navigation-bar";
import { LinearGradient } from "expo-linear-gradient";

export default function welcomeScreen() {
  useEffect(() => {
    const setNavigationBarColor = async () => {
      try {
        await NavigationBar.setBackgroundColorAsync("#000000");
        await NavigationBar.setButtonStyleAsync("light");
      } catch (e) {
        console.error(e);
      }
    };
    setNavigationBarColor();
  }, []);

  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/test.jpg")}
        style={styles.image}
      />
      <LinearGradient
        colors={[
          "rgba(255,255,255,0)",
          "rgba(255,255,255,0.5)",
          "white",
          "white",
        ]}
        style={styles.gradient}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
      />
      <View style={styles.bottomContent}>
        <Image
          source={require("../assets/images/appName.png")}
          style={styles.appImage}
        />
        <Pressable style={styles.button} onPress={() => router.push("home")}>
          <Text style={styles.text}>Comenzar</Text>
        </Pressable>
      </View>
    </View>
  );
}
