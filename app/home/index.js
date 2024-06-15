import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useStore } from "../../stateManagement/store";

import { styles } from "../../styles/home";
import * as NavigationBar from "expo-navigation-bar";
import {
  FontAwesome,
  FontAwesome6,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function homeScreen() {
  const router = useRouter();
  const { isLoggedIn, isGuard } = useStore();
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
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/appName.png")}
          style={styles.headerLogo}
        />

        <View style={styles.contentContainer}></View>
      </View>

      {isLoggedIn ? (
        isGuard ? (
          <View style={styles.navbarContainer}>
            <TouchableOpacity onPress={() => router.push("myAccountGuard")}>
              <FontAwesome6 name="user-shield" style={styles.navbarIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="menu-book" style={styles.navbarIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("notificationGuard")}>
              <MaterialCommunityIcons
                name="bell-plus"
                style={styles.navbarIcon}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.navbarContainer}>
            <TouchableOpacity onPress={() => router.push("myAccount")}>
              <FontAwesome name="user" style={styles.navbarIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="menu-book" style={styles.navbarIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("notification")}>
              <FontAwesome name="bell" style={styles.navbarIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("comments")}>
              <FontAwesome6 name="chalkboard-user" style={styles.navbarIcon} />
            </TouchableOpacity>
          </View>
        )
      ) : (
        <View style={styles.navbarContainer}>
          <TouchableOpacity onPress={() => router.push("signInRegister")}>
            <FontAwesome name="user-plus" style={styles.navbarIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="menu-book" style={styles.navbarIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("comments")}>
            <FontAwesome6 name="chalkboard-user" style={styles.navbarIcon} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
