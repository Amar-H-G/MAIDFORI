import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { LogOut } from "lucide-react-native";

const LogOutButton = () => (
  <Pressable
    style={({ pressed }) => [
      styles.button,
      pressed ? styles.buttonActive : styles.buttonInactive,
    ]}
  >
    {({ pressed }) => (
      <>
        <Text style={[styles.text, pressed && styles.textActive]}>Log Out</Text>
        <LogOut
          size={20}
          color={pressed ? "white" : "#ef4444"}
          style={styles.icon}
        />
      </>
    )}
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 20, // Main screen er padding onujayi thik thakbe
    marginTop: 40,
    marginBottom: 30,
    height: 56,
    borderRadius: 28,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  // Default Style (Inactive)
  buttonInactive: {
    backgroundColor: "transparent",
    borderColor: "#fee2e2",
  },
  // Hover/Press Style (Active)
  buttonActive: {
    backgroundColor: "#ef4444", // Full background color hobe
    borderColor: "#ef4444",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#ef4444", // Default text color
  },
  textActive: {
    color: "white", // Pressed/Hover hole white hobe
  },
  icon: {
    marginLeft: 10,
  },
});

export default LogOutButton;
