import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const MenuOptions = () => {
  const menuItems = [
    "Help & Support",
    "Privacy Policy",
    "Refund & cancellation Policy",
    "Report Issue",
  ];
  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <View key={index}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>{item}</Text>
          </TouchableOpacity>
          {index < menuItems.length - 1 && <View style={styles.divider} />}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 20,
  },
  menuItem: { paddingVertical: 18 },
  menuText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1e293b",
    fontFamily: "Sora-SemiBold",
  },
  divider: { height: 1, backgroundColor: "#e5e7eb" },
});

export default MenuOptions;
