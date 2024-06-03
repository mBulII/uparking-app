import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { checkStatus } from "../../hooks/checkStatus";
import { userData } from "../../hooks/userData";

import { styles } from "../../styles/notification";
import * as NavigationBar from "expo-navigation-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function notificationScreen() {
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

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/appName.png")}
        style={styles.headerLogo}
      />
      {isLoggedIn ? (
        <ScrollView
          style={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Hoy</Text>
          <View style={styles.notificationBox}>
            <Text style={styles.notificationDate}>23 de abril 2020</Text>
            <MaterialCommunityIcons
              name="message-alert"
              style={styles.notificationIcon}
            />
            <Text style={styles.notificationMessage}>
              No hay notificaciones perrete
            </Text>
          </View>

          <Text style={styles.title}>Anteriores</Text>
          <View style={styles.notificationBox}>
            <Text style={styles.notificationDate}>23 de abril 2020</Text>
            <Text style={styles.notificationTitle}>Mensaje de vigilante</Text>
            <MaterialCommunityIcons
              name="message-alert"
              style={styles.notificationIcon}
            />
            <Text style={styles.notificationMessage}>
              hola comon estas aver como se lorea este mensaje ahahahha
              notificaciones perrete
            </Text>
          </View>

          <View style={styles.notificationBox}>
            <Text style={styles.notificationDate}>23 de abril 2020</Text>
            <Text style={styles.notificationTitle}>Mensaje de vigilante</Text>
            <MaterialCommunityIcons
              name="message-alert"
              style={styles.notificationIcon}
            />
            <Text style={styles.notificationMessage}>
              No hay notificaciones perrete
            </Text>
          </View>

          <View style={styles.notificationBox}>
            <Text style={styles.notificationDate}>23 de abril 2020</Text>
            <Text style={styles.notificationTitle}>Mensaje de vigilante</Text>
            <MaterialCommunityIcons
              name="message-alert"
              style={styles.notificationIcon}
            />
            <Text style={styles.notificationMessage}>
              hola comon estas aver como se lorea este mensaje ahahahha
              notificaciones perrete
            </Text>
          </View>
        </ScrollView>
      ) : null}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("home")}
        >
          <Text style={styles.buttonText}>Volver al inicio</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
