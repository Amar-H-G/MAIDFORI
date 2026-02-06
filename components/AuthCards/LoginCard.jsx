import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Phone } from "lucide-react-native";

export default function LoginCard({ onContinue }) {
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

      <TouchableOpacity style={styles.button} onPress={onContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
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
});
