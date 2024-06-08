import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import { styles } from "../../styles/signInRegister";
import * as NavigationBar from "expo-navigation-bar";
import { FontAwesome } from "@expo/vector-icons";

export default function loginScreen() {
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
    <View style={styles.container} showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => router.push("home")}>
        <FontAwesome name="home" style={styles.headerIcon} />
      </TouchableOpacity>
      <Image
        source={require("../../assets/images/appName.png")}
        style={styles.headerLogo}
      />

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>BIENVENIDO</Text>
        <Text style={styles.formSubHeading}>
          Puedes Iniciar Sesión o Registrarte
        </Text>

        <TouchableOpacity
          style={styles.button1}
          onPress={() => router.push("login")}
        >
          <Text style={styles.button1Text}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => router.push("signUp")}
        >
          <Text style={styles.button2Text}>Crear Cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
