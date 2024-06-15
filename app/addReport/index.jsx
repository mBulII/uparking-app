import React, { useEffect } from "react";
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

import { styles } from "../../styles/addReport";
import * as NavigationBar from "expo-navigation-bar";
import {
  FontAwesome,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

export default function addReportScreen() {
  const { isLoggedIn } = useStore();
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
          <TextInput
            style={styles.input}
            placeholder="Ingresar patente"
            placeholderTextColor="#CCCCCC"
          />

          <Text style={styles.labelText}>Estacionamiento</Text>
          <TextInput
            style={styles.input}
            placeholder="Seleccionar estacionamiento"
            placeholderTextColor="#CCCCCC"
          />

          <Text style={styles.labelText}>Aviso</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
              <MaterialCommunityIcons
                name="car-door"
                style={styles.buttonIcon}
              />
              <Text style={styles.buttonText}>Puerta abierta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <FontAwesome5 name="car-crash" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Auto chocado</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <FontAwesome5 name="parking" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Mal estacionado</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <FontAwesome5 name="user-secret" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Extravió de pertenencia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <FontAwesome5 name="user-slash" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Usuario Problemático</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <MaterialCommunityIcons
                name="message-draw"
                style={styles.buttonIcon}
              />
              <Text style={styles.buttonText}>Comentario personalizado</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.labelText}>Sede</Text>
          <TextInput
            style={styles.input}
            placeholder="Seleccionar sede"
            placeholderTextColor="#CCCCCC"
          />

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
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.button1Text}>Enviar reporte</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => router.push("notificationGuard")}
        >
          <Text style={styles.button2Text}>Volver atrás</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
