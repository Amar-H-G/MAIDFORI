import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Toast from "react-native-toast-message";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

// 1. Custom Toast Configuration toiri kora holo
const toastConfig = {
  /* Success Toast Design */
  success: ({ text1, props }) => (
    <View style={[styles.toastBase, styles.toastSuccess]}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{text1}</Text>
        {props?.code && (
          <Text style={styles.subText}>Status Code: {props.code}</Text>
        )}
      </View>
    </View>
  ),

  /* Error Toast Design */
  error: ({ text1, props }) => (
    <View style={[styles.toastBase, styles.toastError]}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{text1}</Text>
        {props?.code && (
          <Text style={styles.subText}>Error Code: {props.code}</Text>
        )}
      </View>
    </View>
  ),
};

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="splash" />
        <Stack.Screen name="auth" />
        <Stack.Screen name="home" />
        <Stack.Screen name="jobDetailes" />
        <Stack.Screen name="jobs" />
        <Stack.Screen name="wallet" />
        <Stack.Screen name="profile" />
        <Stack.Screen name="not-found" />
      </Stack>

      {/* StatusBar setup */}
      <StatusBar translucent backgroundColor="transparent" />

      <Toast config={toastConfig} />
    </>
  );
}

const styles = StyleSheet.create({
  toastBase: {
    height: 65,
    width: width * 0.9, // Screen-er 90% width
    borderRadius: 12,
    paddingHorizontal: 20,
    justifyContent: "center",
    marginTop: 10,
    // Right alignment simulation for floating feel
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  toastSuccess: {
    backgroundColor: "#4d7c0f", // Dark Green
    borderLeftWidth: 8,
    borderLeftColor: "#365314",
  },
  toastError: {
    backgroundColor: "#ef4444", // Dark Red
    borderLeftWidth: 8,
    borderLeftColor: "#991b1b",
  },
  textContainer: {
    justifyContent: "center",
  },
  titleText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Sora", // Tomar app-er design theme
  },
  subText: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 12,
    marginTop: 2,
  },
});
