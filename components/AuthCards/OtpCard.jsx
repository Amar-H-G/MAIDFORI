import { useRouter } from "expo-router";
import { Pencil } from "lucide-react-native";
import { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function OtpCard() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    // Sudhu number accept korbe
    newOtp[index] = text.replace(/[^0-9]/g, "");
    setOtp(newOtp);

    // Auto focus to next box
    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    // Backspace dile ager box-e jabe
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.card}>
      {/* Title */}
      <Text style={styles.title}>OTP Verification</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>Enter the 4-digit code sent to</Text>

      {/* Mobile Number + Edit */}
      <View style={styles.mobileRow}>
        <Text style={styles.mobile}>+91 9812345678</Text>
        <View style={styles.editIcon}>
          <Pencil size={12} color="#FFF" />
        </View>
      </View>

      {/* OTP Input Fields */}
      <View style={styles.otpRow}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={[
              styles.otpBox,
              focusedIndex === index && styles.otpBoxFocused, // Click korle red border
            ]}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => setFocusedIndex(null)}
            keyboardType="numeric"
            maxLength={1}
            textAlign="center"
            selectionColor="#FF0000" // Cursor color red
          />
        ))}
      </View>

      {/* Bottom Row */}
      <View style={styles.bottomRow}>
        <Text style={styles.didntGet}>Didn’t get it?</Text>
        <Text style={styles.timer}>00:12</Text>
      </View>

      {/* Verify Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/auth/verification")}
      >
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 32,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#2E2E74",
    textAlign: "center",
    lineHeight: 30,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#474747",
    textAlign: "center",
    lineHeight: 21,
  },
  mobileRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
    gap: 8,
  },
  mobile: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0C0C26",
  },
  editIcon: {
    width: 24,
    height: 24,
    borderRadius: 999,
    backgroundColor: "#ED6E0A",
    justifyContent: "center",
    alignItems: "center",
  },
  otpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    paddingHorizontal: 50,
  },
  otpBox: {
    width: 48,
    height: 48,
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D5D2D2",
    fontSize: 18,
    fontWeight: "bold",
    color: "#33266B",
  },
  otpBoxFocused: {
    borderColor: "#FF0000", // Focused state-e Red border
    borderWidth: 1.5,
    backgroundColor: "#FFF",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    paddingHorizontal: 10,
  },
  didntGet: {
    fontSize: 14,
    fontWeight: "600",
    color: "#474747",
  },
  timer: {
    fontSize: 16,
    fontWeight: "700",
    color: "#33266B",
  },
  button: {
    marginTop: 24,
    height: 48,
    backgroundColor: "#ED6E0A",
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
});
