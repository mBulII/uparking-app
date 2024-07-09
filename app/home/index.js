import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { useStore } from "../../stateManagement/store";
import {
  fetchParkingLots,
  increaseParkingLotCapacity,
  decreaseParkingLotCapacity,
  fetchSedes,
} from "../../constants/api";
import MapView, { PROVIDER_GOOGLE, Polygon, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { usePermission } from "../../hooks/locationPermission";

import { styles } from "../../styles/home";
import {
  FontAwesome,
  FontAwesome6,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";

export default function homeScreen() {
  const router = useRouter();
  const mapRef = useRef(null);
  const { isLoggedIn, isGuard, user } = useStore();
  const [openModal, setOpenModal] = useState(false);
  const [parkingLot, setParkingLot] = useState([]);
  const [sede, setSede] = useState([]);
  const [openSedeModal, setOpenSedeModal] = useState(false);
  const [selectedSede, setSelectedSede] = useState(null);
  const [filteredParkingLots, setFilteredParkingLots] = useState([]);
  const [selectedParkingLot, setSelectedParkingLot] = useState(null);
  const [buttonSelected, setButtonSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mapLocation, setMapLocation] = useState({
    latitude: -40.58603418460478,
    longitude: -73.0901361322407,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const websocketRef = useRef(null);
  useEffect(() => {
    const fetchParkingLotAndSedesData = async () => {
      try {
        const parkingLotsData = await fetchParkingLots();
        setParkingLot(parkingLotsData.sort((a, b) => a.id - b.id));

        const sedesData = await fetchSedes();
        setSede(sedesData.sort((a, b) => a.id - b.id));
      } catch (error) {
        console.error("Couldn't fetch the parking lots and sedes data", error);
      }
    };

    fetchParkingLotAndSedesData();
    checkPermission();

    websocketRef.current = new WebSocket("wss://Csep.dev/ws/estacionamientos");
    websocketRef.current.onopen = () => {};
    websocketRef.current.onmessage = () => {
      fetchParkingLotAndSedesData();
    };
    websocketRef.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
    websocketRef.current.onclose = () => {};

    return () => {
      if (websocketRef.current) {
        websocketRef.current.close();
      }
    };
  }, []);

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const onTouch = () => {
    setFeedbackMessage("");
  };

  const { permissionGranted, setPermissionGranted, modalShown, setModalShown } =
    usePermission();
  const checkPermission = async () => {
    const { status } = await Location.getForegroundPermissionsAsync();
    setPermissionGranted(status === "granted");
    if (status !== "granted" && !modalShown) {
      setModalShown(true);
    }
  };
  const requestPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    setPermissionGranted(status === "granted");
    setModalShown(false);
  };

  const handleOpenModal = (lot) => {
    setSelectedParkingLot(lot);
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
        messageStyle: styles.modalCapacityMessageRed,
        message: "Prefiera otro estacionamiento",
      };
    } else if (capacidad < capacidad_max / 2) {
      return {
        name: "check-circle",
        style: styles.modalGreenIcon,
        styleText: styles.modalModifyNumberTextGreen,
        messageStyle: styles.modalCapacityMessageGreen,
        message: "Estacionamiento libre",
      };
    } else {
      return {
        name: "alert-circle-outline",
        style: styles.modalYellowIcon,
        styleText: styles.modalModifyNumberTextYellow,
        messageStyle: styles.modalCapacityMessageYellow,
        message: "Algunos estacionamientos disponibles",
      };
    }
  };

  const renderVigilanteModal = () => {
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

  const renderUserModal = () => {
    if (!selectedParkingLot) return null;
    const { name, style, messageStyle, message } =
      getParkingLotIconAndNumberColor();

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
            </View>
            <MaterialCommunityIcons name={name} style={style} />

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
            <View style={styles.modalTextContainer}>
              <Text style={styles.modalText}>
                Estacionamientos desocupados:
              </Text>
              <Text style={styles.modalText}>
                {" "}
                {selectedParkingLot.capacidad_max -
                  selectedParkingLot.capacidad}
              </Text>
            </View>

            <Text style={messageStyle}>{message}</Text>

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

  const handleMapButtonPressed = (lot) => {
    setSelectedParkingLot(lot);
    const coordinates = lot.area_espacio.coordinates[0];
    const centroid = coordinates.reduce(
      (acc, coord) => {
        return {
          latitude: acc.latitude + coord[0],
          longitude: acc.longitude + coord[1],
        };
      },
      { latitude: 0, longitude: 0 }
    );

    const center = {
      latitude: centroid.latitude / coordinates.length,
      longitude: centroid.longitude / coordinates.length,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    };

    mapRef.current.animateToRegion(center, 1000);
  };
  const getPolygonCentroid = (coordinates) => {
    let latitudeSum = 0;
    let longitudeSum = 0;
    coordinates.forEach((coord) => {
      latitudeSum += coord.latitude;
      longitudeSum += coord.longitude;
    });
    const numPoints = coordinates.length;
    return {
      latitude: latitudeSum / numPoints,
      longitude: longitudeSum / numPoints,
    };
  };
  const getPolygonColors = (capacidad, capacidad_max, isSelected) => {
    const borderColor = isSelected ? "#3182CE" : "rgba(0,0,0,0.5)";
    let fillColor;

    if (capacidad_max - capacidad <= 2) {
      fillColor = "#E55252";
    } else if (capacidad < capacidad_max / 2) {
      fillColor = "#81F777";
    } else {
      fillColor = "#DDDE7D";
    }

    return {
      fillColor: `${fillColor}55`,
      strokeColor: borderColor,
    };
  };
  const getMarkerColor = (capacidad, capacidad_max) => {
    if (capacidad_max - capacidad <= 2) {
      return "#E55252";
    } else if (capacidad < capacidad_max / 2) {
      return "#81F777";
    } else {
      return "#DDDE7D";
    }
  };

  const handleSedeSelection = (sedeId) => {
    setSelectedSede(sedeId);
    const filteredLots = parkingLot.filter((lot) => lot.sede === sedeId);
    setFilteredParkingLots(filteredLots);

    if (sedeId === "CH") {
      mapRef.current.animateToRegion(
        {
          latitude: -40.58603418460478,
          longitude: -73.0901361322407,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        1000
      );
    } else if (sedeId === "MY") {
      mapRef.current.animateToRegion(
        {
          latitude: -40.597567817892546,
          longitude: -73.1042043467759,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        },
        1000
      );
    }

    setOpenSedeModal(false);
  };
  const renderSedeSelection = () => {
    return (
      <Modal animationType="fade" transparent={true}>
        <View style={styles.requestModalBackground}>
          <View style={styles.selectSedeModalContainer}>
            <TouchableOpacity
              style={styles.closeSedeModalIconContainer}
              onPress={() => setOpenSedeModal(false)}
            >
              <FontAwesome name="close" style={styles.closeSedeModalIcon} />
            </TouchableOpacity>
            <Text style={styles.selectSedeModalTitle}>Selecciona tu sede:</Text>
            <ScrollView>
              {sede.map((sedeItem) => (
                <TouchableOpacity
                  key={sedeItem.id}
                  style={[
                    styles.selectSedeModalSedeButton,
                    selectedSede === sedeItem.id &&
                      styles.selectSedeModalSedeButtonSelected,
                  ]}
                  onPress={() => handleSedeSelection(sedeItem.id)}
                >
                  <Text
                    style={[
                      styles.selectSedeModalSedeButtonText,
                      selectedSede === sedeItem.id &&
                        styles.selectSedeModalSedeButtonTextSelected,
                    ]}
                  >
                    {sedeItem.nombre}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  };
  useEffect(() => {
    if (selectedSede === null) {
      setFilteredParkingLots(parkingLot);
    } else {
      const filteredLots = parkingLot.filter(
        (lot) => lot.sede === selectedSede
      );
      setFilteredParkingLots(filteredLots);
    }
  }, [selectedSede, parkingLot]);

  const getOpenModalButtonColor = (capacidad, capacidad_max) => {
    if (capacidad_max - capacidad <= 2) {
      return styles.openParkingLotRed;
    } else if (capacidad < capacidad_max / 2) {
      return styles.openParkingLotGreen;
    } else {
      return styles.openParkingLotYellow;
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/appName.png")}
          style={styles.headerLogo}
        />
      </View>
      {modalShown && (
        <Modal visible={modalShown} animationType="fade" transparent={true}>
          <View style={styles.requestModalBackground}>
            <View style={styles.requestModalContainer}>
              <Entypo name="location" style={styles.requestModalIcon} />

              <Text style={styles.requestModalTitle}>
                Permisos de ubicación
              </Text>
              <Text style={styles.requestModalTitle2}>
                Esta aplicación necesita acceso a tu ubicación para una mejor
                experiencia
              </Text>
              <View style={styles.requestModalButtonContainer}>
                <TouchableOpacity
                  style={styles.requestModalButton}
                  onPress={requestPermission}
                >
                  <Text style={styles.requestModalButtonText}>Aceptar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.requestModalButton2}
                  onPress={() => setModalShown(false)}
                >
                  <Text style={styles.requestModalButtonText2}>Rechazar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}

      {isLoggedIn ? (
        isGuard ? (
          <View style={styles.contentContainer}>
            <MapView
              ref={mapRef}
              style={styles.map}
              provider={PROVIDER_GOOGLE}
              initialRegion={mapLocation}
              showsUserLocation={permissionGranted}
              showsMyLocationButton={permissionGranted}
            >
              {parkingLot.map((lot) => {
                const coordinates = lot.area_espacio.coordinates[0].map(
                  (coord) => ({
                    latitude: coord[0],
                    longitude: coord[1],
                  })
                );
                const isSelected =
                  selectedParkingLot && selectedParkingLot.id === lot.id;
                const centroid = getPolygonCentroid(coordinates);

                return (
                  <React.Fragment key={lot.id}>
                    {(() => {
                      const { fillColor, strokeColor } = getPolygonColors(
                        lot.capacidad,
                        lot.capacidad_max,
                        isSelected
                      );

                      return (
                        <Polygon
                          coordinates={coordinates}
                          strokeColor={strokeColor}
                          fillColor={fillColor}
                          strokeWidth={isSelected ? 2 : 1}
                          onPress={() => handleOpenModal(lot)}
                        />
                      );
                    })()}
                    <Marker
                      key={`${lot.id}-${lot.capacidad}`}
                      coordinate={centroid}
                      pinColor={getMarkerColor(
                        lot.capacidad,
                        lot.capacidad_max
                      )}
                      onPress={() => handleOpenModal(lot)}
                    />
                  </React.Fragment>
                );
              })}
            </MapView>

            <FontAwesome name="sort-up" style={styles.arrowUpIcon} />
            <ScrollView
              style={styles.openParkingLotContainer}
              showsVerticalScrollIndicator={false}
            >
              {filteredParkingLots.map((lot) => {
                const openModalStyle = getOpenModalButtonColor(
                  lot.capacidad,
                  lot.capacidad_max
                );
                return (
                  <TouchableOpacity
                    key={lot.id}
                    style={openModalStyle}
                    onPress={() => handleMapButtonPressed(lot)}
                  >
                    <Text style={styles.openParkingLotText}>{lot.nombre}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
            <FontAwesome name="sort-down" style={styles.arrowDownIcon} />

            <TouchableOpacity
              style={styles.selectSedeButton}
              onPress={() => setOpenSedeModal(true)}
            >
              <Text style={styles.selectSedeButtonText}>Sede</Text>
            </TouchableOpacity>

            <View style={styles.navbarContainer2}>
              <TouchableOpacity onPress={() => router.push("myAccountGuard")}>
                <FontAwesome6 name="user-shield" style={styles.navbarIcon} />
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
            {renderVigilanteModal()}
            {openSedeModal && renderSedeSelection()}
          </View>
        ) : (
          <View style={styles.contentContainer}>
            <MapView
              ref={mapRef}
              style={styles.map}
              provider={PROVIDER_GOOGLE}
              initialRegion={mapLocation}
              showsUserLocation={permissionGranted}
              showsMyLocationButton={permissionGranted}
            >
              {parkingLot.map((lot) => {
                const coordinates = lot.area_espacio.coordinates[0].map(
                  (coord) => ({
                    latitude: coord[0],
                    longitude: coord[1],
                  })
                );
                const isSelected =
                  selectedParkingLot && selectedParkingLot.id === lot.id;
                const centroid = getPolygonCentroid(coordinates);

                return (
                  <React.Fragment key={lot.id}>
                    {(() => {
                      const { fillColor, strokeColor } = getPolygonColors(
                        lot.capacidad,
                        lot.capacidad_max,
                        isSelected
                      );

                      return (
                        <Polygon
                          coordinates={coordinates}
                          strokeColor={strokeColor}
                          fillColor={fillColor}
                          strokeWidth={isSelected ? 2 : 1}
                          onPress={() => handleOpenModal(lot)}
                        />
                      );
                    })()}
                    <Marker
                      key={`${lot.id}-${lot.capacidad}`}
                      coordinate={centroid}
                      pinColor={getMarkerColor(
                        lot.capacidad,
                        lot.capacidad_max
                      )}
                      onPress={() => handleOpenModal(lot)}
                    />
                  </React.Fragment>
                );
              })}
            </MapView>

            <FontAwesome name="sort-up" style={styles.arrowUpIcon} />
            <ScrollView
              style={styles.openParkingLotContainer}
              showsVerticalScrollIndicator={false}
            >
              {filteredParkingLots.map((lot) => {
                const openModalStyle = getOpenModalButtonColor(
                  lot.capacidad,
                  lot.capacidad_max
                );
                return (
                  <TouchableOpacity
                    key={lot.id}
                    style={openModalStyle}
                    onPress={() => handleMapButtonPressed(lot)}
                  >
                    <Text style={styles.openParkingLotText}>{lot.nombre}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
            <FontAwesome name="sort-down" style={styles.arrowDownIcon} />

            <TouchableOpacity
              style={styles.selectSedeButton}
              onPress={() => setOpenSedeModal(true)}
            >
              <Text style={styles.selectSedeButtonText}>Sede</Text>
            </TouchableOpacity>

            <View style={styles.navbarContainer}>
              <TouchableOpacity onPress={() => router.push("myAccount")}>
                <FontAwesome name="user" style={styles.navbarIcon} />
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
            {renderUserModal()}
            {openSedeModal && renderSedeSelection()}
          </View>
        )
      ) : (
        <View style={styles.contentContainer}>
          <MapView
            ref={mapRef}
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={mapLocation}
            showsUserLocation={permissionGranted}
            showsMyLocationButton={permissionGranted}
          >
            {parkingLot.map((lot) => {
              const coordinates = lot.area_espacio.coordinates[0].map(
                (coord) => ({
                  latitude: coord[0],
                  longitude: coord[1],
                })
              );
              const isSelected =
                selectedParkingLot && selectedParkingLot.id === lot.id;
              const centroid = getPolygonCentroid(coordinates);

              return (
                <React.Fragment key={lot.id}>
                  {(() => {
                    const { fillColor, strokeColor } = getPolygonColors(
                      lot.capacidad,
                      lot.capacidad_max,
                      isSelected
                    );

                    return (
                      <Polygon
                        coordinates={coordinates}
                        strokeColor={strokeColor}
                        fillColor={fillColor}
                        strokeWidth={isSelected ? 2 : 1}
                        onPress={() => handleOpenModal(lot)}
                      />
                    );
                  })()}
                  <Marker
                    key={`${lot.id}-${lot.capacidad}`}
                    coordinate={centroid}
                    pinColor={getMarkerColor(lot.capacidad, lot.capacidad_max)}
                    onPress={() => handleOpenModal(lot)}
                  />
                </React.Fragment>
              );
            })}
          </MapView>

          <FontAwesome name="sort-up" style={styles.arrowUpIcon} />
          <ScrollView
            style={styles.openParkingLotContainer}
            showsVerticalScrollIndicator={false}
          >
            {filteredParkingLots.map((lot) => {
              const openModalStyle = getOpenModalButtonColor(
                lot.capacidad,
                lot.capacidad_max
              );
              return (
                <TouchableOpacity
                  key={lot.id}
                  style={openModalStyle}
                  onPress={() => handleMapButtonPressed(lot)}
                >
                  <Text style={styles.openParkingLotText}>{lot.nombre}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <FontAwesome name="sort-down" style={styles.arrowDownIcon} />

          <TouchableOpacity
            style={styles.selectSedeButton}
            onPress={() => setOpenSedeModal(true)}
          >
            <Text style={styles.selectSedeButtonText}>Sede</Text>
          </TouchableOpacity>

          <View style={styles.navbarContainer2}>
            <TouchableOpacity onPress={() => router.push("signInRegister")}>
              <FontAwesome name="user-plus" style={styles.navbarIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("comments")}>
              <FontAwesome6 name="chalkboard-user" style={styles.navbarIcon} />
            </TouchableOpacity>
          </View>
          {renderUserModal()}
          {openSedeModal && renderSedeSelection()}
        </View>
      )}
    </View>
  );
}
