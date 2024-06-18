import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useStore } from "../../stateManagement/store";

import { styles } from "../../styles/notification";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function notificationScreen() {
  const router = useRouter();
  const { isLoggedIn } = useStore();

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
              No hay notificaciones
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
              notificaciones
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
              No hay notificaciones
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
              notificaciones
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
