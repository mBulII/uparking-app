import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import { styles } from "../../styles/home";
import * as NavigationBar from "expo-navigation-bar";
import { FontAwesome, FontAwesome6, MaterialIcons } from "@expo/vector-icons";

export default function welcomeScreen() {
  const router = useRouter();
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
        <TouchableOpacity onPress={() => router.push("signUp")}>
          <FontAwesome name="user-plus" style={styles.navbarIcon} />
        </TouchableOpacity>
        <MaterialIcons name="menu-book" style={styles.navbarIcon} />
        <TouchableOpacity onPress={() => router.push("comments")}>
          <FontAwesome6 name="chalkboard-user" style={styles.navbarIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
