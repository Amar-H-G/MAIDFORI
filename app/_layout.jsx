import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <StatusBar translucent backgroundColor="transparent" />
      <Stack.Screen name="splash" />
      <Stack.Screen name="auth" />
      <Stack.Screen name="home" />
      <Stack.Screen name="jobDetailes" />
      <Stack.Screen name="wallet" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="not-found" />
    </Stack>
  );
}
