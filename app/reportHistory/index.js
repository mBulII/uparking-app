import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useStore } from "../../stateManagement/store";
import {
  fetchNotificationVigilante,
  fetchCarFeaturesVigilante,
  fetchParkingLots,
  deleteNotificationVigilante,
} from "../../constants/api";

import { styles } from "../../styles/reportHistory";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

export default function reportHistoryScreen() {
  const router = useRouter();
  const { isLoggedIn, user } = useStore();
  const [notifications, setNotifications] = useState([]);
  const [cars, setCars] = useState([]);
  const [parkingLots, setParkingLots] = useState([]);

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
  useEffect(() => {
    const fetchCarLicensePlate = async () => {
      try {
        const carsData = await fetchCarFeaturesVigilante(user.access);
        setCars(carsData);
      } catch (error) {
        console.error("Couldn't fetch the parking lots:", error);
      }
    };
    const fetchParkingLotName = async () => {
      try {
        const parkingLotsData = await fetchParkingLots(user.access);
        setParkingLots(parkingLotsData);
      } catch (error) {
        console.error("Couldn't fetch the parking lots:", error);
      }
    };

    fetchAllNotifications();
    fetchCarLicensePlate();
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

  const handleNotificationDelete = async (notificationId) => {
    try {
      await deleteNotificationVigilante(notificationId, user.access);
      await fetchAllNotifications();
    } catch (error) {
      setFeedbackMessage("No fue posible borrar la notificaion");
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
        notifications.length > 0 ? (
          <ScrollView
            style={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.title}>Historial de reporte</Text>

            {notifications.map((notification, index) => (
              <View key={index} style={styles.reportContainer}>
                <TouchableOpacity
                  style={styles.deleteNotificationContainer}
                  onPress={() => handleNotificationDelete(notification.id)}
                >
                  <Text style={styles.deleteNotificationText}>Eliminar</Text>
                </TouchableOpacity>
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
        ) : (
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Historial de reporte</Text>

            <View style={styles.noDataContainer}>
              <Text style={styles.noDataText}>
                Todavía no se han enviado reportes
              </Text>
            </View>
          </View>
        )
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
