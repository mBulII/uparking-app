import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { useRouter } from "expo-router";

import { styles } from "../../styles/Home";
import * as NavigationBar from "expo-navigation-bar";
import { FontAwesome, FontAwesome6, MaterialIcons } from "@expo/vector-icons";

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

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require("../../assets/images/appName.png")}
          style={styles.headerLogo}
        />
      </View>

      <View style={styles.content}></View>

      <View style={styles.navbarContainer}>
        <FontAwesome name="user-plus" size={30} color="white" />
        <MaterialIcons name="menu-book" size={30} color="white" />
        <FontAwesome6 name="chalkboard-user" size={30} color="white" />
      </View>
    </View>
  );
}
