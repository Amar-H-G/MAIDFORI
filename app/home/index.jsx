import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import AvailabilityToggle from "../../components/Home/AvailabilityToggle";
import Footer from "../../components/Home/Footer";
import HeaderSection from "../../components/Home/HeaderSection";
import JobCard from "../../components/Home/JobCard";
import UpcomingBookingCard from "../../components/Home/UpcomingBookingCard";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="white" translucent={false} />
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
