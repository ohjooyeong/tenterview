import { View, ScrollView, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="px-4 py-6">
          <Text className="text-2xl font-bold text-gray-900">
            안녕하세요 👋
          </Text>
          <Text className="mt-2 text-gray-600">
            오늘도 면접 준비 시작해볼까요?
          </Text>
        </View>

        <View className="px-4 mb-6">
          <View className="bg-indigo-50 rounded-xl p-4">
            <Text className="text-lg font-semibold text-gray-900">
              빠른 시작
            </Text>
            <View className="flex-row mt-4 space-x-3">
              <Link href="/practice/random" asChild>
                <Pressable className="flex-1 bg-white p-4 rounded-lg active:opacity-70">
                  <Text className="text-center text-indigo-600">랜덤 문제</Text>
                </Pressable>
              </Link>
              <Link href="/practice/daily" asChild>
                <Pressable className="flex-1 bg-white p-4 rounded-lg active:opacity-70">
                  <Text className="text-center text-indigo-600">
                    오늘의 챌린지
                  </Text>
                </Pressable>
              </Link>
            </View>
          </View>
        </View>

        <View className="px-4 mb-6">
          <Text className="text-lg font-semibold text-gray-900 mb-3">
            학습 현황
          </Text>
          <View className="bg-white border border-gray-200 rounded-lg p-4">
            <View className="flex-row justify-between">
              <View>
                <Text className="text-gray-500">오늘 푼 문제</Text>
                <Text className="text-2xl font-bold text-gray-900">3</Text>
              </View>
              <View>
                <Text className="text-gray-500">연속 학습</Text>
                <Text className="text-2xl font-bold text-gray-900">5일</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="px-4 mb-6">
          <Text className="text-lg font-semibold text-gray-900 mb-3">
            카테고리
          </Text>
          <View className="grid grid-cols-2 gap-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={{
                  pathname: `/questions/[id]`,
                  params: {
                    id: category.id,
                  },
                }}
                asChild
              >
                <Pressable className="bg-white border border-gray-200 p-4 rounded-lg active:opacity-70">
                  <Text className="text-gray-900 font-medium">
                    {category.name}
                  </Text>
                  <Text className="text-gray-500 text-sm mt-1">
                    {category.count}문제
                  </Text>
                </Pressable>
              </Link>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const categories = [
  { id: "cs", name: "CS", count: 42 },
  { id: "frontend", name: "Frontend", count: 35 },
  { id: "backend", name: "Backend", count: 28 },
  { id: "database", name: "Database", count: 21 },
  { id: "network", name: "Network", count: 18 },
  { id: "system", name: "System Design", count: 15 },
];
