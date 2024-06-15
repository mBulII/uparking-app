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
import { Controller, useForm } from "react-hook-form";
import { loginUser } from "../../constants/api";
import { email, loginPassword } from "../../constants/validation";
import { useStore } from "../../stateManagement/store";

import { styles } from "../../styles/login";
import * as NavigationBar from "expo-navigation-bar";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

export default function loginScreen() {
  const router = useRouter();
  const { setUser } = useStore();
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

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const onTouch = () => {
    setFeedbackMessage("");
  };

  const handleAccountLogin = async (formData) => {
    try {
      const response = await loginUser(formData);
      const userData = response;
      setUser(userData);
      router.push("home");
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
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => router.push("home")}>
        <FontAwesome name="home" style={styles.headerIcon} />
      </TouchableOpacity>
      <Image
        source={require("../../assets/images/appName.png")}
        style={styles.headerLogo}
      />

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>INGRESAR</Text>

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
                  onChangeText={(value) => onChange(value.toLowerCase().trim())}
                  autoCapitalize="none"
                />
                {errors.email && (
                  <Text style={styles.errorText}>{errors.email.message}</Text>
                )}
              </>
            )}
          />
        </View>

        <Text style={styles.labelText}>Contraseña</Text>
        <View style={styles.formGroup}>
          <FontAwesome5 name="key" style={styles.formIcon} />
          <Controller
            control={control}
            name="password"
            rules={loginPassword}
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
                {errors.password && (
                  <Text style={styles.errorText}>
                    {errors.password.message}
                  </Text>
                )}
              </>
            )}
          />
        </View>
        <TouchableOpacity
          style={styles.forgotContainer}
          onPress={() => router.push("forgotPassword")}
        >
          <Text style={styles.forgotText}>olvidé mi contraseña</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(handleAccountLogin)}
          >
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText1}>no tienes cuenta?</Text>
          <TouchableOpacity onPress={() => router.push("signUp")}>
            <Text style={styles.bottomText2}> Regístrate</Text>
          </TouchableOpacity>
        </View>
      </View>
      {feedbackMessage ? (
        <View style={styles.feedbackContainer}>
          <Text style={styles.feedbackText}>{feedbackMessage}</Text>
          <TouchableOpacity onPress={onTouch}>
            <Text style={styles.feedBackClose}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </ScrollView>
  );
}
