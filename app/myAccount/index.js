import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { useStore } from "../../stateManagement/store";
import { carFeatures, logoutUser } from "../../constants/api";
import { Controller, useForm } from "react-hook-form";
import {
  plateValidation,
  manufacturer,
  color,
} from "../../constants/validation";
import { Linking } from "react-native";

import { styles } from "../../styles/myAccount";

export default function myAccountScreen() {
  const router = useRouter();
  const { user, isLoggedIn, logout } = useStore();
  const [isFocused, setIsFocused] = useState(false);
  const handleOutside = () => {
    setIsFocused(false);
    Keyboard.dismiss();
  };
  const handleFocus = () => {
    setIsFocused(true);
  };

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const onTouch = () => {
    setFeedbackMessage("");
  };

  const handleCarFeaturesChanges = async (formData) => {
    try {
      await carFeatures(formData, user.access);
      setFeedbackMessage("Datos actualizados exitosamente");
      reset({ patente: "" }, { fabricante: "" }, { color: "" });
    } catch (error) {
      setFeedbackMessage("No fue posible guardar los datos");
    }
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleLogout = async () => {
    try {
      await logoutUser(logout, user.refresh);
      router.push("home");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const redirectToWeb = () => {
    const url = "https://csep.dev/home/user";
    Linking.openURL(url);
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutside}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/appName-white.png")}
          style={styles.headerLogo}
        />

        {isLoggedIn ? (
          <ScrollView style={styles.contentContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title1}>Bienvenido</Text>
              <Text style={styles.title2}> {user.user.p_nombre}</Text>
            </View>
            <View style={styles.subHeadingContainer}>
              <Text style={styles.subHeading}>
                Puedes ver todas tus patentes guardadas
              </Text>
              <TouchableOpacity onPress={() => router.push("userCars")}>
                <Text style={styles.subHeading2}> aquí</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.subHeadingContainer2}>
              <Text style={styles.subHeading}>
                Puedes actualizar los datos de tu cuenta
              </Text>
              <TouchableOpacity onPress={() => redirectToWeb()}>
                <Text style={styles.subHeading2}> aquí</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.labelText}>Patente de vehículo</Text>
            <Controller
              control={control}
              name="patente"
              rules={plateValidation}
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <TextInput
                    style={styles.input}
                    placeholder="Patente"
                    placeholderTextColor="#CCCCCC"
                    value={value}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value.trim())}
                    onFocus={handleFocus}
                    autoCapitalize="characters"
                  />
                  {errors.patente && (
                    <Text style={styles.errorText}>
                      {errors.patente.message}
                    </Text>
                  )}
                </>
              )}
            />
            <Text style={styles.labelText}>Fabricante</Text>
            <Controller
              control={control}
              name="fabricante"
              rules={manufacturer}
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <TextInput
                    style={styles.input}
                    placeholder="Fabricante"
                    placeholderTextColor="#CCCCCC"
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    onFocus={handleFocus}
                  />
                  {errors.fabricante && (
                    <Text style={styles.errorText}>
                      {errors.fabricante.message}
                    </Text>
                  )}
                </>
              )}
            />
            <Text style={styles.labelText}>Color</Text>
            <Controller
              control={control}
              name="color"
              rules={color}
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <TextInput
                    style={styles.input}
                    placeholder="Color"
                    placeholderTextColor="#CCCCCC"
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    onFocus={handleFocus}
                  />
                  {errors.color && (
                    <Text style={styles.errorText}>{errors.color.message}</Text>
                  )}
                </>
              )}
            />

            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleSubmit(handleCarFeaturesChanges)}
            >
              <Text style={styles.saveButtonText}>Guardar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button1}
              onPress={() => router.push("home")}
            >
              <Text style={styles.button1Text}>Volver al inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={handleLogout}>
              <Text style={styles.button2Text}>Cerrar sesión</Text>
            </TouchableOpacity>

            {feedbackMessage ? (
              <View style={styles.feedbackContainer}>
                <Text style={styles.feedbackText}>{feedbackMessage}</Text>
                <TouchableOpacity onPress={onTouch}>
                  <Text style={styles.feedBackClose}>Cerrar</Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </ScrollView>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
}
