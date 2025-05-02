import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";

// 임시 데이터 (실제로는 API나 데이터베이스에서 가져올 예정)
const MOCK_QUESTIONS = {
  1: {
    id: 1,
    title: "프로세스와 스레드의 차이점은 무엇인가요?",
    difficulty: 3,
    category: "cs",
    description:
      "프로세스와 스레드의 개념, 차이점, 그리고 각각의 장단점에 대해 설명해주세요.",
    keywords: ["프로세스", "스레드", "멀티태스킹", "동시성"],
    tips: "실제 사례를 들어 설명하면 더 좋습니다.",
  },
  // ... 다른 문제들도 추가 예정
};

export default function QuestionDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const question = MOCK_QUESTIONS[Number(id) as keyof typeof MOCK_QUESTIONS];

  if (!question) {
    return (
      <SafeAreaView className="flex-1 bg-white">
        <View className="px-4 py-6">
          <Text>문제를 찾을 수 없습니다.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4 py-6 border-b border-gray-200">
        <Text className="text-2xl font-bold text-gray-900 mb-2">
          {question.title}
        </Text>
      </View>

      <View className="flex-1 p-4">
        <Text className="text-base text-gray-700 mb-6">
          {question.description}
        </Text>

        <View className="mb-6">
          <Text className="text-lg font-semibold mb-2">키워드</Text>
          <View className="flex-row flex-wrap gap-2">
            {question.keywords.map((keyword) => (
              <View
                key={keyword}
                className="bg-indigo-50 px-3 py-1 rounded-full"
              >
                <Text className="text-indigo-700">{keyword}</Text>
              </View>
            ))}
          </View>
        </View>

        <View className="mb-6">
          <Text className="text-lg font-semibold mb-2">팁</Text>
          <Text className="text-gray-600">{question.tips}</Text>
        </View>
      </View>

      <View className="p-4 border-t border-gray-200">
        <Pressable
          onPress={() => {
            // 연습 시작 로직 구현 예정
          }}
          className="bg-indigo-600 rounded-xl py-4 active:opacity-70"
        >
          <Text className="text-white text-center font-semibold">
            연습 시작하기
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
