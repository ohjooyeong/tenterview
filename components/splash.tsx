import { View, Text } from "react-native";
import Animated, { BounceIn } from "react-native-reanimated";

export function Splash() {
  return (
    <View className="flex-1 bg-indigo-600 items-center justify-center">
      <Animated.View entering={BounceIn.delay(200)} className="items-center">
        <Text className="text-4xl mb-4">💭</Text>
        <Text className="text-4xl font-bold text-white mb-2">Tenterview</Text>
        <Text className="text-white text-xl opacity-80 font-Bold">
          10분 면접 준비
        </Text>
      </Animated.View>
    </View>
  );
}
