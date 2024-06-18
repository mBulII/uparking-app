import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import { useStore } from "../../stateManagement/store";
import { Controller, useForm } from "react-hook-form";
import { Dropdown } from "react-native-element-dropdown";
import {
  fetchParkingLots,
  sendNotification,
  fetchCarFeaturesVigilante,
} from "../../constants/api";
import {
  reportEstacionamiento,
  reportLicensePlate,
} from "../../constants/validation";

import { styles } from "../../styles/addReport";
import {
  FontAwesome,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

export default function addReportScreen() {
  const router = useRouter();
  const { isLoggedIn, user } = useStore();
  const [parkingLots, setParkingLots] = useState([]);
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const fetchLots = async () => {
      try {
        const parkingLotsData = await fetchParkingLots(user.access);
        setParkingLots(
          parkingLotsData.map((pl) => ({ label: pl.nombre, value: pl.id }))
        );
      } catch (error) {
        setFeedbackMessage(
          "No se pudo obtener los estacionamientos, cerrar sesión y volver a iniciar"
        );
        console.error("Couldn't fetch the parking lots:", error);
      }
    };
    fetchLots();

    const fetchCarId = async () => {
      try {
        const carsData = await fetchCarFeaturesVigilante(user.access);
        setCars(carsData);
      } catch (error) {
        console.error("Couldn't fetch the parking lots:", error);
      }
    };
    fetchCarId();
  }, []);

  const DropdownComponent = ({
    control,
    name,
    rules,
    data,
    placeholder,
    error,
  }) => {
    const [isFocus, setIsFocus] = useState(false);

    return (
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "#0055B7" }]}
              placeholderStyle={styles.dropdownPlaceholder}
              selectedTextStyle={styles.selectedTextStyle}
              containerStyle={styles.dropdownContainer}
              activeColor=""
              itemTextStyle={styles.dropdownItemText}
              showsVerticalScrollIndicator={false}
              data={data}
              maxHeight={200}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? placeholder : "..."}
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => {
                setIsFocus(false);
                onBlur();
              }}
              onChange={(item) => {
                onChange(item.value);
                setIsFocus(false);
              }}
            />
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </>
        )}
      />
    );
  };

  const [selectedButton, setSelectedButton] = useState(null);
  const buttons = [
    {
      id: 1,
      mensaje: "Puerta abierta",
      icon: (
        <MaterialCommunityIcons name="car-door" style={styles.buttonIcon} />
      ),
    },
    {
      id: 2,
      mensaje: "Auto chocado",
      icon: <FontAwesome5 name="car-crash" style={styles.buttonIcon} />,
    },
    {
      id: 3,
      mensaje: "Mal estacionado",
      icon: <FontAwesome5 name="parking" style={styles.buttonIcon} />,
    },
    {
      id: 4,
      mensaje: "Extravió de pertenencia",
      icon: <FontAwesome5 name="user-secret" style={styles.buttonIcon} />,
    },
    {
      id: 5,
      mensaje: "Usuario Problemático",
      icon: <FontAwesome5 name="user-slash" style={styles.buttonIcon} />,
    },
    {
      id: 6,
      mensaje: "Comentario personalizado",
      icon: (
        <MaterialCommunityIcons name="message-draw" style={styles.buttonIcon} />
      ),
    },
  ];

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const onTouch = () => {
    setFeedbackMessage("");
  };

  const handleDataSubmit = async (data) => {
    const vehicle = cars.find((car) => car.patente === data.patente);
    if (!vehicle) {
      setFeedbackMessage("No se encontró ningún vehículo con esta patente");
      return;
    }

    const formData = {
      vehiculo: vehicle.id,
      estacionamiento: data.estacionamiento,
      mensaje:
        selectedButton === 6
          ? data.comment
          : buttons.find((button) => button.id === selectedButton).mensaje,
    };
    try {
      await sendNotification(formData, user.access);
      setFeedbackMessage("El reporte sa ha enviado con exito");
    } catch (error) {
      setFeedbackMessage(
        "No se pudo enviar el reporte, intentelo denuevo o vuelva a iniciar sesión"
      );
      console.error("Error sending the notification:", error);
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
          <Text style={styles.title}>Añadir reporte</Text>

          <Text style={styles.labelText}>Patente</Text>
          <Controller
            control={control}
            name="patente"
            rules={reportLicensePlate}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Patente"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value.trim())}
                  autoCapitalize="characters"
                />
                {errors.patente && (
                  <Text style={styles.errorText}>{errors.patente.message}</Text>
                )}
              </>
            )}
          />

          <Text style={styles.labelText}>Estacionamiento</Text>
          <DropdownComponent
            control={control}
            name="estacionamiento"
            rules={reportEstacionamiento}
            data={parkingLots}
            placeholder="Seleccionar un estacionamiento"
            placeholderTextColor="#CCCCCC"
            error={errors.estacionamiento}
          />

          <Text style={styles.labelText}>Aviso</Text>
          <View style={styles.buttonsContainer}>
            {buttons.map((button) => (
              <TouchableOpacity
                key={button.id}
                style={[
                  styles.button,
                  selectedButton === button.id && styles.selectedButton,
                ]}
                onPress={() => setSelectedButton(button.id)}
              >
                {button.icon}
                <Text style={styles.buttonText}>{button.mensaje}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {selectedButton === 6 && (
            <Controller
              control={control}
              name="comment"
              rules={reportLicensePlate}
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <TextInput
                    style={styles.bigInput}
                    placeholder="Escriba su comentario personalizado"
                    placeholderTextColor="#CCCCCC"
                    value={value}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    multiline={true}
                    maxLength={170}
                  />
                  {errors.comment && (
                    <Text style={styles.errorText}>
                      {errors.comment.message}
                    </Text>
                  )}
                </>
              )}
            />
          )}

          <Text style={styles.labelText}>Imagen (No obligatorio)</Text>
          <TouchableOpacity style={styles.imageButton}>
            <FontAwesome name="image" style={styles.imageIcon} />
            <Text style={styles.imageText}>Seleccionar archivo</Text>
          </TouchableOpacity>
          <Text style={styles.oText}>o</Text>
          <TouchableOpacity style={styles.cameraButton}>
            <FontAwesome name="camera" style={styles.cameraIcon} />
            <Text style={styles.cameraText}>Tomar una foto</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : null}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity
          style={styles.button1}
          onPress={handleSubmit(handleDataSubmit)}
        >
          <Text style={styles.button1Text}>Enviar reporte</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => router.push("notificationGuard")}
        >
          <Text style={styles.button2Text}>Volver atrás</Text>
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
