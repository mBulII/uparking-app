import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { sendFeedback } from "../../constants/api";
import { feedback } from "../../constants/validation";

import { styles } from "../../styles/comments";
import { FontAwesome } from "@expo/vector-icons";

export default function commentsScreen() {
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

  const handleFeedbackSubmit = async (formData) => {
    try {
      await sendFeedback(formData);
      setFeedbackMessage("Tu comentario se envio exitosamente");
      reset({ comentario: "" });
    } catch (error) {
      setFeedbackMessage(
        "Ocurrio un error al enviar el mensaje, intentalo denuevo"
      );
    }
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <TouchableWithoutFeedback onPress={handleOutside}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/appName.png")}
          style={styles.headerLogo}
        />

        <View style={styles.contentContainer}>
          <Text style={styles.textTitle}>
            Tienes algún comentario que realizar?
          </Text>
          <Text style={styles.textSubheading}>
            Puedes dejar tu comentario en la casilla de abajo, el cual será
            recepcionado y valorado para gestionar y entregar una solución.
          </Text>

          <Controller
            control={control}
            name="comentario"
            rules={feedback}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Escribe tu comentario"
                  placeholderTextColor="#CCCCCC"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  multiline={true}
                />
                {errors.comentario && (
                  <Text style={styles.errorText}>
                    {errors.comentario.message}
                  </Text>
                )}
              </>
            )}
          />

          <TouchableOpacity style={styles.imageButton}>
            <FontAwesome name="image" style={styles.imageIcon} />
            <Text style={styles.imageText}>Seleccionar archivo</Text>
          </TouchableOpacity>
          <Text style={styles.oText}>o</Text>
          <TouchableOpacity style={styles.cameraButton}>
            <FontAwesome name="camera" style={styles.cameraIcon} />
            <Text style={styles.cameraText}>Tomar una foto</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button1}
            onPress={handleSubmit(handleFeedbackSubmit)}
          >
            <Text style={styles.button1Text}>Enviar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => router.push("home")}
          >
            <Text style={styles.button2Text}>Volver al inicio</Text>
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
