import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { CategoryFilter } from "./_components/category-filter";

// 임시 데이터
const MOCK_QUESTIONS = {
  cs: [
    { id: 1, title: "프로세스와 스레드의 차이점은 무엇인가요?", difficulty: 3 },
    {
      id: 2,
      title: "데드락(교착상태)이란 무엇이며, 발생 조건은?",
      difficulty: 4,
    },
    { id: 3, title: "메모리 단편화란 무엇인가요?", difficulty: 2 },
  ],
  frontend: [
    { id: 1, title: "Virtual DOM이란 무엇인가요?", difficulty: 3 },
    { id: 2, title: "React의 생명주기에 대해 설명해주세요.", difficulty: 4 },
    { id: 3, title: "CSR과 SSR의 차이점은?", difficulty: 3 },
  ],
  backend: [
    { id: 1, title: "RESTful API란 무엇인가요?", difficulty: 2 },
    {
      id: 2,
      title: "트랜잭션의 ACID 속성에 대해 설명해주세요.",
      difficulty: 4,
    },
    {
      id: 3,
      title: "인덱스란 무엇이며, 어떤 경우에 사용하나요?",
      difficulty: 3,
    },
  ],
};

const CATEGORY_NAMES = {
  cs: "Computer Science",
  frontend: "Frontend",
  backend: "Backend",
};

const CATEGORIES = [
  { id: "all", name: "전체" },
  { id: "cs", name: "CS" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
];

export default function CategoryQuestions() {
  const { category_id } = useLocalSearchParams<{ category_id: string }>();
  const questions =
    category_id === "all"
      ? Object.values(MOCK_QUESTIONS).flat()
      : MOCK_QUESTIONS[category_id as keyof typeof MOCK_QUESTIONS] || [];

  const handleCategoryChange = (newCategory: string) => {
    router.setParams({ category_id: newCategory });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4 py-6 border-b border-gray-200">
        <View className="flex-row items-center mb-2">
          <Pressable onPress={() => router.back()} className="mr-3">
            <Ionicons name="arrow-back" size={24} color="#000" />
          </Pressable>
          <Text className="text-2xl font-bold">
            {category_id === "all"
              ? "전체"
              : CATEGORY_NAMES[category_id as keyof typeof CATEGORY_NAMES]}
          </Text>
        </View>
        <Text className="text-gray-600">
          총 {questions.length}개의 면접 질문
        </Text>
      </View>

      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category_id}
        onSelectCategory={handleCategoryChange}
      />

      <ScrollView className="flex-1">
        <View className="p-4 gap-3">
          {questions.map((question) => (
            <Pressable
              key={question.id + question.title}
              onPress={() =>
                router.push({
                  pathname: "/(root)/questions/[id]",
                  params: { id: question.id },
                })
              }
              className="bg-white border border-gray-200 rounded-lg p-4 active:opacity-70"
            >
              <View className="flex-row justify-between items-center mb-2">
                <Text className="text-sm text-gray-600">
                  문제 {question.id}
                </Text>
                <View className="flex-row items-center">
                  <Ionicons name="star" size={16} color="#FDB022" />
                  <Text className="text-sm text-yellow-500 ml-1">
                    {question.difficulty}
                  </Text>
                </View>
              </View>
              <Text className="text-base font-medium">{question.title}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
