import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";

import LoginCard from "../../components/AuthCards/LoginCard";
import OtpCard from "../../components/AuthCards/OtpCard";
import { StatusBar } from "expo-status-bar";

const { width, height } = Dimensions.get("window");

export default function LoginScreen() {
  const [step, setStep] = useState("LOGIN"); // LOGIN | OTP

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("../../assets/app/splashImage/LoginBG.png")}
        style={styles.bg}
        resizeMode="cover"
      >
        <View style={styles.overlay} />

        <View style={styles.cardWrapper}>
          {step === "LOGIN" && <LoginCard onContinue={() => setStep("OTP")} />}

          {step === "OTP" && (
            <OtpCard onBack={() => setStep("LOGIN")} /> // onBack prop add kora holo
          )}
        </View>

        <Text style={styles.footer}>
          By Continuing, you agree to our <Text style={styles.link}>T&C</Text>{" "}
          and <Text style={styles.link}>Privacy Policy</Text>
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },

  bg: {
    flex: 1,
    height: "52%",
    width: "100%",
    alignItems: "center",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(46,46,116,0.15)",
  },

  cardWrapper: {
    position: "absolute",
    top: height * 0.33,
    width: width - 40,
  },

  footer: {
    position: "absolute",
    bottom: 32,
    width: width - 80,
    textAlign: "center",
    fontSize: 14,
    color: "#474747",
  },

  link: {
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});
