import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useStore } from "../../stateManagement/store";

import { styles } from "../../styles/notificationGuard";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function notificationGuardScreen() {
  const router = useRouter();
  const { isLoggedIn } = useStore();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/appName.png")}
        style={styles.headerLogo}
      />

      {isLoggedIn ? (
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Notificaciones</Text>

          <TouchableOpacity
            style={styles.notificationBox}
            onPress={() => router.push("addReport")}
          >
            <MaterialCommunityIcons
              name="message-plus"
              style={styles.notificationIcon}
            />
            <Text style={styles.notificationText}>
              Añadir reporte al usuario
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.notificationBox}
            onPress={() => router.push("reportHistory")}
          >
            <MaterialCommunityIcons
              name="message-bulleted"
              style={styles.notificationIcon}
            />
            <Text style={styles.notificationText}>
              Revisar avisos realizados
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("home")}
          >
            <Text style={styles.buttonText}>Volver al inicio</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}
