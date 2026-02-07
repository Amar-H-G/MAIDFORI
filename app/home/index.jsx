import React from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";
import HeaderSection from "../../components/Home/HeaderSection";
import AvailabilityToggle from "../../components/Home/AvailabilityToggle";
import JobCard from "../../components/Home/JobCard";
import UpcomingBookingCard from "../../components/Home/UpcomingBookingCard";
import Footer from "../../components/Home/Footer";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderSection />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <AvailabilityToggle />

        <View style={styles.mainContent}>
          <JobCard />

          <Text style={styles.sectionTitle}>Upcoming Booking</Text>
          <UpcomingBookingCard />
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FA" },
  scrollContent: { paddingBottom: 100 },
  mainContent: { padding: 20 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e1b4b",
    marginVertical: 15,
  },
});
