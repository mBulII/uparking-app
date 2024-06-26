import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import { styles } from "../../styles/signInRegister";
import { FontAwesome } from "@expo/vector-icons";

export default function signInRegisterScreen() {
  const router = useRouter();

  return (
    <View style={styles.container} showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => router.push("home")}>
        <FontAwesome name="home" style={styles.headerIcon} />
      </TouchableOpacity>

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>BIENVENIDO</Text>
        <Text style={styles.formSubHeading}>
          Puedes Iniciar Sesión o Registrarte
        </Text>

        <TouchableOpacity
          style={styles.button1}
          onPress={() => router.push("login")}
        >
          <Text style={styles.button1Text}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => router.push("signUp")}
        >
          <Text style={styles.button2Text}>Crear Cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
