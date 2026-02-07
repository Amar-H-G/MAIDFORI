import React from "react";
import { View, Text, StyleSheet } from "react-native";

const transactions = [
  {
    id: "123456AA87",
    date: "08 July, 2024",
    amount: "₹1,455",
    status: "Pending",
    statusColor: "#d97706",
  },
  {
    id: "123456AA87",
    date: "08 July, 2024",
    amount: "₹1,455",
    status: "Failed",
    statusColor: "#f87171",
  },
  {
    id: "123456AA87",
    date: "08 July, 2024",
    amount: "₹1,455",
    status: "Successful",
    statusColor: "#4d7c0f",
  },
];

const RedeemHistory = () => (
  <View style={styles.historyContainer}>
    {transactions.map((item, index) => (
      <View
        key={index}
        style={[
          styles.item,
          index === transactions.length - 1 && { borderBottomWidth: 0 },
        ]}
      >
        <View style={styles.row}>
          <View>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.transId}>Transaction ID: {item.id}</Text>
            <Text style={styles.amount}>{item.amount}</Text>
          </View>
          <View
            style={[styles.statusBadge, { backgroundColor: item.statusColor }]}
          >
            <Text style={styles.statusText}>{item.status}</Text>
          </View>
        </View>
      </View>
    ))}
  </View>
);

export default RedeemHistory;

const styles = StyleSheet.create({
  historyContainer: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    padding: 15,
  },
  item: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  date: { fontSize: 12, fontWeight: "bold", color: "#3f3f46", marginBottom: 4 },
  transId: { fontSize: 12, color: "#6b7280", marginBottom: 6 },
  amount: { fontSize: 13, fontWeight: "bold", color: "#1e1b4b" },
  statusBadge: { paddingVertical: 4, paddingHorizontal: 12, borderRadius: 20 },
  statusText: { color: "white", fontSize: 11, fontWeight: "500" },
});
