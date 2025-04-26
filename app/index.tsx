import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { useState } from "react";

const ONBOARDING_DATA = [
  {
    title: "면접 준비의 시작",
    description:
      "10분만에 면접 준비를 시작해보세요.\n실전과 같은 환경에서 연습할 수 있습니다.",
    icon: "🎯",
  },
  {
    title: "다양한 카테고리",
    description:
      "CS, Frontend, Backend 등\n다양한 분야의 질문들을 준비했습니다.",
    icon: "📚",
  },
  {
    title: "실전 연습 모드",
    description: "타이머와 함께 실전처럼 연습하고\n나만의 답변을 기록해보세요.",
    icon: "⏱️",
  },
];

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < ONBOARDING_DATA.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentStep = ONBOARDING_DATA[currentIndex];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center px-4">
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          key={currentIndex}
          className="items-center"
        >
          <View className="w-20 h-20 items-center justify-center mb-8">
            <Text className="text-4xl">{currentStep.icon}</Text>
          </View>
          <Text className="text-2xl font-bold text-gray-900 mb-4 text-center">
            {currentStep.title}
          </Text>
          <Text className="text-base text-gray-600 text-center">
            {currentStep.description}
          </Text>
        </Animated.View>
      </View>

      <View className="px-4 pb-8">
        <View className="flex-row justify-center gap-2 mb-8">
          {ONBOARDING_DATA.map((_, index) => (
            <View
              key={index}
              className={`h-2 rounded-full ${
                index === currentIndex ? "w-4 bg-indigo-600" : "w-2 bg-gray-200"
              }`}
            />
          ))}
        </View>

        {currentIndex === ONBOARDING_DATA.length - 1 ? (
          <Pressable
            onPress={() => router.replace("/(root)/(tabs)")}
            className="bg-indigo-600 rounded-xl py-4 active:opacity-70"
          >
            <Text className="text-white text-center font-semibold">
              시작하기
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={handleNext}
            className="bg-indigo-600 rounded-xl py-4 active:opacity-70"
          >
            <Text className="text-white text-center font-semibold">다음</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
}
