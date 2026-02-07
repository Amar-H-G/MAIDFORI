import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Headphones, ReceiptText, MapPin } from "lucide-react-native";

const QuickActions = ({ onOpenHistory }) => (
  <View style={styles.grid}>
    <TouchableOpacity style={[styles.box, { backgroundColor: "#fae8ff" }]}>
      <Headphones size={24} color="#a21caf" />
      <Text style={styles.boxText}>Help &{"\n"}Support</Text>
    </TouchableOpacity>

    {/* Transaction History Clickable Card */}
    <TouchableOpacity
      style={[styles.box, { backgroundColor: "#f0f2f0" }]}
      onPress={onOpenHistory}
    >
      <ReceiptText size={24} color="#4d7c0f" />
      <Text style={styles.boxText}>Transaction{"\n"}History</Text>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.box, { backgroundColor: "#e0f7f6" }]}>
      <MapPin size={24} color="#0f766e" />
      <Text style={styles.boxText}>Service{"\n"}Location</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingHorizontal: 20,
    marginTop: 15,
  },
  box: {
    width: "31%",
    height: 110,
    borderRadius: 16,
    padding: 12,
    justifyContent: "space-between",
  },
  boxText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#374151",
    fontFamily: "Sora-Bold",
  },
});

export default QuickActions;
