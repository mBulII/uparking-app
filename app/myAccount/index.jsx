import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useRouter } from "expo-router";
import { checkStatus } from "../../hooks/checkStatus";
import { userData } from "../../hooks/userData";
import { logoutUser } from "../../constants/api";

import { styles } from "../../styles/myAccount";
import * as NavigationBar from "expo-navigation-bar";
import { FontAwesome } from "@expo/vector-icons";

export default function myAccount() {
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

  const [isFocused, setIsFocused] = useState(false);
  const handleOutside = () => {
    setIsFocused(false);
    Keyboard.dismiss();
  };
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      router.push("home");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutside}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.push("home")}>
          <FontAwesome name="home" style={styles.headerIcon} />
        </TouchableOpacity>
        <Image
          source={require("../../assets/images/appName.png")}
          style={styles.headerLogo}
        />
        {isLoggedIn ? (
          <View style={styles.contentContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title1}>Bienvenido</Text>
              <Text style={styles.title2}> {user.user.pk}</Text>
            </View>
            <Text style={styles.subHeading}>Has enviado # comentarios</Text>

            <Text style={styles.labelText}>Patente de vehiculo</Text>
            <TextInput
              style={styles.input}
              placeholder="Escribe tu patente"
              placeholderTextColor="#CCCCCC"
              onFocus={handleFocus}
            />
            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Guardar</Text>
            </TouchableOpacity>

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
    </TouchableWithoutFeedback>
  );
}
