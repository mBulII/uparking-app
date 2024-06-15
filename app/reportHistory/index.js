import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useStore } from "../../stateManagement/store";

import { styles } from "../../styles/reportHistory";
import * as NavigationBar from "expo-navigation-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function reportHistoryScreen() {
  const router = useRouter();
  const { isLoggedIn } = useStore();
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
          <Text style={styles.title}>Historial de reporte</Text>

          <View style={styles.reportContainer}>
            <MaterialCommunityIcons name="car-door" style={styles.reportIcon} />
            <Text style={styles.reportText}>Puerta abierta</Text>
            <Text style={styles.reportText}>Patente</Text>
            <Text style={styles.reportText}>Estacionamiento</Text>
            <Text style={styles.reportText}>Sede</Text>
          </View>

          <View style={styles.reportContainer}>
            <MaterialCommunityIcons name="car-door" style={styles.reportIcon} />
            <Text style={styles.reportText}>Puerta abierta</Text>
            <Text style={styles.reportText}>Patente</Text>
            <Text style={styles.reportText}>Estacionamiento</Text>
            <Text style={styles.reportText}>Sede</Text>
          </View>

          <View style={styles.reportContainer}>
            <MaterialCommunityIcons name="car-door" style={styles.reportIcon} />
            <Text style={styles.reportText}>Puerta abierta</Text>
            <Text style={styles.reportText}>Patente</Text>
            <Text style={styles.reportText}>Estacionamiento</Text>
            <Text style={styles.reportText}>Sede</Text>
          </View>

          <View style={styles.reportContainer}>
            <MaterialCommunityIcons name="car-door" style={styles.reportIcon} />
            <Text style={styles.reportText}>Puerta abierta</Text>
            <Text style={styles.reportText}>Patente</Text>
            <Text style={styles.reportText}>Estacionamiento</Text>
            <Text style={styles.reportText}>Sede</Text>
          </View>

          <View style={styles.reportContainer}>
            <MaterialCommunityIcons name="car-door" style={styles.reportIcon} />
            <Text style={styles.reportText}>Puerta abierta</Text>
            <Text style={styles.reportText}>Patente</Text>
            <Text style={styles.reportText}>Estacionamiento</Text>
            <Text style={styles.reportText}>Sede</Text>
          </View>
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
    </View>
  );
}
