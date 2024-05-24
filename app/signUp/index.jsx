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
import { registerUser } from "../../constants/api";

import { styles } from "../../styles/signUp";
import * as NavigationBar from "expo-navigation-bar";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

export default function signUpScreen() {
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
    rut: "",
    p_nombre: "",
    s_nombre: "",
    p_apellido: "",
    s_apellido: "",
    email: "",
    password1: "",
    password2: "",
  });
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    try {
      const response = await registerUser(formData);
      Alert.alert(
        "Registration Successful",
        "You have registered successfully!"
      );
    } catch (error) {
      let errorMessage = "Something went wrong!";
      if (error.response && error.response.data) {
        errorMessage = Object.values(error.response.data).flat().join(", ");
      }
      Alert.alert("Registration Failed", errorMessage);
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
        <Text style={styles.formTitle}>REGISTRATE</Text>
        <Text style={styles.formSubheading}>Por favor valida tu cuenta</Text>

        <Text style={styles.labelText}>RUT</Text>
        <View style={styles.formGroup}>
          <FontAwesome name="user" style={styles.formIcon} />
          <TextInput
            style={styles.input}
            placeholder="RUT"
            placeholderTextColor="#CCCCCC"
            value={formData.rut}
            onChangeText={(value) => handleInputChange("rut", value)}
          />
        </View>

        <Text style={styles.labelText}>Nombre</Text>
        <View style={styles.formGroup}>
          <FontAwesome name="user" style={styles.formIcon} />
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            placeholderTextColor="#CCCCCC"
            value={formData.p_nombre}
            onChangeText={(value) => handleInputChange("p_nombre", value)}
          />
        </View>

        <Text style={styles.labelText}>Segundo nombre</Text>
        <View style={styles.formGroup}>
          <FontAwesome name="user" style={styles.formIcon} />
          <TextInput
            style={styles.input}
            placeholder="Segundo nombre"
            placeholderTextColor="#CCCCCC"
            value={formData.s_nombre}
            onChangeText={(value) => handleInputChange("s_nombre", value)}
          />
        </View>

        <Text style={styles.labelText}>Apellido</Text>
        <View style={styles.formGroup}>
          <FontAwesome name="user" style={styles.formIcon} />
          <TextInput
            style={styles.input}
            placeholder="Apellido"
            placeholderTextColor="#CCCCCC"
            value={formData.p_apellido}
            onChangeText={(value) => handleInputChange("p_apellido", value)}
          />
        </View>

        <Text style={styles.labelText}>Segundo apellido</Text>
        <View style={styles.formGroup}>
          <FontAwesome name="user" style={styles.formIcon} />
          <TextInput
            style={styles.input}
            placeholder="Segundo apellido"
            placeholderTextColor="#CCCCCC"
            value={formData.s_apellido}
            onChangeText={(value) => handleInputChange("s_apellido", value)}
          />
        </View>

        <Text style={styles.labelText}>Correo</Text>
        <View style={styles.formGroup}>
          <FontAwesome name="envelope" style={styles.formIcon} />
          <TextInput
            style={styles.input}
            placeholder="Correo"
            placeholderTextColor="#CCCCCC"
            value={formData.email}
            onChangeText={(value) => handleInputChange("email", value)}
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
            value={formData.password1}
            onChangeText={(value) => handleInputChange("password1", value)}
          />
        </View>

        <Text style={styles.labelText}>Confirmar contraseña</Text>
        <View style={styles.formGroup}>
          <FontAwesome5 name="key" style={styles.formIcon} />
          <TextInput
            style={styles.input}
            placeholder="Confirmar contraseña"
            placeholderTextColor="#CCCCCC"
            secureTextEntry={true}
            value={formData.password2}
            onChangeText={(value) => handleInputChange("password2", value)}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Crear Cuenta</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText1}>ya tienes cuenta?</Text>
          <TouchableOpacity onPress={() => router.push("login")}>
            <Text style={styles.bottomText2}> Ingresa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
