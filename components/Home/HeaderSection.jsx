import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import { Wallet } from "lucide-react-native";
import { router } from "expo-router";

const HeaderSection = () => {
  return (
    <View style={styles.headerContainer}>
      <StatusBar barStyle="light-content" />

      {/* CENTER BACKGROUND LOGO */}
      <Image
        source={require("../../assets/app/home/header.png")}
        style={styles.centerLogo}
        resizeMode="contain"
      />

      <View style={styles.headerTop}>
        <View style={styles.welcomeContainer}>
          <View style={styles.verticalLine} />
          <View>
            <Text style={styles.helloText}>Hello, Amar</Text>
            <Text style={styles.greetingText}>Good morning</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.walletCircle}
          onPress={() => router.push("/wallet")}
        >
          <Wallet size={20} color="#1e1b4b" strokeWidth={2.5} />
        </TouchableOpacity>
      </View>

      <Text style={styles.joinDateText}>Joined On : 27 March, 2025</Text>
    </View>
  );
};

export default HeaderSection;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#2E2E74",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? 50 : 10,
    paddingBottom: 22,
    position: "relative",
  },

  /* NEW STYLE FOR CENTER LOGO */
  centerLogo: {
    position: "absolute",
    width: 75,
    height: 86,
    alignSelf: "center",
    top: 80,
    opacity: 1,
    zIndex: 0,
  },

  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    zIndex: 1, // content always above logo
  },

  welcomeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  verticalLine: {
    width: 3,
    height: 32,
    backgroundColor: "white",
    marginRight: 10,
    borderRadius: 2,
  },

  helloText: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 13,
  },

  greetingText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  walletCircle: {
    width: 42,
    height: 42,
    backgroundColor: "white",
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  joinDateText: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 12,
    marginTop: 15,
    marginLeft: 13,
    zIndex: 1,
  },
});
