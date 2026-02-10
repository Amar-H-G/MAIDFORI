import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  ArrowLeft,
  Calendar,
  Check,
  ChevronDown,
  Mail,
  MessageCircle,
  Phone,
  User,
} from "lucide-react-native";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function RegisterScreen() {
  const [gender, setGender] = useState("Female");
  const [sameWhatsapp, setSameWhatsapp] = useState(true);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ===== Header ===== */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <ArrowLeft size={22} color="#0C0C26" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Register Now</Text>
        </View>

        {/* ===== Full Name ===== */}
        <Input icon={<User size={18} color="#777" />} placeholder="Full Name" />

        {/* ===== Gender ===== */}
        <View style={styles.genderRow}>
          <GenderButton
            label="Female"
            selected={gender === "Female"}
            onPress={() => setGender("Female")}
          />
          <GenderButton
            label="Male"
            selected={gender === "Male"}
            onPress={() => setGender("Male")}
          />
        </View>

        {/* ===== DOB ===== */}
        <Input
          icon={<Calendar size={18} color="#777" />}
          placeholder="Date of Birth"
        />

        {/* ===== Religion ===== */}
        <Input
          icon={<User size={18} color="#777" />}
          placeholder="Select Religion"
          rightIcon={<ChevronDown size={18} color="#777" />}
        />

        {/* ===== Mobile ===== */}
        <Input
          icon={<Phone size={18} color="#777" />}
          placeholder="Mobile Number"
          keyboardType="number-pad"
        />

        {/* ===== Same Whatsapp ===== */}
        <TouchableOpacity
          style={styles.checkboxRow}
          onPress={() => setSameWhatsapp(!sameWhatsapp)}
          activeOpacity={0.8}
        >
          <View
            style={[styles.checkbox, sameWhatsapp && styles.checkboxActive]}
          >
            {sameWhatsapp && <Check size={14} color="#FFF" />}
          </View>
          <Text style={styles.checkboxText}>Same for Whatsapp</Text>
        </TouchableOpacity>

        {/* ===== Whatsapp ===== */}
        <Input
          icon={<MessageCircle size={18} color="#777" />}
          placeholder="Whatsapp Number"
          keyboardType="number-pad"
        />

        {/* ===== Alternate Mobile ===== */}
        <Input
          icon={<Phone size={18} color="#777" />}
          placeholder="Alternate Mobile Number"
          keyboardType="number-pad"
        />

        {/* ===== Email ===== */}
        <Input
          icon={<Mail size={18} color="#777" />}
          placeholder="Email Address"
          keyboardType="email-address"
        />

        {/* ===== Continue ===== */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/auth/completeProfile")}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

        {/* ===== Login Now (NEW) ===== */}
        <View style={styles.loginRow}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/auth/login")}>
            <Text style={styles.loginLink}>Login Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ================= INPUT ================= */
function Input({ icon, placeholder, rightIcon, ...props }) {
  return (
    <View style={styles.inputBox}>
      <View style={styles.iconLeft}>{icon}</View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#777"
        style={styles.input}
        {...props}
      />
      {rightIcon && <View>{rightIcon}</View>}
    </View>
  );
}

/* ================= GENDER ================= */
function GenderButton({ label, selected, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={[
        styles.genderBtn,
        selected ? styles.genderActive : styles.genderInactive,
      ]}
    >
      <View
        style={[
          styles.radio,
          selected ? styles.radioActive : styles.radioInactive,
        ]}
      >
        {selected && <View style={styles.radioDot} />}
      </View>
      <Text style={[styles.genderText, selected && { color: "#FFF" }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 30,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 20,
    paddingTop: 30,
    marginBottom: 30,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#474747",
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    paddingHorizontal: 20,
    height: 52,
    marginHorizontal: 20,
    marginBottom: 20,
  },

  iconLeft: {
    marginRight: 12,
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: "#000",
  },

  genderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 16,
  },

  genderBtn: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    borderRadius: 999,
    gap: 10,
  },

  genderActive: {
    backgroundColor: "#045FA2",
  },

  genderInactive: {
    backgroundColor: "#F7F6FC",
  },

  genderText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2E2E74",
  },

  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
  },

  radioActive: {
    borderWidth: 2,
    borderColor: "#FFF",
  },

  radioInactive: {
    borderWidth: 1.5,
    borderColor: "#045FA2",
  },

  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#FFF",
  },

  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 16,
    gap: 10,
  },

  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: "#ED6E0A",
    justifyContent: "center",
    alignItems: "center",
  },

  checkboxActive: {
    backgroundColor: "#ED6E0A",
  },

  checkboxText: {
    fontSize: 14,
    color: "#474747",
  },

  button: {
    height: 52,
    backgroundColor: "#ED6E0A",
    borderRadius: 999,
    marginHorizontal: 20,
    marginTop: 90,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "600",
  },

  /* 🔽 NEW LOGIN ROW */
  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
    marginBottom: 30,
  },

  loginText: {
    fontSize: 12,
    color: "#474747",
  },

  loginLink: {
    fontSize: 12,
    color: "#ED6E0A",
    fontWeight: "600",
  },
});
