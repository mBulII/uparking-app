import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { loginUser } from "../../constants/api";

import { styles } from "../../styles/login";
import * as NavigationBar from "expo-navigation-bar";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

export default function loginScreen() {
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

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (name, value) => {
    if (name === "email") {
      value = value.toLowerCase();
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    try {
      const response = await loginUser(formData);
      router.push("home");
    } catch (error) {
      let errorMessage = "Something went wrong!";
      if (error.response && error.response.data) {
        errorMessage = Object.values(error.response.data).flat().join(", ");
      }
      Alert.alert("Login Failed", errorMessage);
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => router.push("home")}>
        <FontAwesome
          name="home"
          size={25}
          color="white"
          style={styles.headerIcon}
        />
      </TouchableOpacity>
      <Image
        source={require("../../assets/images/appName.png")}
        style={styles.headerLogo}
      />

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>INGRESAR</Text>
        <Text style={styles.formSubheading}>Por favor valida tu cuenta</Text>

        <Text style={styles.labelText}>Correo</Text>
        <View style={styles.formGroup}>
          <FontAwesome name="envelope" style={styles.formIcon} />
          <TextInput
            style={styles.input}
            placeholder="Correo"
            placeholderTextColor="#CCCCCC"
            value={formData.email}
            onChangeText={(value) => handleInputChange("email", value)}
            autoCapitalize="none"
          />
        </View>

        <Text style={styles.labelText}>Contraseña</Text>
        <View style={styles.formGroup}>
          <FontAwesome5 name="key" style={styles.formIcon} />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#CCCCCC"
            secureTextEntry={true}
            value={formData.password}
            onChangeText={(value) => handleInputChange("password", value)}
          />
        </View>
        <TouchableOpacity style={styles.forgotContainer}>
          <Text style={styles.forgotText}>olvidé mi contraseña</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
    </ScrollView>
  );
}
