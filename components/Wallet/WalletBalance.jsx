import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";

const WalletBalance = () => (
  <View style={styles.balanceCard}>
    {/* Background Static Pattern Image */}
    <Image
      source={require("../../assets/app/wallet/walletBG2.png")}
      style={styles.bgPattern}
      resizeMode="contain"
    />
    <View>
      <Text style={styles.label}>Wallet Balance</Text>
      <Text style={styles.amount}>₹1,440</Text>
    </View>
    <TouchableOpacity
      style={styles.addMoneyBtn}
      onPress={() => router.push("/wallet/recharge")}
    >
      <Text style={styles.addMoneyText}>Add Money</Text>
    </TouchableOpacity>
  </View>
);

export default WalletBalance;

const styles = StyleSheet.create({
  balanceCard: {
    backgroundColor: "#F2F5F7",
    borderRadius: 20,
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    marginTop: 10,
  },
  bgPattern: {
    position: "absolute",
    left: 90,
    top: -10,
    width: 150,
    height: 120,
    opacity: 0.1,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4b5563",
    fontFamily: "Sora-Bold",
  },
  amount: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1e1b4b",
    marginTop: 5,
    fontFamily: "Sora-Bold",
  },
  addMoneyBtn: {
    backgroundColor: "#f97316",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  addMoneyText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    fontFamily: "Sora-SemiBold",
  },
});
