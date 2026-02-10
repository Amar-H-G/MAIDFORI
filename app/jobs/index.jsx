import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ChevronLeft } from "lucide-react-native";
import JobHomeCard from "../../components/jobs/jobHomeCard";
import AcceptedJobCard from "../../components/jobs/acceptedJobCard";
import CompleteJobCard from "../../components/jobs/completeJobCard"; // Import Complete Card
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import OTPVerificationModal from "../../components/OtpVerification/jobStartWithOtp";
import { StatusBar } from "expo-status-bar";

const JobsScreen = () => {
  const [activeTab, setActiveTab] = useState("Upcoming");
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  };

  const tabs = ["Upcoming", "Accepted", "Complete"];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="white" translucent={false} />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={handleBack}>
          <ChevronLeft size={24} color="#1e1b4b" strokeWidth={3} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Jobs</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabWrapper}>
        <View style={styles.tabUnderlineBase} />
        <View style={styles.tabsContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={styles.tabItem}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
              {activeTab === tab && <View style={styles.activeUnderline} />}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Tab Contents */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {activeTab === "Upcoming" && <JobHomeCard />}
        {activeTab === "Accepted" && (
          <AcceptedJobCard onStartJob={() => setModalVisible(true)} />
        )}
        {activeTab === "Complete" && <CompleteJobCard />}
      </ScrollView>
      <OTPVerificationModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onVerify={(code) => console.log("OTP is:", code)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  backBtn: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1e1b4b",
    fontFamily: "Sora",
  },
  tabWrapper: {
    marginTop: 20,
    position: "relative",
  },
  tabsContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  tabItem: {
    flex: 1,
    paddingBottom: 15,
    alignItems: "center",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#9ca3af",
    fontFamily: "Sora",
  },
  activeTabText: {
    color: "#1e1b4b",
  },
  tabUnderlineBase: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: "#e5e7eb",
  },
  activeUnderline: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 2,
    backgroundColor: "#1e1b4b",
    borderRadius: 30,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default JobsScreen;
