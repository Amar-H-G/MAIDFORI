import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Pencil } from "lucide-react-native"; // Edit icon er jonno
import ProfileHeader from "../../components/Profile/ProfileHeader";
import WalletBalance from "../../components/Wallet/WalletBalance";
import QuickActions from "../../components/Profile/QuickActions";
import MenuOptions from "../../components/Profile/MenuOptions";
import LogOutButton from "../../components/Profile/LogOutButton";
import WalletHistoryDrawer from "../../components/Profile/Transaction/WalletHistoryDrawer";
import { StatusBar } from "expo-status-bar";

const MainProfileScreen = () => {
  const [historyVisible, setHistoryVisible] = useState(false);
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <ProfileHeader />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <WalletBalance />
        </View>
        {/* User Info Section with Edit Button */}

        <View style={styles.quickContainer}>
          <View style={styles.userSection}>
            <View style={styles.userInfoRow}>
              <View>
                <View style={styles.nameRow}>
                  <Text style={styles.welcomeText}>Welcome, </Text>
                  <Text style={styles.userName}>Jhon</Text>
                  <View style={styles.verifiedCheck} />
                </View>
                <Text style={styles.phoneText}>+91 98******04</Text>
              </View>

              <TouchableOpacity style={styles.editBtn}>
                <Pencil size={20} color="#71717a" />
              </TouchableOpacity>
            </View>
          </View>
          <QuickActions onOpenHistory={() => setHistoryVisible(true)} />
        </View>
        <MenuOptions />
        <LogOutButton />
      </ScrollView>
      <WalletHistoryDrawer
        visible={historyVisible}
        onClose={() => setHistoryVisible(false)}
      />
    </SafeAreaView>
  );
};

export default MainProfileScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: 30,
  },
  header: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  quickContainer: {
    paddingHorizontal: 20,
    backgroundColor: "#f8f9fa",
    marginTop: 20,
    paddingTop: 0,
    paddingBottom: 25,
  },
  userSection: {
    marginTop: 25,
    marginBottom: 20,
  },
  userInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 18,
    color: "#1e1b4b",
    fontWeight: "bold",
    fontFamily: "Sora-Bold",
  },
  userName: {
    fontSize: 18,
    color: "#1e1b4b",
    fontFamily: "Poppins-Regular",
  },
  verifiedCheck: {
    width: 18,
    height: 18,
    backgroundColor: "#22c55e",
    borderRadius: 9,
    marginLeft: 6,
  },
  phoneText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e1b4b",
    marginTop: 4,
    fontFamily: "Sora-Bold",
  },
  editBtn: {
    width: 44,
    height: 44,
    backgroundColor: "white",
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#f1f5f9",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
});
