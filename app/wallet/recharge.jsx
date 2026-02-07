import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { ChevronLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import PaymentMethodDrawer from "../../components/Recharge/PaymentMethodDrawer";

const RechargeWallet = () => {
  const navigation = useNavigation();
  //   const [amount, setAmount] = useState("");
  const [paymentDrawerVisible, setPaymentDrawerVisible] = useState(false);
  const [amount, setAmount] = useState("470");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* Keyboard avoid korar jonno and screen er jekono jaygay click korle keyboard close hobe */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.goBack()}
            >
              <ChevronLeft size={24} color="#1e293b" strokeWidth={3} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Recharge Wallet</Text>
          </View>

          {/* Form Content */}
          <View style={styles.content}>
            <Text style={styles.label}>Amount</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter amount"
                placeholderTextColor="#94a3b8"
                keyboardType="numeric"
                value={amount}
                onChangeText={(text) => setAmount(text)}
              />
            </View>
          </View>

          {/* Bottom Fixed Button */}
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.bottomContainer}
          >
            <TouchableOpacity
              style={[
                styles.payBtn,
                { opacity: amount.length > 0 ? 1 : 0.6 }, // Amount na thakle ektu dim thakbe
              ]}
              disabled={amount.length === 0}
              activeOpacity={0.8}
              onPress={() => setPaymentDrawerVisible(true)}
            >
              <Text style={styles.payBtnText}>Continue to Pay</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
      <PaymentMethodDrawer
        visible={paymentDrawerVisible}
        onClose={() => setPaymentDrawerVisible(false)}
        amount={amount}
      />
    </SafeAreaView>
  );
};

export default RechargeWallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: Platform.OS === "android" ? 50 : 10,
  },
  backBtn: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e1b4b",
    fontFamily: "Sora-Bold",
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#1e1b4b",
    fontFamily: "Sora-Bold",
    marginBottom: 8,
  },
  inputContainer: {
    height: 56,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 16,
    paddingHorizontal: 15,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  input: {
    fontSize: 14,
    color: "#1e293b",
    fontFamily: "Poppins-Regular",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
    marginBottom: Platform.OS === "android" ? 40 : 0,
  },
  payBtn: {
    backgroundColor: "#ED6E0A", // Figma-r orange-orange color
    height: 56,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  payBtnText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Sora-SemiBold",
  },
});
