import React, { useEffect, useState } from "react";
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

import { styles } from "../../styles/comments";
import { FontAwesome } from "@expo/vector-icons";

export default function commentsScreen() {
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);
  const handleOutside = () => {
    setIsFocused(false);
    Keyboard.dismiss();
  };

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

          <TextInput
            style={styles.input}
            placeholder="Escribe tu comentario"
            placeholderTextColor="#CCCCCC"
            multiline={true}
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

          <TouchableOpacity style={styles.button1}>
            <Text style={styles.button1Text}>Enviar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => router.push("home")}
          >
            <Text style={styles.button2Text}>Volver al inicio</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
