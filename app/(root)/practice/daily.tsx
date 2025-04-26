import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DailyChallenge() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4 py-6">
        <Text className="text-2xl font-bold">오늘의 챌린지</Text>
        {/* Add your daily challenge content here */}
      </View>
    </SafeAreaView>
  );
}
