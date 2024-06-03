import React from "react";
import { SafeAreaView } from "react-native";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="home/index" options={{ headerShown: false }} />
        <Stack.Screen name="signUp/index" options={{ headerShown: false }} />
        <Stack.Screen name="login/index" options={{ headerShown: false }} />
        <Stack.Screen name="comments/index" options={{ headerShown: false }} />
        <Stack.Screen name="myAccount/index" options={{ headerShown: false }} />
        <Stack.Screen
          name="notification/index"
          options={{ headerShown: false }}
        />
      </Stack>
    </SafeAreaView>
  );
};

export default Layout;
