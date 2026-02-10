import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { User, MapPin, Calendar, Clock } from "lucide-react-native";
import { useRouter } from "expo-router";

const JobHomeCard = () => {
  const router = useRouter();

  return (
    <View style={styles.card}>
      {/* Top Section: Title & Timer */}
      <View style={styles.topRow}>
        <Text style={styles.jobTitle}>Child Care</Text>
        <View style={styles.timerWrapper}>
          <Clock size={16} color="#71717a" />
          <Text style={styles.timerText}>05:30</Text>
        </View>
      </View>

      {/* Main Content Area */}
      <View style={styles.contentBody}>
        {/* Left Side: Info */}
        <View style={styles.leftInfo}>
          <View style={styles.infoItem}>
            <User size={18} color="#71717a" />
            <Text style={styles.infoTextMain}>Kari Chanchoda</Text>
          </View>

          <View style={[styles.infoItem, { alignItems: "flex-start" }]}>
            <MapPin size={18} color="#1e1b4b" />
            <Text style={styles.addressText}>
              4517 Washington Ave. Mans-,{"\n"}chester Kentucky 39495
            </Text>
          </View>

          <View style={styles.infoItem}>
            <Calendar size={18} color="#71717a" />
            <View style={styles.dateTimeRow}>
              <Text style={styles.infoTextSecondary}>4:00PM</Text>
              <View style={styles.dot} />
              <Text style={styles.infoTextSecondary}>Today</Text>
            </View>
          </View>
        </View>

        {/* Right Side: Stats */}
        <View style={styles.rightStats}>
          <Text style={styles.distanceText}>2km from you</Text>
          <Text style={styles.priceText}>₹220/h</Text>
          <Text style={styles.durationText}>Duration: 2 Hours</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.rejectBtn}>
          <Text style={styles.rejectText}>Reject</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.acceptBtn}
          onPress={() => router.push("/jobDetailes")}
        >
          <Text style={styles.acceptText}>Accept Job</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 20,
    marginTop: 15,
    // Soft Shadow like Image
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 15,
    elevation: 4,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  jobTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#312e81", // Indigo 900
    fontFamily: "Sora-Bold",
  },
  timerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  timerText: {
    fontSize: 14,
    color: "#52525b",
    fontFamily: "Sora-Regular",
  },
  contentBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  leftInfo: {
    flex: 1.2,
    gap: 12,
  },
  rightStats: {
    flex: 0.8,
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingBottom: 2,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  infoTextMain: {
    fontSize: 13,
    fontWeight: "600",
    color: "#3f3f46",
  },
  addressText: {
    fontSize: 12,
    color: "#52525b",
    lineHeight: 16,
    flexShrink: 1,
  },
  dateTimeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  infoTextSecondary: {
    fontSize: 13,
    color: "#52525b",
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "#71717a",
  },
  distanceText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#3f3f46",
  },
  priceText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#18181b",
    marginVertical: 4,
  },
  durationText: {
    fontSize: 11,
    color: "#71717a",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
  },
  rejectBtn: {
    flex: 1,
    backgroundColor: "#FEF2F2", // Very light red
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  acceptBtn: {
    flex: 1.5,
    backgroundColor: "#4D7C0F", // Professional Green
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  rejectText: {
    color: "#EF4444",
    fontWeight: "bold",
    fontSize: 14,
  },
  acceptText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default JobHomeCard;
