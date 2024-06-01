import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Modal from "react-native-modal";
import { checkStatus } from "../../hooks/checkStatus";

import { styles } from "../../styles/home";
import * as NavigationBar from "expo-navigation-bar";
import {
  FontAwesome,
  FontAwesome6,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";

export default function homeScreen() {
  const isLoggedIn = checkStatus();
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

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedParkingLot, setSelectedParkingLot] = useState(null);
  const toggleModal = (parkingLot) => {
    setSelectedParkingLot(parkingLot);
    setModalVisible(!isModalVisible);
  };
  const parkingLots = [
    {
      id: 1,
      name: "E-C1",
      capacity: 15,
      lotsUsed: 15,
    },
    {
      id: 2,
      name: "E-C2",
      capacity: 15,
      lotsUsed: 8,
    },
    {
      id: 3,
      name: "E-C3",
      capacity: 15,
      lotsUsed: 3,
    },
  ];
  const getIconAndMessage = (lot) => {
    const lotsLeft = lot.capacity - lot.lotsUsed;

    if (lotsLeft <= 2) {
      return {
        icon: "alert-circle",
        color: "#E55252",
        message: "asqueroso",
      };
    } else if (7 >= lotsLeft) {
      return {
        icon: "alert",
        color: "#DDDE7D",
        message: "ma omeno",
      };
    } else {
      return {
        icon: "checkmark-circle",
        color: "#81F777",
        message: "de ruta",
      };
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require("../../assets/images/appName.png")}
          style={styles.headerLogo}
        />
      </View>

      <View style={styles.content}>
        {parkingLots.map((lot) => {
          return (
            <TouchableOpacity
              key={lot.id}
              style={styles.parkingLot}
              onPress={() => toggleModal(lot)}
            >
              <Text>{lot.name}</Text>
            </TouchableOpacity>
          );
        })}
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => toggleModal()}
          onSwipeComplete={() => toggleModal()}
          swipeDirection="down"
          animationIn="slideInUp"
          animationOut="slideOutDown"
          backdropTransitionOutTiming={0}
        >
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={toggleModal}>
              <FontAwesome name="times-circle" style={styles.closeIcon} />
            </TouchableOpacity>
            {selectedParkingLot && (
              <>
                <Ionicons
                  name={getIconAndMessage(selectedParkingLot).icon}
                  color={getIconAndMessage(selectedParkingLot).color}
                  style={styles.alertIcon}
                />
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTextTitle1}>
                    Estacionamiento{" "}
                    <Text style={styles.modalTextTitle2}>
                      {selectedParkingLot.name}
                    </Text>
                  </Text>
                </View>
                <Text style={styles.modalText}>
                  Capacidad de estacionamientos: {selectedParkingLot.capacity}
                </Text>
                <Text style={styles.modalText}>
                  Estacionamientos ocupados: {selectedParkingLot.lotsUsed}
                </Text>
                <Text style={styles.modalText}>
                  Estacionamientos desocupados:{" "}
                  {selectedParkingLot.capacity - selectedParkingLot.lotsUsed}
                </Text>
                <Text style={styles.modalMessage}>
                  {getIconAndMessage(selectedParkingLot).message}
                </Text>
              </>
            )}
          </View>
        </Modal>
      </View>

      {isLoggedIn ? (
        <View style={styles.navbarContainer}>
          <TouchableOpacity onPress={() => router.push("myAccount")}>
            <FontAwesome name="user" style={styles.navbarIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="menu-book" style={styles.navbarIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="bell" style={styles.navbarIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("comments")}>
            <FontAwesome6 name="chalkboard-user" style={styles.navbarIcon} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.navbarContainer}>
          <TouchableOpacity onPress={() => router.push("signUp")}>
            <FontAwesome name="user-plus" style={styles.navbarIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="menu-book" style={styles.navbarIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("comments")}>
            <FontAwesome6 name="chalkboard-user" style={styles.navbarIcon} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
