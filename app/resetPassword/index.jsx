import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { passwordChange } from "../../constants/api";
import { signUpPassword, confirmNewPassword } from "../../constants/validation";

import { styles } from "../../styles/resetPassword";
import * as NavigationBar from "expo-navigation-bar";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

export default function resetPasswordScreen() {
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

  const handlePasswordRecovery = async (formData) => {
    try {
      await passwordChange(formData);
      setFeedbackMessage("Tu contraseña fue reestablecida, inicia sesión");
      router.push("login");
    } catch (error) {
      setFeedbackMessage("Los datos proporcionados no son válidos");
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <TouchableWithoutFeedback onPress={handleOutside}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.push("home")}>
          <FontAwesome name="home" style={styles.headerIcon} />
        </TouchableOpacity>
        <Image
          source={require("../../assets/images/appName.png")}
          style={styles.headerLogo}
        />

        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>RECUPERAR CONTRASEÑA</Text>
          <Text style={styles.formSubHeading}>Ingresa tu nueva contraseña</Text>

          <Text style={styles.labelText}>Contraseña</Text>
          <View style={styles.formGroup}>
            <FontAwesome5 name="key" style={styles.formIcon} />
            <Controller
              control={control}
              name="new_password1"
              rules={signUpPassword}
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    placeholderTextColor="#CCCCCC"
                    secureTextEntry={true}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                  />
                  {errors.new_password1 && (
                    <Text style={styles.errorText}>
                      {errors.new_password1.message}
                    </Text>
                  )}
                </>
              )}
            />
          </View>

          <Text style={styles.labelText}>Confirmar contraseña</Text>
          <View style={styles.formGroup}>
            <FontAwesome5 name="key" style={styles.formIcon} />
            <Controller
              control={control}
              name="new_password2"
              rules={confirmNewPassword}
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <TextInput
                    style={styles.input}
                    placeholder="Confirmar contraseña"
                    placeholderTextColor="#CCCCCC"
                    secureTextEntry={true}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                  />
                  {errors.new_password2 && (
                    <Text style={styles.errorText}>
                      {errors.new_password2.message}
                    </Text>
                  )}
                </>
              )}
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(handlePasswordRecovery)}
          >
            <Text style={styles.buttonText}>Cambiar contraseña</Text>
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
    </TouchableWithoutFeedback>
  );
}
