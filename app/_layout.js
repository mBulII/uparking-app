import React from "react";
import { SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import { PermissionProvider } from "../hooks/locationPermission";

const Layout = () => {
  return (
    <PermissionProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="home/index" options={{ headerShown: false }} />
          <Stack.Screen
            name="signInRegister/index"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="signUp/index" options={{ headerShown: false }} />
          <Stack.Screen name="login/index" options={{ headerShown: false }} />
          <Stack.Screen
            name="forgotPassword/index"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="comments/index"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="myAccount/index"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="userCars/index"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="notification/index"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="myAccountGuard/index"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="notificationGuard/index"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="addReport/index"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="reportHistory/index"
            options={{ headerShown: false }}
          />
        </Stack>
      </SafeAreaView>
    </PermissionProvider>
  );
};

export default Layout;
