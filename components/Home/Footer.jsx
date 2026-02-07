import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// Lucide icons import korchi
import { Home, Briefcase, Bell, User } from "lucide-react-native";

const Footer = () => (
  <View style={styles.footer}>
    <FooterItem label="Home" active IconComponent={Home} />
    <FooterItem label="Jobs" IconComponent={Briefcase} />
    <FooterItem label="Notification" IconComponent={Bell} />
    <FooterItem label="Account" IconComponent={User} />
  </View>
);

const FooterItem = ({ label, active, IconComponent }) => (
  <TouchableOpacity style={styles.item}>
    {/* Lucide Icon Component render hocche */}
    <IconComponent
      size={24}
      color={active ? "#1e1b4b" : "#9CA3AF"}
      strokeWidth={active ? 2.5 : 2}
    />
    <Text
      style={[styles.label, active && { color: "#1e1b4b", fontWeight: "600" }]}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

export default Footer;

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    height: 75,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingBottom: 10, // iPhone notch-er jonyo ektu extra space
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 10,
    color: "#9CA3AF",
    marginTop: 4,
  },
});
