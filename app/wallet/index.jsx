import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import { ChevronLeft, ChevronRight } from "lucide-react-native";
// Navigation hook import kora holo
import { useNavigation } from "@react-navigation/native";

import WalletBalance from "../../components/Wallet/WalletBalance";
import EarningsCards from "../../components/Wallet/EarningsCards";
import RedeemHistory from "../../components/Wallet/RedeemHistory";
import EarningsDrawer from "../../components/Wallet/Drawer/EarningsDrawer";

const WalletScreen = () => {
  const [earningsVisible, setEarningsVisible] = useState(false);
  // Navigation object initialize kora holo
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <StatusBar style="dark" />
      <View style={styles.header}>
        {/* Back button-e goBack() function add kora holo */}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <ChevronLeft size={24} color="#1e293b" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Wallet</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <WalletBalance />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Earnings</Text>
        </View>
        <EarningsCards onPress={() => setEarningsVisible(true)} />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Redeem History</Text>
          <Text style={styles.subTitle}>(Last 7 Days)</Text>
          <TouchableOpacity style={styles.seeAllBtn}>
            <ChevronRight size={20} color="#374151" />
          </TouchableOpacity>
        </View>
        <RedeemHistory />
      </ScrollView>
      <EarningsDrawer
        visible={earningsVisible}
        onClose={() => setEarningsVisible(false)}
      />
    </SafeAreaView>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 40,
  },
  backBtn: {
    marginRight: 15,
    padding: 5, // Click area baranor jonno
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3f3f46",
    fontFamily: "Sora-Bold",
  },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 40 },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
    fontFamily: "Sora-Bold",
  },
  subTitle: {
    fontSize: 12,
    color: "#3f3f46",
    marginLeft: 8,
    fontFamily: "Sora-SemiBold",
  },
  seeAllBtn: { marginLeft: "auto" },
});
