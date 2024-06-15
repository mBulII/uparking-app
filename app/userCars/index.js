import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useStore } from "../../stateManagement/store";
import { fetchCarFeatures, deleteCarData } from "../../constants/api";

import { styles } from "../../styles/userCars";
import * as NavigationBar from "expo-navigation-bar";

export default function userCarsScreen() {
  const router = useRouter();
  const { isLoggedIn, user } = useStore();
  const [cars, setCars] = useState([]);
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

    const fetchCars = async () => {
      try {
        const carsData = await fetchCarFeatures(user.access);
        setCars(carsData);
      } catch (error) {
        console.error("Couldn't fetch the stored cars:", error);
      }
    };
    if (isLoggedIn) {
      fetchCars();
    }
  }, [isLoggedIn]);

  const handleDataDelete = async (carId) => {
    try {
      await deleteCarData(carId, user.access);
      setCars(cars.filter((car) => car.id !== carId));
    } catch (error) {
      setFeedbackMessage("No fue posible borrar los datos");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/appName.png")}
        style={styles.headerLogo}
      />

      {isLoggedIn ? (
        cars.length > 0 ? (
          <ScrollView
            style={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            {cars.map((car) => (
              <View key={car.id} style={styles.carContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.featureText}>Patente: {car.patente}</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.featureText}>
                    Fabricante: {car.fabricante}
                  </Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.featureText}>Color: {car.color}</Text>
                </View>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDataDelete(car.id)}
                >
                  <Text style={styles.deleteButtonText}>Borrar datos</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        ) : (
          <View style={styles.contentContainer}>
            <View style={styles.noDataContainer}>
              <Text style={styles.noDataText}>
                Todavía no has guardado datos
              </Text>
            </View>
          </View>
        )
      ) : null}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("myAccount")}
        >
          <Text style={styles.buttonText}>Volver atrás</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => router.push("home")}
        >
          <Text style={styles.button2Text}>Volver al inicio</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
