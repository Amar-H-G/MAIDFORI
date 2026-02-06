import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Phone } from "lucide-react-native";
import { useRouter } from "expo-router";

export default function LoginCard({ onContinue }) {
  const router = useRouter();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Login Your Account</Text>

      <Text style={styles.subtitle}>
        Enter Mobile Number, we’ll send an OTP verification code to you.
      </Text>

      <View style={styles.inputBox}>
        <Phone size={20} color="#777" style={{ marginRight: 12 }} />
        <TextInput
          placeholder="Your Mobile Number"
          placeholderTextColor="#777"
          keyboardType="number-pad"
          style={styles.input}
        />
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.button} onPress={onContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      {/* Register Text */}
      <View style={styles.registerRow}>
        <Text style={styles.registerText}>If new user? </Text>
        <TouchableOpacity onPress={() => router.push("/auth/register")}>
          <Text style={styles.registerLink}>Register now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    paddingVertical: 28,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#2E2E74",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 14,
    color: "#474747",
    textAlign: "center",
    lineHeight: 21,
    marginBottom: 22,
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 52,
    marginBottom: 22,
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: "#000",
  },

  button: {
    height: 48,
    backgroundColor: "#ED6E0A",
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "600",
  },

  /* 🔽 New styles (small text) */
  registerRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
  },

  registerText: {
    fontSize: 12,
    color: "#474747",
  },

  registerLink: {
    fontSize: 12,
    color: "#ED6E0A",
    fontWeight: "600",
  },
});
