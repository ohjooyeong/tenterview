import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RandomPractice() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4 py-6">
        <Text className="text-2xl font-bold">랜덤 문제 연습</Text>
        {/* Add your random practice content here */}
      </View>
    </SafeAreaView>
  );
}
