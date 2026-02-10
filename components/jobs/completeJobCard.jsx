import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { User, MapPin, Calendar } from "lucide-react-native";

const CompleteJobCard = () => {
  return (
    <View style={styles.container}>
      {/* Job Card */}
      <View style={styles.card}>
        {/* Top Header Row */}
        <View style={styles.headerRow}>
          <Text style={styles.jobTitle}>Child Care</Text>
          <Text style={styles.jobId}>#123-456-789</Text>
        </View>

        {/* Content Body */}
        <View style={styles.contentBody}>
          {/* Left Side: Info */}
          <View style={styles.leftCol}>
            <View style={styles.infoRow}>
              <User size={18} color="#71717a" />
              <Text style={styles.userName}>Kari Chanchoda</Text>
            </View>

            <View style={[styles.infoRow, { alignItems: "flex-start" }]}>
              <MapPin size={18} color="#1e1b4b" />
              <Text style={styles.addressText}>
                4517 Washington Ave. Mans-,{"\n"}chester Kentucky 39495
              </Text>
            </View>

            <View style={styles.infoRow}>
              <Calendar size={18} color="#71717a" />
              <Text style={styles.dateTimeText}>4:00PM • Today</Text>
            </View>
          </View>

          {/* Right Side: Earnings */}
          <View style={styles.rightCol}>
            <Text style={styles.earningLabel}>Total Earning</Text>
            <Text style={styles.priceText}>₹220</Text>
            <Text style={styles.durationText}>Duration: 2 Hours</Text>
          </View>
        </View>
      </View>

      {/* Floating Action Button (FAB) - Image anujayi nicher dike thakbe */}
      <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
        <Calendar size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 20,
    marginTop: 20,
    // Soft shadow logic
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  jobTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#312e81",
  },
  jobId: {
    fontSize: 12,
    color: "#71717a",
  },
  contentBody: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftCol: {
    flex: 1.2,
    gap: 10,
  },
  rightCol: {
    flex: 0.8,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingBottom: 2,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  userName: {
    fontSize: 13,
    fontWeight: "600",
    color: "#3f3f46",
  },
  addressText: {
    fontSize: 12,
    color: "#52525b",
    lineHeight: 16,
  },
  dateTimeText: {
    fontSize: 13,
    color: "#52525b",
  },
  earningLabel: {
    fontSize: 13,
    color: "#71717a",
  },
  priceText: {
    fontSize: 20, // Image anujayi ektu boro kora holo
    fontWeight: "bold",
    color: "#18181b",
    marginVertical: 2,
  },
  durationText: {
    fontSize: 11,
    color: "#71717a",
  },
  // Floating Button Styling
  fab: {
    position: "absolute",
    bottom: -510, // Image anujayi screen-er bottom theke gap
    right: 20, // Image anujayi right corner-e position
    backgroundColor: "#2E2E74", // Dark Indigo color from image
    width: 65,
    height: 65,
    borderRadius: 33,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});

export default CompleteJobCard;
