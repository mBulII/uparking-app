import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { loginUser } from "../../constants/api";
import { email, loginPassword } from "../../constants/validation";
import { useStore } from "../../stateManagement/store";
import { tokenRefresh } from "../../hooks/tokenRefresh";

import { styles } from "../../styles/login";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

export default function loginScreen() {
  const router = useRouter();
  const { setUser } = useStore();
  tokenRefresh();
  const [loading, setLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const onTouch = () => {
    setFeedbackMessage("");
  };

  const handleAccountLogin = async (formData) => {
    setLoading(true);
    try {
      const response = await loginUser(formData);
      const userData = response;
      setUser(userData);
      router.push("home");
    } catch (error) {
      setFeedbackMessage(
        "Los datos proporcionados no son válidos o la cuenta no esta verificada"
      );
    } finally {
      setLoading(false);
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

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>INGRESAR</Text>

        <Text style={styles.labelText}>Correo</Text>
        <View style={styles.formGroup}>
          <Controller
            control={control}
            name="email"
            rules={email}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <View style={styles.inputContainer}>
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
                  <FontAwesome name="envelope" style={styles.formIcon} />
                </View>
                {errors.email && (
                  <Text style={styles.errorText}>{errors.email.message}</Text>
                )}
              </>
            )}
          />
        </View>

        <Text style={styles.labelText}>Contraseña</Text>
        <View style={styles.formGroup}>
          <Controller
            control={control}
            name="password"
            rules={loginPassword}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    placeholderTextColor="#CCCCCC"
                    secureTextEntry={true}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                  />
                  <FontAwesome5 name="key" style={styles.formIcon} />
                </View>
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
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            )}
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
