import { View, Text, ScrollView, Pressable } from "react-native";

interface CategoryFilterProps {
  categories: {
    id: string;
    name: string;
  }[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <View className="border-b border-gray-200">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8 }}
      >
        <View className="flex-row gap-2">
          {categories.map((category) => (
            <Pressable
              key={category.id}
              onPress={() => onSelectCategory(category.id)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category.id
                  ? "bg-indigo-600"
                  : "bg-gray-100"
              }`}
            >
              <Text
                className={`font-medium ${
                  selectedCategory === category.id
                    ? "text-white"
                    : "text-gray-600"
                }`}
              >
                {category.name}
              </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
