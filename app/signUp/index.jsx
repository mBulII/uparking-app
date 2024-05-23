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

  return (
    <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
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

        <Text style={styles.labelText}>Nombre</Text>
        <View style={styles.formGroup}>
          <FontAwesome name="user" style={styles.formIcon} />
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            placeholderTextColor="#CCCCCC"
          />
        </View>

        <Text style={styles.labelText}>Segundo nombre</Text>
        <View style={styles.formGroup}>
          <FontAwesome name="user" style={styles.formIcon} />
          <TextInput
            style={styles.input}
            placeholder="Segundo nombre"
            placeholderTextColor="#CCCCCC"
          />
        </View>

        <Text style={styles.labelText}>Apellido</Text>
        <View style={styles.formGroup}>
          <FontAwesome name="user" style={styles.formIcon} />
          <TextInput
            style={styles.input}
            placeholder="Apellido"
            placeholderTextColor="#CCCCCC"
          />
        </View>

        <Text style={styles.labelText}>Segundo apellido</Text>
        <View style={styles.formGroup}>
          <FontAwesome name="user" style={styles.formIcon} />
          <TextInput
            style={styles.input}
            placeholder="Segundo apellido"
            placeholderTextColor="#CCCCCC"
          />
        </View>

        <Text style={styles.labelText}>Correo</Text>
        <View style={styles.formGroup}>
          <FontAwesome name="envelope" style={styles.formIcon} />
          <TextInput
            style={styles.input}
            placeholder="Correo"
            placeholderTextColor="#CCCCCC"
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
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
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
