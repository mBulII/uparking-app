import React, { useEffect } from "react";
import { View, Text } from "react-native";
import * as NavigationBar from "expo-navigation-bar";

import { styles } from "../styles/Welcome";

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
      <Text>WelcomeScreen</Text>
    </View>
  );
}
