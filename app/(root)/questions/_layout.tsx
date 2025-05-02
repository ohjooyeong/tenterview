import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { Pressable } from "react-native";

export default function QuestionLayout() {
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
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: false,
          presentation: "card",
        }}
      />
    </Stack>
  );
}
