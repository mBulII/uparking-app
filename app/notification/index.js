import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { parseISO, isToday, format } from "date-fns";
import { es } from "date-fns/locale";
import { useRouter } from "expo-router";
import { useStore } from "../../stateManagement/store";
import { fetchNotificationUser } from "../../constants/api";

import { styles } from "../../styles/notification";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

export default function notificationScreen() {
  const router = useRouter();
  const { isLoggedIn, user } = useStore();
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const notificationData = await fetchNotificationUser(user.access);
        setNotifications(
          notificationData.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          )
        );
      } catch (error) {
        console.error("Couldn't fetch the notifications data", error);
      }
    };
    if (isLoggedIn) {
      fetchNotifications();
    }
  }, []);

  const todayNotifications = [];
  const previousNotifications = [];
  notifications.forEach((notification) => {
    const notificationDate = parseISO(notification.created_at);
    if (isToday(notificationDate)) {
      todayNotifications.push(notification);
    } else {
      previousNotifications.push(notification);
    }
  });

  const getIconByMessage = (message) => {
    switch (message) {
      case "Puerta abierta":
        return (
          <MaterialCommunityIcons
            name="car-door"
            style={styles.notificationIcon}
          />
        );
      case "Auto chocado":
        return (
          <FontAwesome5 name="car-crash" style={styles.notificationIcon} />
        );
      case "Mal estacionado":
        return <FontAwesome5 name="parking" style={styles.notificationIcon} />;
      case "Extravió de pertenencia":
        return (
          <FontAwesome5 name="user-secret" style={styles.notificationIcon} />
        );
      case "Usuario Problemático":
        return (
          <FontAwesome5 name="user-slash" style={styles.notificationIcon} />
        );
      default:
        return (
          <MaterialCommunityIcons
            name="message-alert"
            style={styles.notificationIcon}
          />
        );
    }
  };

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
          {todayNotifications.length > 0 ? (
            todayNotifications.map((notification) => (
              <View key={notification.id} style={styles.notificationBox}>
                <Text style={styles.notificationDate}>
                  {format(parseISO(notification.created_at), "dd MMMM yyyy", {
                    locale: es,
                  })}
                </Text>
                <Text style={styles.notificationTitle}>
                  Mensaje de vigilante
                </Text>
                {getIconByMessage(notification.mensaje)}
                <Text style={styles.notificationMessage}>
                  {notification.mensaje}
                </Text>
              </View>
            ))
          ) : (
            <View style={styles.noNotificationBox}>
              <Ionicons
                name="notifications-off"
                style={styles.noNotificationIcon}
              />
              <Text style={styles.notificationMessage}>
                No hay notificaciones
              </Text>
            </View>
          )}

          <Text style={styles.title}>Anteriores</Text>
          {previousNotifications.length > 0 ? (
            previousNotifications.map((notification) => (
              <View key={notification.id} style={styles.notificationBox}>
                <Text style={styles.notificationDate}>
                  {format(parseISO(notification.created_at), "dd MMMM yyyy", {
                    locale: es,
                  })}
                </Text>
                <Text style={styles.notificationTitle}>
                  Mensaje de vigilante
                </Text>
                {getIconByMessage(notification.mensaje)}
                <Text style={styles.notificationMessage}>
                  {notification.mensaje}
                </Text>
              </View>
            ))
          ) : (
            <View style={styles.noNotificationBox}>
              <Ionicons
                name="notifications-off"
                style={styles.noNotificationIcon}
              />
              <Text style={styles.notificationMessage}>
                No hay notificaciones
              </Text>
            </View>
          )}
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
