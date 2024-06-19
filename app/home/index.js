import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { useRouter } from "expo-router";
import { useStore } from "../../stateManagement/store";
import {
  fetchParkingLots,
  increaseParkingLotCapacity,
  decreaseParkingLotCapacity,
} from "../../constants/api";

import { styles } from "../../styles/home";
import {
  FontAwesome,
  FontAwesome6,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function homeScreen() {
  const router = useRouter();
  const { isLoggedIn, isGuard, user } = useStore();
  const [openModal, setOpenModal] = useState(false);
  const [parkingLot, setParkingLot] = useState([]);
  const [selectedParkingLot, setSelectedParkingLot] = useState(null);
  const [buttonSelected, setButtonSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchParkingLotData = async () => {
      try {
        const parkingLotsData = await fetchParkingLots(user.access);
        setParkingLot(parkingLotsData.sort((a, b) => a.id - b.id));
      } catch (error) {
        console.error("Couldn't fetch the parking lots data", error);
      }
    };
    if (isGuard) {
      fetchParkingLotData();
    }
  }, []);

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const onTouch = () => {
    setFeedbackMessage("");
  };
  const handleOpenModal = (parkingLot) => {
    setSelectedParkingLot(parkingLot);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    setButtonSelected(null);
  };

  const updateParkingLotCapacity = (lotId, newCapacity) => {
    setParkingLot((prevParkingLot) =>
      prevParkingLot
        .map((lot) =>
          lot.id === lotId ? { ...lot, capacidad: newCapacity } : lot
        )
        .sort((a, b) => a.id - b.id)
    );
  };

  const decreaseCapacity = async () => {
    if (loading) return;
    setButtonSelected("decrease");
    if (selectedParkingLot.capacidad <= 0) {
      setFeedbackMessage("No puede seguir reduciendo la capacidad");
      return;
    }
    setLoading(true);
    try {
      await decreaseParkingLotCapacity(selectedParkingLot.id, user.access);
      const newCapacity = selectedParkingLot.capacidad - 1;
      setSelectedParkingLot((prevState) => ({
        ...prevState,
        capacidad: newCapacity,
      }));
      updateParkingLotCapacity(selectedParkingLot.id, newCapacity);
    } catch (error) {
      console.error("Couldn't decrease the parking lot capacity", error);
    } finally {
      setLoading(false);
    }
  };
  const increaseCapacity = async () => {
    if (loading) return;
    setButtonSelected("increase");
    if (selectedParkingLot.capacidad >= selectedParkingLot.capacidad_max) {
      setFeedbackMessage("No puede seguir aumentando la capacidad");
      return;
    }
    setLoading(true);
    try {
      await increaseParkingLotCapacity(selectedParkingLot.id, user.access);
      const newCapacity = selectedParkingLot.capacidad + 1;
      setSelectedParkingLot((prevState) => ({
        ...prevState,
        capacidad: newCapacity,
      }));
      updateParkingLotCapacity(selectedParkingLot.id, newCapacity);
    } catch (error) {
      console.error("Couldn't increase the parking lot capacity", error);
    } finally {
      setLoading(false);
    }
  };

  const getParkingLotIconAndNumberColor = () => {
    const { capacidad, capacidad_max } = selectedParkingLot;

    if (capacidad_max - capacidad <= 2) {
      return {
        name: "alert-circle",
        style: styles.modalRedIcon,
        styleText: styles.modalModifyNumberTextRed,
      };
    } else if (capacidad < capacidad_max / 2) {
      return {
        name: "check-circle",
        style: styles.modalGreenIcon,
        styleText: styles.modalModifyNumberTextGreen,
      };
    } else {
      return {
        name: "alert-circle-outline",
        style: styles.modalYellowIcon,
        styleText: styles.modalModifyNumberTextYellow,
      };
    }
  };

  const renderModal = () => {
    if (!selectedParkingLot) return null;
    const { name, style, styleText } = getParkingLotIconAndNumberColor();

    return (
      <Modal visible={openModal} animationType="fade" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View style={styles.modalTitleContainer}>
              <Text style={styles.modalTitle1}>Estacionamiento</Text>
              <Text style={styles.modalTitle2}>
                {" "}
                {selectedParkingLot.nombre}
              </Text>
              <MaterialCommunityIcons name={name} style={style} />
            </View>

            <View style={styles.modalTextContainer}>
              <Text style={styles.modalText}>
                Capacidad del estacionamiento:
              </Text>
              <Text style={styles.modalText}>
                {" "}
                {selectedParkingLot.capacidad_max}
              </Text>
            </View>
            <View style={styles.modalTextContainer}>
              <Text style={styles.modalText}>Estacionamientos ocupados:</Text>
              <Text style={styles.modalText}>
                {" "}
                {selectedParkingLot.capacidad}
              </Text>
            </View>

            <Text style={styles.modalModifyTitle}>Modificar</Text>
            <View style={styles.modalModifyIconsContainer}>
              <TouchableOpacity onPress={decreaseCapacity} disabled={loading}>
                <FontAwesome
                  name="minus-square"
                  style={
                    buttonSelected === "decrease"
                      ? styles.modalModifyIconSelected
                      : styles.modalModifyIcon
                  }
                />
              </TouchableOpacity>
              <View style={styles.modalModifyNumber}>
                <Text style={styleText}>{selectedParkingLot.capacidad}</Text>
              </View>
              <TouchableOpacity onPress={increaseCapacity} disabled={loading}>
                <FontAwesome
                  name="plus-square"
                  style={
                    buttonSelected === "increase"
                      ? styles.modalModifyIconSelected
                      : styles.modalModifyIcon
                  }
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={handleCloseModal}
            >
              <Text style={styles.modalCloseButtonText}>Finalizar</Text>
            </TouchableOpacity>

            {feedbackMessage ? (
              <View style={styles.feedbackContainer}>
                <Text style={styles.feedbackText}>{feedbackMessage}</Text>
                <TouchableOpacity onPress={onTouch}>
                  <Text style={styles.feedBackClose}>Cerrar</Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/appName.png")}
          style={styles.headerLogo}
        />
      </View>

      {isLoggedIn ? (
        isGuard ? (
          <View style={styles.contentContainer}>
            {parkingLot.map((lot) => (
              <TouchableOpacity
                key={lot.id}
                style={styles.modalTest}
                onPress={() => handleOpenModal(lot)}
              >
                <Text style={styles.modalOpenText}>{lot.nombre}</Text>
              </TouchableOpacity>
            ))}

            <View style={styles.navbarContainer}>
              <TouchableOpacity onPress={() => router.push("myAccountGuard")}>
                <FontAwesome6 name="user-shield" style={styles.navbarIcon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialIcons name="menu-book" style={styles.navbarIcon} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => router.push("notificationGuard")}
              >
                <MaterialCommunityIcons
                  name="bell-plus"
                  style={styles.navbarIcon}
                />
              </TouchableOpacity>
            </View>
            {renderModal()}
          </View>
        ) : (
          <View style={styles.contentContainer}>
            <View style={styles.navbarContainer}>
              <TouchableOpacity onPress={() => router.push("myAccount")}>
                <FontAwesome name="user" style={styles.navbarIcon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialIcons name="menu-book" style={styles.navbarIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push("notification")}>
                <FontAwesome name="bell" style={styles.navbarIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push("comments")}>
                <FontAwesome6
                  name="chalkboard-user"
                  style={styles.navbarIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        )
      ) : (
        <View style={styles.contentContainer}>
          <View style={styles.navbarContainer}>
            <TouchableOpacity onPress={() => router.push("signInRegister")}>
              <FontAwesome name="user-plus" style={styles.navbarIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="menu-book" style={styles.navbarIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("comments")}>
              <FontAwesome6 name="chalkboard-user" style={styles.navbarIcon} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
