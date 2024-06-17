import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useStore } from "../../stateManagement/store";
import {
  fetchNotificationVigilante,
  fetchCarFeaturesVigilante,
  fetchParkingLots,
} from "../../constants/api";

import { styles } from "../../styles/reportHistory";
import * as NavigationBar from "expo-navigation-bar";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

export default function reportHistoryScreen() {
  const router = useRouter();
  const { isLoggedIn, user } = useStore();
  const [notifications, setNotifications] = useState([]);
  const [cars, setCars] = useState([]);
  const [parkingLots, setParkingLots] = useState([]);
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

    const fetchAllNotifications = async () => {
      try {
        const notificationsData = await fetchNotificationVigilante(user.access);
        setNotifications(notificationsData);
      } catch (error) {
        setFeedbackMessage(
          "No se pudo obtener los reportes, cerrar sesión y volver a iniciar"
        );
        console.error("Error trying to fetch the notifications data:", error);
      }
    };
    fetchAllNotifications();

    const fetchCarLicensePlate = async () => {
      try {
        const carsData = await fetchCarFeaturesVigilante(user.access);
        setCars(carsData);
      } catch (error) {
        console.error("Couldn't fetch the parking lots:", error);
      }
    };
    fetchCarLicensePlate();

    const fetchParkingLotName = async () => {
      try {
        const parkingLotsData = await fetchParkingLots(user.access);
        setParkingLots(parkingLotsData);
      } catch (error) {
        console.error("Couldn't fetch the parking lots:", error);
      }
    };
    fetchParkingLotName();
  }, []);

  const getLicensePlate = (vehiculoId) => {
    const car = cars.find((car) => car.id === vehiculoId);
    return car ? car.patente : "Unknown";
  };
  const getParkingLotName = (parkingLotId) => {
    const parkingLot = parkingLots.find(
      (parkingLot) => parkingLot.id === parkingLotId
    );
    return parkingLot ? parkingLot.nombre : "Unknown";
  };
  const getIconForMessage = (mensaje) => {
    switch (mensaje) {
      case "Puerta abierta":
        return (
          <MaterialCommunityIcons name="car-door" style={styles.reportIcon} />
        );
      case "Auto chocado":
        return <FontAwesome5 name="car-crash" style={styles.reportIcon} />;
      case "Mal estacionado":
        return <FontAwesome5 name="parking" style={styles.reportIcon} />;
      case "Extravió de pertenencia":
        return <FontAwesome5 name="user-secret" style={styles.reportIcon} />;
      case "Usuario Problemático":
        return <FontAwesome5 name="user-slash" style={styles.reportIcon} />;
      default:
        return (
          <MaterialCommunityIcons
            name="message-draw"
            style={styles.reportIcon}
          />
        );
    }
  };

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const onTouch = () => {
    setFeedbackMessage("");
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
          <Text style={styles.title}>Historial de reporte</Text>

          {notifications.map((notification, index) => (
            <View key={index} style={styles.reportContainer}>
              {getIconForMessage(notification.mensaje)}
              <Text style={styles.reportText}>{notification.mensaje}</Text>
              <Text style={styles.reportText}>
                {getLicensePlate(notification.vehiculo)}
              </Text>
              <Text style={styles.reportText}>
                {getParkingLotName(notification.estacionamiento)}
              </Text>
            </View>
          ))}
        </ScrollView>
      ) : null}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("notificationGuard")}
        >
          <Text style={styles.buttonText}>Volver atrás</Text>
        </TouchableOpacity>
      </View>
      {feedbackMessage ? (
        <View style={styles.feedbackContainer}>
          <Text style={styles.feedbackText}>{feedbackMessage}</Text>
          <TouchableOpacity onPress={onTouch}>
            <Text style={styles.feedBackClose}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}
