import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const AvailabilityToggle = () => {
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <View style={styles.toggleWrapper}>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          onPress={() => setIsAvailable(true)}
          style={[styles.btn, isAvailable && styles.activeBtn]}
        >
          <Text style={[styles.text, isAvailable && styles.activeText]}>
            Available
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsAvailable(false)}
          style={[styles.btn, !isAvailable && styles.activeBtn]}
        >
          <Text style={[styles.text, !isAvailable && styles.activeText]}>
            Not Available
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AvailabilityToggle;

const styles = StyleSheet.create({
  toggleWrapper: { paddingHorizontal: 20, marginTop: 25 },
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "#E5E7EB",
    borderRadius: 30,
    padding: 5,
  },
  btn: { flex: 1, paddingVertical: 12, alignItems: "center", borderRadius: 25 },
  activeBtn: { backgroundColor: "#2E2E74" },
  text: { color: "#1e1b4b", fontWeight: "600" },
  activeText: { color: "white" },
});
