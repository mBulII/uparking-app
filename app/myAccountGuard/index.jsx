import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { checkStatus } from "../../hooks/checkStatus";
import { userData } from "../../hooks/userData";
import { logoutUser } from "../../constants/api";

import { styles } from "../../styles/myAccountGuard";
import * as NavigationBar from "expo-navigation-bar";
import { FontAwesome6 } from "@expo/vector-icons";

export default function myAccountGuardScreen() {
  const isLoggedIn = checkStatus();
  const user = userData();
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

  const handleLogout = async () => {
    try {
      await logoutUser();
      router.push("home");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/appName.png")}
        style={styles.headerLogo}
      />

      {isLoggedIn ? (
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title1}>Bienvenido</Text>
            <Text style={styles.title2}> {user.user.p_nombre}</Text>
          </View>

          <View style={styles.textIconContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.text1}>Tienes el rol de </Text>
              <Text style={styles.text2}>Vigilante</Text>
            </View>
            <FontAwesome6 name="user-shield" style={styles.guardIcon} />
          </View>

          <TouchableOpacity
            style={styles.button1}
            onPress={() => router.push("home")}
          >
            <Text style={styles.button1Text}>Volver al inicio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={handleLogout}>
            <Text style={styles.button2Text}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}
