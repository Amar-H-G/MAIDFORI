import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const { width } = Dimensions.get("window");

export default function VerificationScreen() {
  // ⏳ Auto redirect after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* ===== Icon Image ===== */}
        <Image
          source={require("../../assets/app/splashImage/verify.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.divider} />

        <Text style={styles.title}>Verification in progress</Text>

        <Text style={styles.wait}>Please wait...</Text>

        <Text style={styles.desc}>
          We&apos;re processing your verification. The status will be updated
          within 24 hours.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  image: {
    width: 122,
    height: 124,
    marginBottom: 18,
  },

  divider: {
    width: 156,
    height: 4,
    borderRadius: 999,
    backgroundColor: "#B6B1B1",
    opacity: 0.6,
    marginBottom: 22,
  },

  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#2E2E74",
    textAlign: "center",
    lineHeight: 30,
    marginBottom: 6,
  },

  wait: {
    fontSize: 18,
    fontWeight: "700",
    color: "#474747",
    textAlign: "center",
    marginBottom: 10,
  },

  desc: {
    fontSize: 14,
    fontWeight: "400",
    color: "#474747",
    textAlign: "center",
    lineHeight: 21,
    maxWidth: width - 40,
  },
});
