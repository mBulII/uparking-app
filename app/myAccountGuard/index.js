import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useStore } from "../../stateManagement/store";
import { logoutUser } from "../../constants/api";

import { styles } from "../../styles/myAccountGuard";
import { FontAwesome6 } from "@expo/vector-icons";

export default function myAccountGuardScreen() {
  const router = useRouter();
  const { user, isLoggedIn, logout } = useStore();
  const handleLogout = async () => {
    try {
      await logoutUser(logout, user.refresh);
      router.push("home");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/appName-white.png")}
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
