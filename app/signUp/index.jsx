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
import { registerUser } from "../../constants/api";
import { Controller, useForm } from "react-hook-form";
import {
  rut,
  p_nombre,
  s_nombre,
  p_apellido,
  s_apellido,
  email,
  signUpPassword,
  confirmPassword,
} from "../../constants/validation";

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

  const [feedbackMessage, setFeedbackMessage] = React.useState("");
  const [accountCreated, setAccountCreated] = useState(false);
  const onTouch = () => {
    setFeedbackMessage("");
    setAccountCreated(false);
  };

  const handleAccountCreation = async (formData) => {
    try {
      const response = await registerUser(formData);
      setFeedbackMessage(
        "Tu cuenta se ha creado de forma exitosa, puedes iniciar sesión"
      );
      setAccountCreated(true);
    } catch (error) {
      setFeedbackMessage("No se pudo crear tu cuenta, intentalo denuevo");
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
          <Controller
            control={control}
            name="rut"
            rules={rut}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="RUT"
                  placeholderTextColor="#CCCCCC"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value.trim())}
                />
                {errors.rut && (
                  <Text style={styles.errorText}>{errors.rut.message}</Text>
                )}
              </>
            )}
          />
        </View>

        <Text style={styles.labelText}>Nombre</Text>
        <View style={styles.formGroup}>
          <FontAwesome name="user" style={styles.formIcon} />
          <Controller
            control={control}
            name="p_nombre"
            rules={p_nombre}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Nombre"
                  placeholderTextColor="#CCCCCC"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value.trim())}
                />
                {errors.p_nombre && (
                  <Text style={styles.errorText}>
                    {errors.p_nombre.message}
                  </Text>
                )}
              </>
            )}
          />
        </View>

        <Text style={styles.labelText}>Segundo nombre</Text>
        <View style={styles.formGroup}>
          <FontAwesome name="user" style={styles.formIcon} />
          <Controller
            control={control}
            name="s_nombre"
            rules={s_nombre}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Segundo nombre"
                  placeholderTextColor="#CCCCCC"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value.trim())}
                />
                {errors.s_nombre && (
                  <Text style={styles.errorText}>
                    {errors.s_nombre.message}
                  </Text>
                )}
              </>
            )}
          />
        </View>

        <Text style={styles.labelText}>Apellido</Text>
        <View style={styles.formGroup}>
          <FontAwesome name="user" style={styles.formIcon} />
          <Controller
            control={control}
            name="p_apellido"
            rules={p_apellido}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Apellido"
                  placeholderTextColor="#CCCCCC"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value.trim())}
                />
                {errors.p_apellido && (
                  <Text style={styles.errorText}>
                    {errors.p_apellido.message}
                  </Text>
                )}
              </>
            )}
          />
        </View>

        <Text style={styles.labelText}>Segundo apellido</Text>
        <View style={styles.formGroup}>
          <FontAwesome name="user" style={styles.formIcon} />
          <Controller
            control={control}
            name="s_apellido"
            rules={s_apellido}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Segundo apellido"
                  placeholderTextColor="#CCCCCC"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value.trim())}
                />
                {errors.s_apellido && (
                  <Text style={styles.errorText}>
                    {errors.s_apellido.message}
                  </Text>
                )}
              </>
            )}
          />
        </View>

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
            name="password1"
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
                {errors.password1 && (
                  <Text style={styles.errorText}>
                    {errors.password1.message}
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
            name="password2"
            rules={confirmPassword}
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
                {errors.password2 && (
                  <Text style={styles.errorText}>
                    {errors.password2.message}
                  </Text>
                )}
              </>
            )}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(handleAccountCreation)}
          >
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
      {feedbackMessage ? (
        <View style={styles.feedbackContainer}>
          <Text style={styles.feedbackText}>{feedbackMessage}</Text>
          {accountCreated ? (
            <TouchableOpacity onPress={() => router.push("login")}>
              <Text style={styles.feedBackGoToLogin}>aquí</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={onTouch}>
              <Text style={styles.feedBackClose}>Cerrar</Text>
            </TouchableOpacity>
          )}
        </View>
      ) : null}
    </ScrollView>
  );
}
