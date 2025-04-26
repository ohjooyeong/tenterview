import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Splash } from "@/components/splash";
import "../global.css";

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 3000,
  fade: true,
});

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        // 스플래시 스크린을 숨기고 커스텀 스플래시를 표시
        await SplashScreen.hideAsync();
        // 2초 후에 커스텀 스플래시 화면 숨기기
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    }
    prepare();
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(root)" options={{ headerShown: false }} />
    </Stack>
  );
}
