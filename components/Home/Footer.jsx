import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Home, Briefcase, Bell, User } from "lucide-react-native";
// Router ebong Pathname import kora holo
import { useRouter, usePathname } from "expo-router";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Navigation Logic handling function
  const handleNavigation = (label) => {
    if (label === "Home") {
      router.push("/home");
    } else if (label === "Account") {
      router.push("/profile");
    } else {
      router.push("/not-found");
    }
  };

  return (
    <View style={styles.footer}>
      <FooterItem
        label="Home"
        active={pathname === "/home" || pathname === "/"}
        IconComponent={Home}
        onPress={() => handleNavigation("Home")}
      />
      <FooterItem
        label="Jobs"
        active={pathname === "/jobs"}
        IconComponent={Briefcase}
        onPress={() => handleNavigation("Jobs")}
      />
      <FooterItem
        label="Notification"
        active={pathname === "/notifications"}
        IconComponent={Bell}
        onPress={() => handleNavigation("Notification")}
      />
      <FooterItem
        label="Account"
        active={pathname === "/profile"}
        IconComponent={User}
        onPress={() => handleNavigation("Account")}
      />
    </View>
  );
};

const FooterItem = ({ label, active, IconComponent, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress} activeOpacity={0.6}>
    <IconComponent
      size={24}
      color={active ? "#1e1b4b" : "#9CA3AF"}
      strokeWidth={active ? 2.5 : 2}
    />
    <Text style={[styles.label, active && styles.activeLabel]}>{label}</Text>
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
    paddingBottom: 10,
    // Premium feel dewar jonno shadow add kora holo
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
    fontFamily: "Sora-Regular", // Sora font maintain kora holo
  },
  activeLabel: {
    color: "#1e1b4b",
    fontWeight: "600",
  },
});
