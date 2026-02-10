import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  MessageSquare,
  Phone,
  MapPin,
  Calendar,
  Compass,
  User,
} from "lucide-react-native";
import { router } from "expo-router";

const JobCard = () => (
  <TouchableOpacity style={styles.card} onPress={() => router.push("/jobs")}>
    {/* Header: Title and Top Icons */}
    <View style={styles.cardHeader}>
      <Text style={styles.title}>Child Care</Text>
      <View style={styles.iconRow}>
        <TouchableOpacity
          style={[styles.iconCircle, { backgroundColor: "#1e1b4b" }]}
        >
          <MessageSquare size={18} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.iconCircle, { backgroundColor: "#f97316" }]}
        >
          <Phone size={18} color="white" />
        </TouchableOpacity>
      </View>
    </View>

    {/* User Info Section: Using User Icon instead of Image */}
    <View style={styles.userRow}>
      <View style={styles.iconBackgroundSmall}>
        <User size={14} color="#374151" />
      </View>
      <Text style={styles.userName}>Kari Chanchoda</Text>
    </View>

    {/* Location & Distance */}
    <View style={styles.infoRow}>
      <View style={styles.rowLeft}>
        <MapPin size={16} color="#1e1b4b" style={styles.inlineIcon} />
        <Text style={styles.address}>
          4517 Washington Ave. Manchester Kentucky 39495
        </Text>
      </View>
      <Text style={styles.distance}>2km from you</Text>
    </View>

    {/* Time & Price */}
    <View style={styles.infoRow}>
      <View style={styles.rowLeft}>
        <Calendar size={16} color="#1e1b4b" style={styles.inlineIcon} />
        <Text style={styles.time}>4:00PM • Today</Text>
      </View>
      <Text style={styles.price}>₹220/h</Text>
    </View>
    <Text style={styles.duration}>Duration: 2 Hours</Text>

    {/* Footer: Compass Icon and Start Button */}
    <View style={styles.footerRow}>
      <View style={styles.targetIconContainer}>
        <Compass size={24} color="#1e1b4b" />
      </View>
      <TouchableOpacity style={styles.startBtn}>
        <Text style={styles.btnText}>Start Job</Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

export default JobCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 16, fontWeight: "bold", color: "#1e1b4b" },
  iconRow: { flexDirection: "row", gap: 10 },
  iconCircle: {
    width: 35,
    height: 35,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  iconBackgroundSmall: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  userName: { fontWeight: "600", color: "#374151" },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 12,
  },
  rowLeft: {
    flexDirection: "row",
    flex: 0.7,
    alignItems: "flex-start",
  },
  inlineIcon: {
    marginRight: 6,
    marginTop: 1,
  },
  address: {
    flex: 1,
    fontSize: 12,
    color: "#6B7280",
    lineHeight: 18,
  },
  distance: { fontSize: 13, fontWeight: "bold", color: "#374151" },
  time: { fontSize: 13, color: "#374151" },
  price: { fontSize: 14, fontWeight: "bold", color: "#374151" },
  duration: {
    textAlign: "right",
    fontSize: 11,
    color: "#9CA3AF",
    marginTop: 5,
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    gap: 12,
  },
  targetIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
  },
  startBtn: {
    flex: 1,
    backgroundColor: "#0D9488",
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: { color: "white", fontWeight: "bold", fontSize: 15 },
});
