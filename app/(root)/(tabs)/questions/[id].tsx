import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";

export default function CategoryQuestions() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4 py-6">
        <Text className="text-2xl font-bold">{id} 카테고리 문제</Text>
        {/* Add your category-specific questions here */}
      </View>
    </SafeAreaView>
  );
}
