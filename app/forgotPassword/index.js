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
import { passwordReset } from "../../constants/api";
import { email } from "../../constants/validation";

import { styles } from "../../styles/forgotPassword";
import { FontAwesome } from "@expo/vector-icons";

export default function forgotPasswordScreen() {
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);
  const handleOutside = () => {
    setIsFocused(false);
    Keyboard.dismiss();
  };

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const onTouch = () => {
    setFeedbackMessage("");
  };

  const handlePasswordRecovery = async (formData) => {
    try {
      await passwordReset(formData);
      setFeedbackMessage(
        "Revisa tu correo para continuar con la recuperación de la contraseña"
      );
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
          <Text style={styles.formSubHeading}>
            Enviaremos un enlace a tu correo
          </Text>

          <Text style={styles.labelText}>Correo</Text>
          <View style={styles.formGroup}>
            <FontAwesome name="envelope" style={styles.formIcon} />
            <Controller
              control={control}
              name="email"
              rules={email}
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <TextInput
                    style={styles.input}
                    placeholder="Correo"
                    placeholderTextColor="#CCCCCC"
                    value={value}
                    onBlur={onBlur}
                    onChangeText={(value) =>
                      onChange(value.toLowerCase().trim())
                    }
                    autoCapitalize="none"
                  />
                  {errors.email && (
                    <Text style={styles.errorText}>{errors.email.message}</Text>
                  )}
                </>
              )}
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(handlePasswordRecovery)}
          >
            <Text style={styles.buttonText}>Enviar enlace</Text>
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
