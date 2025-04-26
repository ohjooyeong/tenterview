import React from "react";
import { Stack, Tabs, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

export default function PraticeLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerTitle: () => null,
        headerLeft: () => (
          <Pressable onPress={() => router.back()} className="ml-4">
            <Ionicons name="arrow-back" size={24} color="#000" />
          </Pressable>
        ),
      }}
    ></Stack>
  );
}
