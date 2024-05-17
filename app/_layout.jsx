import React from "react";
import { SafeAreaView } from "react-native";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
};

export default Layout;
